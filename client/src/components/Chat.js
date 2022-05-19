import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// generic components
import User from './generic/User';
import ButtonComponent from './generic/ButtonComponent';
import SmallButton from './generic/SmallButton';
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
  ButtonContainer,
} from '../style';
// icon
import SendIcon from '../assets/icons/SendIcon';
// redux actions
import { addUser, addMessage } from '../actions';
// helper functions
import { createTimestamp } from '../utils/timestamp';
import { getCurrentUserId } from '../utils/users';
import { scrollToBottom } from '../utils/scroll';
// uuid
import { v4 as uuidv4 } from 'uuid';
// socket
import io from 'socket.io-client';

let DEBUG = true;

const Chat = () => {
  const socket = io('http://localhost:8080/');
  const uuid = uuidv4();
  const timestamp = createTimestamp('{time}');
  // const timestamp = createTimestamp('%Y-%m-%d %r');

  const messageEndRef = useRef(null);
  const { room_id, username } = useParams();

  const [messageInput, setMessageInput] = useState('');

  const users = useSelector((state) => state.userReducer);
  const messages = useSelector((state) => state.messageReducer);
  const activeRoom = useSelector((state) =>
    state.roomReducer.rooms.find((room) => room.id === room_id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch addUser action
    socket.on('connect', () => {
      dispatch(addUser(socket.id, room_id, username, timestamp));
    });
  }, []);

  useEffect(() => {
    scrollToBottom(messageEndRef);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch addMessage action
    dispatch(
      addMessage(
        uuid,
        getCurrentUserId(users, username),
        messageInput,
        username,
        timestamp
      )
    );

    setMessageInput('');
  };

  const handleChange = (e) => {
    setMessageInput(e.target.value);
  };

  return (
    <Main>
      <ChatRoom>
        <UserWrapper>
          <ActiveRoomContainer>
            <ActiveRoomComponent
              roomIcon={activeRoom.icon}
              roomName={activeRoom.name}
            ></ActiveRoomComponent>
          </ActiveRoomContainer>
          <UsersContainer>
            {users.map((user) => {
              return <User key={user.id} username={user.username} />;
            })}
          </UsersContainer>
        </UserWrapper>
        <MessageWrapper>
          <HeaderContainer>
            <Header>
              <Logo>ChitChat</Logo>
            </Header>
            <ButtonContainer>
              <StyledLink to={'/'} onClick={() => socket.end()}>
                <SmallButton name={'Leave'} />
              </StyledLink>
            </ButtonContainer>
          </HeaderContainer>
          <MessageContainer>
            {messages.map((msg) => {
              return (
                <Message
                  key={msg.id}
                  primary={true}
                  username={msg.author}
                  timestamp={msg.timestamp}
                  text={msg.message}
                ></Message>
              );
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
                <SmallButton
                  to={false}
                  isIcon={true}
                  iconComponent={<SendIcon />}
                  // name={'Send'}
                />
              </MessageButton>
            </InputContainer>
          </Form>
        </MessageWrapper>
      </ChatRoom>
    </Main>
  );
};

export default Chat;
