'use client';
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { socket } from '../../../socket';
import { HandleNameChangeInterface } from '../../../../types/reactTypes';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { addUser } from '@/app/lib/features/user/userSlice';
import { addMessage, addReplyMessage } from '@/app/lib/features/message/messageSlice';
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
import SendIcon from '../../../../assets/icons/SendIcon';
import ReplyIcon from '../../../../assets/icons/ReplyIcon';
import CloseIcon from '../../../../assets/icons/CloseIcon';
import { createTimestamp } from '../../../../utils/timestamp';
import { scrollToBottom } from '../../../../utils/scroll';
import { checkMessageLength } from '../../../../utils/message';
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
	const uuid = uuidv4();
	const timestamp = createTimestamp('{time}');

	const router = useRouter();
	const params = useParams();
	const scrollRef = useRef(null);

	const room_id: string | string[] = params.room_id;
	const username: string | string[] = params.username;

	// checking status of connection
	const [isConnected, setIsConnected] = useState<boolean>(false);
	//  checking if socket.io has created HTTP long-polling first
	const [transport, setTransport] = useState('N/A');

	const [message, setMessage] = useState<string>('');
	const [socketId, setSocketId] = useState<any>();
	const [activeReply, setActiveReply] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<any>([]);

	const users = useAppSelector((state: any) => state.users.users);
	const messages = useAppSelector((state: any) => state.messages.messages);
	const activeRoom = useAppSelector((state: any) => state.rooms.rooms.find((room: any) => room.id === room_id));
	const dispatch = useAppDispatch();

	const onConnect = () => {
		setIsConnected(true);
		setTransport(socket.io.engine.transport.name);

		socket.io.engine.on('upgrade', (transport) => {
			setTransport(transport.name);
		});

		const id = socket.id;
		// dispatch addUser action
		dispatch(addUser({ id, room_id, username, timestamp }));

		setSocketId(id);
	};

	const onDisconnect = () => {
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

	useEffect(() => {
		scrollToBottom(scrollRef);
	}, [messages.length]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const id = uuid;
		const userId = socketId;
		const author = username;

		console.log(messages);

		if (selectedMessage.length && activeReply) {
			// dispatch addReplyMessage action
			// dispatch(
			// 	addReplyMessage({
			// 		selectedMessage[0].id,
			// 		selectedMessage[0].userId,
			// 		selectedMessage[0].message,
			// 		selectedMessage[0].author,
			// 		selectedMessage[0].timestamp,
			// 		uuid,
			// 		socketId,
			// 		message,
			// 		username,
			// 		timestamp
			// 	})
			// );
			// dispatch(addMessage({ id, userId, message, author, timestamp }));
		} else {
			// dispatch addMessage action
			dispatch(addMessage({ id, userId, message, author, timestamp }));
		}

		setMessage('');
		setActiveReply(false);
	};

	const handleChange = (e: HandleNameChangeInterface) => {
		setMessage(e.target.value);
	};

	return (
		<Main $homemain={false} $mainheight={messages?.length > 2}>
			<ChatRoomContainer>
				<UserWrapper>
					<ActiveRoomContainer>{/* <ChatRoom roomIcon={activeRoom.icon} roomName={activeRoom.name}></ChatRoom> */}</ActiveRoomContainer>
					<UsersContainer $scrollvisible={users.length > 5}>
						{users
							.slice(0)
							.reverse()
							.map((user: any) => {
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
							<StyledLink href={'/'} onClick={() => socket.end()}>
								<SmallFormButton name={'Leave'} />
							</StyledLink>
						</ButtonContainer>
					</HeaderContainer>
					<MessageContainer>
						{messages?.map((msg: any) => {
							return (
								<Message
									key={msg.id}
									$chatbot={msg.author === '@chatbot'}
									username={msg.author}
									timestamp={msg.timestamp}
									text={msg.message}
									icon={<ReplyIcon />}
									onClick={() => {
										setActiveReply(!activeReply);
										setSelectedMessage(!activeReply ? [msg] : []);
									}}
									isResponseMessage={
										msg.prevId &&
										// msg.prevUserId
										msg.prevMessage &&
										msg.prevAuthor &&
										msg.prevTimestamp
									}
									prevMessage={msg.prevMessage}
									prevAuthor={msg.prevAuthor}
									prevTimestamp={msg.prevTimestamp}
								></Message>
							);
						})}
						<Ref ref={scrollRef}></Ref>
					</MessageContainer>
					<Form $homeform={false} onSubmit={handleSubmit}>
						<PrevMessageWrapper $replyactive={true}>
							{selectedMessage?.map((msg: any) => {
								return (
									<PrevMessage
										key={msg.id}
										author={msg.author}
										message={checkMessageLength(msg.message, 100)}
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
								<SmallFormButton to={false} isIcon={true} icon={<SendIcon />} />
							</MessageButton>
						</InputContainer>
					</Form>
				</MessageWrapper>
			</ChatRoomContainer>
		</Main>
	);
};

export default Chat;
