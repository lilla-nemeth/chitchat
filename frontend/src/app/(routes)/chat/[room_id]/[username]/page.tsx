'use client';
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { HandleNameChangeInterface } from '../../../../types/reactTypes';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { addUser } from '@/app/lib/features/user/userSlice';
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
import io from 'socket.io-client';

const Chat = () => {
	const socket = io('http://localhost:8080/');
	const uuid = uuidv4();
	const timestamp = createTimestamp('{time}');

	const scrollRef = useRef(null);

	const router = useRouter();

	const room_id = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('room_id') : '';
	const username = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('username') : '';
	// const { room_id, username } = router.query;

	// if (!router) {
	// 	return <div>Loading...</div>;
	// }

	const [messageInput, setMessageInput] = useState('');
	const [socketId, setSocketId] = useState();
	const [activeReply, setActiveReply] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<any>([]);

	const users = useAppSelector((state: any) => state.users);
	const messages = useAppSelector((state: any) => state.messages);
	const activeRoom = useAppSelector((state: any) => state.rooms.rooms.find((room: any) => room.id === room_id));
	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.on('connect', () => {
			const id = socket.id;
			// dispatch addUser action
			dispatch(addUser({ id, room_id, username, timestamp }));
			console.log(users);

			// setSocketId(id);
		});

		socket.on('disconnect', () => {
			// navigate('/');
		});
	}, []);

	useEffect(() => {
		scrollToBottom(scrollRef);
	}, [messages]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (selectedMessage.length && activeReply) {
			// dispatch addReplyMessage action
			// dispatch();
			// addReplyMessage(
			// 	selectedMessage[0].id,
			// 	selectedMessage[0].userId,
			// 	selectedMessage[0].message,
			// 	selectedMessage[0].author,
			// 	selectedMessage[0].timestamp,
			// 	uuid,
			// 	socketId,
			// 	messageInput,
			// 	username,
			// 	timestamp
			// )
		} else {
			// dispatch addMessage action
			// dispatch(addMessage(uuid, socketId, messageInput, username, timestamp));
		}

		setMessageInput('');
		setActiveReply(false);
	};

	const handleChange = (e: HandleNameChangeInterface) => {
		setMessageInput(e.target.value);
	};

	return (
		<Main $homemain={false} $mainheight={messages.length > 2}>
			<ChatRoomContainer>
				<UserWrapper>
					<ActiveRoomContainer>{/* <ChatRoom roomIcon={activeRoom.icon} roomName={activeRoom.name}></ChatRoom> */}</ActiveRoomContainer>
					<UsersContainer $scrollvisible={users.length > 5}>
						{/* {users
							.slice(0)
							.reverse()
							.map((user: any) => {
								return (
									<User
										key={user.id}
										$currentuser={user.id === socketId}
										$scrollvisible={users.length > 5}
										username={user.username}
									/>
								);
							})} */}
					</UsersContainer>
				</UserWrapper>
				<MessageWrapper>
					<HeaderContainer>
						<Header>
							<Logo>ChitChat</Logo>
						</Header>
						<ButtonContainer>
							{/* <StyledLink to={'/'} onClick={() => socket.end()}>
								<SmallFormButton name={'Leave'} />
							</StyledLink> */}
						</ButtonContainer>
					</HeaderContainer>
					<MessageContainer>
						{/* {messages.map((msg: any) => {
							return (
								<Message
									key={msg.id}
									$chatbot={msg.author === '@$chatbot'}
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
						})} */}
						<Ref ref={scrollRef}></Ref>
					</MessageContainer>
					<Form $homeform={false} onSubmit={handleSubmit}>
						<PrevMessageWrapper $replyactive={true}>
							{selectedMessage.map((msg: any) => {
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
								value={messageInput}
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
