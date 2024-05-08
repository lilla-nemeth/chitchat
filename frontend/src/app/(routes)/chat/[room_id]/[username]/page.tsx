'use client';
// React, Next Navigation, Socket, UUID
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import socket from '../../../socket';
import { v4 as uuidv4 } from 'uuid';
// Types
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { HandleNameChangeInterface } from '../../../../types/reactTypes';
import {
	Message as MessageType,
	SelectedMessage as SelectedMessageType,
	User as UserType,
	CustomRootState,
	Room as RoomType,
	SelectedMessage,
} from '../../../../types/reduxTypes';
// Redux
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { addUser } from '@/app/lib/features/user/userSlice';
import { addMessage, addReplyMessage } from '@/app/lib/features/message/messageSlice';
// Components
import User from '../../../../components/User';
import SmallFormButton from '../../../../components/SmallFormButton';
import TextInput from '../../../../components/TextInput';
import Message from '../../../../components/Message';
import ChatRoom from '../../../../components/ChatRoom';
import PrevMessage from '../../../../components/PrevMessage';
import {
	Main,
	Form,
	ChatRoomContainer,
	UserWrapper,
	UsersContainer,
	ActiveRoomContainer,
	MessageWrapper,
	HeaderContainer,
	Header,
	MessageContainer,
	Ref,
	InputContainer,
	MessageButton,
	Logo,
	StyledLink,
	ButtonContainer,
	PrevMessageWrapper,
} from '../../../../styles';
// Assets
import SendIcon from '../../../../assets/icons/SendIcon';
import ReplyIcon from '../../../../assets/icons/ReplyIcon';
import CloseIcon from '../../../../assets/icons/CloseIcon';
// Helper Functions
import { createTimestamp } from '../../../../utils/timestamp';
import { scrollToBottom } from '../../../../utils/scroll';
import { checkMessageLength } from '../../../../utils/message';

