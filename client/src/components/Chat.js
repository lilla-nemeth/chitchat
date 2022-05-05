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
import { addUser, updateUsers, addMessage, messageReceived } from '../actions';
// helper functions
import { createTimestamp } from '../utils/timestamp';
import { scrollToBottom } from '../utils/scroll';
import { io } from 'socket.io-client';

let DEBUG = true;

const socket = io('http://localhost:3003');

const Chat = () => {
  const messageEndRef = useRef(null);
  const { room_id, username } = useParams();

  const activeRoom = useSelector((state) =>
    state.roomReducer.rooms.find((room) => room.id === room_id)
  );
  const users = useSelector(
    (state) => state.userReducer
    // state.userReducer.find((user) => user.roomId === room_id)
    // state.userReducer.find((user) => user.roomId === activeRoom.id)
  );
  const messages = useSelector((state) => state.messageReducer);

  const dispatch = useDispatch();

  const [messageInput, setMessageInput] = useState('');
  const [sentMessage, setSentMessage] = useState([]);
  const [receivedMessage, setReceivedMessage] = useState();

  const timestamp = createTimestamp('{time}');

  const disabled = !messageInput;

  const botName = 'ChatBot';

  // All received data from server should be in useEffect
  useEffect(() => {
    // TODO: fix this, I get the same user 2 times
    socket.emit(
      'joinRoom',
      socket.id,
      room_id,
      username,
      timestamp
      // dispatch(addUser(socket.id, room_id, username, timestamp))
    );

    socket.on('usersList', (user) => {
      // console.log(
      //   'user from backend',
      //   user.id,
      //   user.roomId,
      //   user.username,
      //   user.timestamp
      // );
      socket.emit(
        'addUser',
        dispatch(addUser(user.id, user.roomId, user.username, user.timestamp))
      );
    });

    // TODO: fix this, I get the same message 4 times
    // get status message from server
    socket.on('message', (message) => {
      dispatch(messageReceived(socket.id, message, botName, timestamp));
    });
  }, []);

  useEffect(() => {
    scrollToBottom(messageEndRef);
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // emit chatMessage to the server
    socket.emit(
      'chatMessage',
      dispatch(addMessage(socket.id, messageInput, username, timestamp))
    );

    // clear messageInput:
    setMessageInput('');
  };

  // get chatMessage from server
  socket.on('sentMessage', (addMessage) => {
    setReceivedMessage(addMessage);
  });

  const handleChange = (e) => {
    setMessageInput(e.target.value);
  };

  if (DEBUG) console.log('users', users);
  // if (DEBUG) console.log('messages', messages);
  // if (DEBUG) console.log('messages length', messages.length);
  // if (DEBUG) console.log('socket - Chat', socket);
  // if (DEBUG) console.log('socket.id - Chat', socket.id);
  // if (DEBUG) console.log('activeRoom', activeRoom);
  // if (DEBUG) console.log('activeRoom id', activeRoom.id);
  // if (DEBUG) console.log('username', username);
  // if (DEBUG) console.log('statusMessage', statusMessage);
  // if (DEBUG) console.log('receivedMessage', receivedMessage);

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
            <StyledLink to={'/'}>
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
                {/* TODO: button - disabled*/}
                <ButtonComponent
                  to={false}
                  // name={'Send'}
                  isIcon={true}
                  iconComponent={<SendIcon />}
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
