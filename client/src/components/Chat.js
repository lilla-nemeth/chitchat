import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// generic components
import User from './generic/User';
import ButtonComponent from './generic/ButtonComponent';
import TextInput from './generic/TextInput';
import TextArea from './generic/TextArea';
import Message from './generic/Message';
import ActiveRoomComponent from './generic/ActiveRoomComponent';
// styled components
import {
	Main,
	Form,
	ChatRoom,
	UserWrapper,
	UsersContainer,
	ActiveRoomContainer,
	MessageWrapper,
	HeaderContainer,
	Header,
	MessageContainer,
	MessageRef,
	InputContainer,
	MessageButton,
	Logo,
	StyledLink,
} from '../style';
// icon
import SendIcon from '../assets/icons/SendIcon';
// redux actions
import { addUser, addMessage, messageReceived } from '../actions';
// helper functions
import { createTimestamp, scrollToBottom } from '../Helperfunctions';
// socket.io
import { io } from 'socket.io-client';

let DEBUG = true;

const socket = io('http://localhost:3003');

const Chat = () => {
	const messageEndRef = useRef(null);
	const { room_id, username } = useParams();

	const activeRoom = useSelector((state) => state.roomReducer.rooms.find((room) => room.id === room_id));
	const users = useSelector(
		(state) => state.userReducer
		// state.userReducer.find((user) => user.roomId === room_id)
		// state.userReducer.find((user) => user.roomId === activeRoom.id)
	);

	const messages = useSelector((state) => state.messageReducer);
	const dispatch = useDispatch();

	const [messageInput, setMessageInput] = useState('');
	const [statusMessage, setStatusMessage] = useState('');
	const [receivedMessage, setReceivedMessage] = useState();

	const timestamp = createTimestamp('{time}');

	const disabled = !messageInput;

	useEffect(() => {
		scrollToBottom(messageEndRef);
	}, [messages]);

	useEffect(() => {
		// TODO: fix this
		socket.emit('joinUser', dispatch(addUser(room_id, username, timestamp)));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		// emit chatMessage to the server
		socket.emit('chatMessage', dispatch(addMessage(messageInput, username, timestamp)));

		// clear messageInput:
		setMessageInput('');
	};

	// TODO: fix this, it's not perfect
	// socket.on('message', (message) => {
	// 	dispatch(messageReceived(message, username, timestamp));
	// });

	// get chatMessage from server
	socket.on('sentMessage', (addMessage) => {
		setReceivedMessage(addMessage);
	});

	// get status message from server
	// socket.on('message', (message) => {
	// 	// TODO: fix this, it's not perfect
	// 	// dispatch(messageReceived(message, username, timestamp));
	// 	setStatusMessage(message);
	// });

	const handleChange = (e) => {
		setMessageInput(e.target.value);
	};

	// if (DEBUG) console.log('socket - Chat', socket);
	// if (DEBUG) console.log('users', users);
	// if (DEBUG) console.log('activeRoom', activeRoom);
	// if (DEBUG) console.log('activeRoom id', activeRoom.id);
	// if (DEBUG) console.log('username', username);
	if (DEBUG) console.log('messages', messages);
	if (DEBUG) console.log('statusMessage', statusMessage);
	if (DEBUG) console.log('receivedMessage', receivedMessage);
	if (DEBUG) console.log('messages length', messages.length);

	return (
		<Main>
			<ChatRoom>
				<UserWrapper>
					<ActiveRoomContainer>
						<ActiveRoomComponent roomIcon={activeRoom.icon} roomName={activeRoom.name}></ActiveRoomComponent>
					</ActiveRoomContainer>
					<UsersContainer>
						{users.map((user) => {
							if (user.roomId === activeRoom.id) {
								return <User key={user.id} username={user.username} />;
							}
						})}
					</UsersContainer>
				</UserWrapper>
				<MessageWrapper>
					<HeaderContainer>
						<Header>
							<Logo>ChitChat</Logo>
						</Header>
						<StyledLink to={'/'}>
							<ButtonComponent name={'Leave'} />
						</StyledLink>
					</HeaderContainer>
					<MessageContainer>
						{/* TODO: put a ternary here, which message should loop (statusMessage or messages from server)
            or add the status messages via addMessage(...)
            */}
						{/* {statusMessage} */}
						{messages.map((msg) => {
							return <Message key={msg.id} primary={true} username={msg.author} timestamp={msg.timestamp} text={msg.message}></Message>;
						})}
						<MessageRef ref={messageEndRef}></MessageRef>
					</MessageContainer>
					<Form onSubmit={handleSubmit}>
						<InputContainer>
							<TextInput
								primary={false}
								name={'Message'}
								value={messageInput}
								placeholder={'Type your message'}
								onChange={handleChange}
								required={true}
							/>
							<MessageButton>
								{/* TODO: button - disabled*/}
								<ButtonComponent to={false} name={'Send'} isIcon={true} iconComponent={<SendIcon />} />
							</MessageButton>
						</InputContainer>
					</Form>
				</MessageWrapper>
			</ChatRoom>
		</Main>
	);
};

export default Chat;
