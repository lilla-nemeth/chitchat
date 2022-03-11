import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import User from './generic/User';
import ButtonComponent from './generic/ButtonComponent';
import TextInput from './generic/TextInput';
import TextArea from './generic/TextArea';
import Message from './generic/Message';
import SendIcon from '../assets/icons/SendIcon';
import { useParams } from 'react-router-dom';
import ActiveRoomComponent from './generic/ActiveRoomComponent';
import { createTimestamp } from '../Helperfunctions';
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
	InputContainer,
	MessageButton,
	Logo,
	StyledLink,
} from '../Style';

let DEBUG = true;

const Chat = () => {
	const { room_name, username } = useParams();
	const [messageInput, setMessageInput] = useState('');
	const [sentMessage, setSentMessage] = useState([]);
	const selectedRoom = useSelector((state) => state.roomReducer.rooms.find((room) => room.name === room_name));

	const handleSubmit = (e) => {
		e.preventDefault();

		// add new message to sentMessage array:
		createMessage(messageInput);

		// clear messageInput:
		setMessageInput('');
	};

	const handleChange = (e) => {
		setMessageInput(e.target.value);
	};

	// if (DEBUG) console.log('selectedRoom', selectedRoom);
	// if (DEBUG) console.log('room_name', room_name);
	// if (DEBUG) console.log('username', username);

	function createMessage(input) {
		// let timestamp = createTimestamp();
		let newMessage = input;

		setSentMessage([...sentMessage, newMessage]);

		if (DEBUG) console.log(sentMessage);
		return sentMessage;
	}

	return (
		<Main>
			<ChatRoom>
				<UserWrapper>
					<ActiveRoomContainer>
						<ActiveRoomComponent roomIcon={selectedRoom.icon} roomName={selectedRoom.name}></ActiveRoomComponent>
					</ActiveRoomContainer>
					<UsersContainer>
						<User username={username} />
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
						{sentMessage.map((message) => {
							// key={} - uuid/date?
							// change timestamp
							return <Message primary={true} username={username} timestamp={'10:20 AM Today'} text={message}></Message>;
						})}
					</MessageContainer>
					<Form onSubmit={handleSubmit}>
						<InputContainer>
							<TextInput primary={false} value={messageInput} placeholder={'Type your message'} onChange={handleChange} required={true} />
							<MessageButton>
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
