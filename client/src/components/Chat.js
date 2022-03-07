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
	const { id } = useParams();
	const [message, setMessage] = useState('');
	const selectedRoom = useSelector((state) => state.roomReducer.rooms.find((room) => room.id === id));

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	if (DEBUG) console.log('selectedRoom', selectedRoom);

	return (
		<Main>
			<ChatRoom>
				<UserWrapper>
					<ActiveRoomContainer>
						<ActiveRoomComponent roomIcon={selectedRoom.icon} roomName={selectedRoom.name}></ActiveRoomComponent>
					</ActiveRoomContainer>
					<UsersContainer>
						<User username={'Morzsa'} />
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
						<Message primary={true} username={'Morzsa'} timestamp={'10:20 AM Today'} text={'Hello!'}></Message>
						<Message primary={false} username={'Bodri'} timestamp={'10:20 AM Today'} text={'How are you?'}></Message>
					</MessageContainer>
					<Form onSubmit={handleSubmit}>
						<InputContainer>
							<TextInput primary={false} value={message} placeholder={'Type your message'} onChange={handleChange} />
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