const Chat = () => {
	const uuid = uuidv4();
	const timestamp = createTimestamp('{time}');

	const router: AppRouterInstance = useRouter();
	const params: Params = useParams();
	const scrollRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

	const room_id: RoomType['id'] = params.room_id;
	const username: UserType['username'] = params.username;

	// checking status of connection (isConnected) and if socket.io has created HTTP long-polling first (transport)
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [transport, setTransport] = useState<string>('N/A');
	const [message, setMessage] = useState<MessageType['message']>('');
	const [socketId, setSocketId] = useState<string | undefined>('');
	const [activeReply, setActiveReply] = useState<boolean>(false);
	const [selectedMessage, setSelectedMessage] = useState<SelectedMessage[]>([]);

	const users = useAppSelector((state: CustomRootState) => state.users.users);
	const messages = useAppSelector((state: CustomRootState) => state.messages.messages);
	const activeRoom = useAppSelector((state: CustomRootState) => state.rooms.rooms.find((room: RoomType) => room.id === room_id));

	const dispatch = useAppDispatch();

	const onConnect = (): void => {
		setIsConnected(true);
		setTransport(socket.io.engine.transport.name);

		socket.io.engine.on('upgrade', (transport) => {
			setTransport(transport.name);
		});

		const id = socket.id;

		dispatch(addUser({ id, room_id, username, timestamp }));

		setSocketId(id);
	};

	const onDisconnect = (): void => {
		setIsConnected(false);
		setTransport('N/A');

		router.push('/');
	};

	useEffect(() => {
		if (socket.connected) {
			onConnect();
		}

		socket.on('connect', onConnect);
		socket.on('disconnect', onDisconnect);

		return () => {
			socket.off('connect', onConnect);
			socket.off('disconnect', onDisconnect);
		};
	}, []);

	useEffect((): void => {
		scrollToBottom(scrollRef);
	}, [messages.length]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		const id = uuid;
		const userId = socketId;
		const author = username;
		const selectedMessageId: SelectedMessageType['id'] = selectedMessage[0]?.id;
		const selectedMessageUserId: SelectedMessageType['selectedMessageUserId'] = selectedMessage[0]?.selectedMessageUserId;
		const selectedMessageMsg: SelectedMessageType['selectedMessageMsg'] = selectedMessage[0]?.selectedMessageMsg;
		const selectedMessageAuthor: SelectedMessageType['selectedMessageAuthor'] = selectedMessage[0]?.selectedMessageAuthor;
		const selectedMessageTimestamp: SelectedMessageType['selectedMessageTimestamp'] = selectedMessage[0]?.selectedMessageTimestamp;

		e.preventDefault();

		if (selectedMessage && activeReply) {
			dispatch(
				addReplyMessage({
					id,
					selectedMessageId,
					selectedMessageUserId,
					selectedMessageMsg,
					selectedMessageAuthor,
					selectedMessageTimestamp,
					userId,
					message,
					author,
					timestamp,
				})
			);
		} else {
			dispatch(addMessage({ id, userId, message, author, timestamp }));
		}

		setMessage('');
		setActiveReply(false);
	};

	const handleChange = (e: HandleNameChangeInterface): void => {
		setMessage(e.target.value);
	};

	const handleLeaveRoom = (): void => {
		// socket.leave works, but not recognized as fn
		// @ts-ignore
		socket.leave(room_id);

		router.push('/');
	};

	return (
		<>
			<Main $homemain={false} $mainheight={messages?.length > 2}>
				<ChatRoomContainer>
					<UserWrapper>
						<ActiveRoomContainer>
							<ChatRoom roomIcon={activeRoom?.icon} roomName={activeRoom?.name}></ChatRoom>
						</ActiveRoomContainer>
						<UsersContainer $scrollvisible={users.length > 5}>
							{users
								.slice(0)
								.reverse()
								.map((user: UserType) => {
									return (
										<User key={user.id} $currentuser={user.id === socketId} $scrollvisible={users.length > 5} username={user.username} />
									);
								})}
						</UsersContainer>
					</UserWrapper>
					<MessageWrapper>
						<HeaderContainer>
							<Header>
								<Logo>ChitChat</Logo>
							</Header>
							<ButtonContainer>
								<StyledLink href={'/'} onClick={handleLeaveRoom}>
									<SmallFormButton text={'Leave'} />
								</StyledLink>
							</ButtonContainer>
						</HeaderContainer>
						<MessageContainer>
							{messages?.map((msg: MessageType) => {
								return (
									<Message
										key={msg.id}
										$chatbot={msg.author === '@chatbot'}
										author={msg.author}
										timestamp={msg.timestamp}
										message={msg.message}
										icon={<ReplyIcon />}
										onClick={() => {
											setActiveReply(!activeReply);
											setSelectedMessage(!activeReply ? [msg] : []);
										}}
										prevMessage={msg.selectedMessageMsg}
										prevAuthor={msg.selectedMessageAuthor}
										prevTimestamp={msg.selectedMessageTimestamp}
									></Message>
								);
							})}
							<Ref ref={scrollRef}></Ref>
						</MessageContainer>
						<Form $homeform={false} onSubmit={handleSubmit}>
							<PrevMessageWrapper $replyactive={activeReply}>
								{selectedMessage.map((msg: SelectedMessage) => {
									return (
										<PrevMessage
											key={msg.id}
											author={msg.selectedMessageAuthor}
											message={checkMessageLength(msg.selectedMessageMsg as string, 100)}
											icon={<CloseIcon />}
											onClick={() => {
												setActiveReply(!activeReply);
												setSelectedMessage([]);
											}}
										></PrevMessage>
									);
								})}
							</PrevMessageWrapper>
							<InputContainer>
								<TextInput
									$homelabel={false}
									$primary={false}
									name={'Message'}
									value={message}
									placeholder={'Type your message'}
									onChange={handleChange}
									required={true}
									autoFocus={true}
								/>
								<MessageButton>
									<SmallFormButton isIcon={true} icon={<SendIcon />} />
								</MessageButton>
							</InputContainer>
						</Form>
					</MessageWrapper>
				</ChatRoomContainer>
			</Main>
		</>
	);
};

export default Chat;
