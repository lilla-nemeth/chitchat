import React, { useState, useRef, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
// generic components
import User from '../../components/User';
import SmallFormButton from '../../components/SmallFormButton';
import TextInput from '../../components/TextInput';
import Message from '../../components/Message';
import ChatRoom from '../../components/ChatRoom';
import PrevMessage from '../../components/PrevMessage';
// styled components
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
} from '../../styles';
// icons
import SendIcon from '../../assets/icons/SendIcon';
import ReplyIcon from '../../assets/icons/ReplyIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
// redux actions
import { addUser, addMessage, addReplyMessage } from '../../actions';
// helper functions
import { createTimestamp } from '../../utils/timestamp';
import { scrollToBottom } from '../../utils/scroll';
import { checkMessageLength } from '../../utils/message';
// uuid
import { v4 as uuidv4 } from 'uuid';
// socket
import io from 'socket.io-client';

// let DEBUG = true;

const Chat = () => {
	const socket = io('http://localhost:8080/');
	const uuid = uuidv4();
	const timestamp = createTimestamp('{time}');
	// const timestamp = createTimestamp('%Y-%m-%d %r');

	const scrollRef = useRef(null);

	// const { room_id, username } = useParams();
	// const navigate = useNavigate();

	const [messageInput, setMessageInput] = useState('');
	const [socketId, setSocketId] = useState();
	const [activeReply, setActiveReply] = useState(false);
	const [selectedMessage, setSelectedMessage] = useState<any>([]);

	const users = useAppSelector((state: any) => state.userReducer);
	const messages = useAppSelector((state: any) => state.messageReducer);
	// const activeRoom = useAppSelector((state: any) => state.roomReducer.rooms.find((room: any) => room.id === room_id));
	const dispatch = useAppDispatch();

	useEffect(() => {
		socket.on('connect', () => {
			const id = socket.id;
			// dispatch addUser action
			// dispatch(addUser(id, room_id, username, timestamp));

			// setSocketId(id);
		});

		socket.on('disconnect', () => {
			// navigate('/');
		});
	}, []);

	useEffect(() => {
		scrollToBottom(scrollRef);
	}, [messages]);

	const handleSubmit = (e: any) => {
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

	const handleChange = (e: any) => {
		setMessageInput(e.target.value);
	};

	return (
		<Main homeMain={false} mainHeight={messages.length > 2}>
			<ChatRoomContainer>
				<UserWrapper>
					<ActiveRoomContainer>{/* <ChatRoom roomIcon={activeRoom.icon} roomName={activeRoom.name}></ChatRoom> */}</ActiveRoomContainer>
					<UsersContainer scrollVisible={users.length > 5}>
						{users
							.slice(0)
							.reverse()
							.map((user: any) => {
								return <User key={user.id} currentUser={user.id === socketId} scrollVisible={users.length > 5} username={user.username} />;
							})}
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
						{messages.map((msg: any) => {
							return (
								<Message
									key={msg.id}
									chatBot={msg.author === '@ChatBot'}
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
					<Form homeForm={false} onSubmit={handleSubmit}>
						<PrevMessageWrapper replyActive={activeReply}>
							{selectedMessage.map((msg: any) => {
								return (
									<PrevMessage
										key={msg.id}
										author={msg.author}
										message={checkMessageLength(msg.message, '100')}
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
								homeLabel={false}
								primary={false}
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
