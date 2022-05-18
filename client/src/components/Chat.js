import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import { addUser, addMessage } from '../actions';
// helper functions
import { createTimestamp } from '../utils/timestamp';
import { getCurrentUserId } from '../utils/users';
import { scrollToBottom } from '../utils/scroll';
// uuid
import { v4 as uuidv4 } from 'uuid';

import io from 'socket.io-client';

let DEBUG = true;

const Chat = () => {
  const socket = io('http://localhost:3003/');

  const messageEndRef = useRef(null);
  const { room_id, username } = useParams();

  const activeRoom = useSelector((state) =>
    state.roomReducer.rooms.find((room) => room.id === room_id)
  );
  const navigate = useNavigate();
  const users = useSelector((state) => state.userReducer);
  const messages = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();

  const [messageInput, setMessageInput] = useState('');
  const [sentMessage, setSentMessage] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState();

  // const timestamp = createTimestamp('%Y-%m-%d %r');
  const timestamp = createTimestamp('{time}');
  const uuid = uuidv4();

  useEffect(() => {
    // dispatch user
    socket.on('connect', () => {
      dispatch(addUser(socket.id, room_id, username, timestamp));
    });
  }, []);

  useEffect(() => {
    scrollToBottom(messageEndRef);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch message with form submit
    dispatch(
      addMessage(
        uuid,
        getCurrentUserId(users, username),
        messageInput,
        username,
        timestamp
      )
    );

    // clear messageInput:
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
            <StyledLink to={'/'} onClick={() => socket.end()}>
              <ButtonComponent name={'Leave'} />
            </StyledLink>
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
                <ButtonComponent
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
