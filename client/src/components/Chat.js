import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// generic components:
import User from './generic/User';
import ButtonComponent from './generic/ButtonComponent';
import TextInput from './generic/TextInput';
import TextArea from './generic/TextArea';
import Message from './generic/Message';
import ActiveRoomComponent from './generic/ActiveRoomComponent';
// styled components:
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
// icons:
import SendIcon from '../assets/icons/SendIcon';
// redux actions:
import { addMessage, receivedMessage } from '../actions';
// helper functions:
import {
  createTimestamp,
  scrollToBottom,
  changeActionType,
} from '../Helperfunctions';

let DEBUG = false;

const Chat = (props) => {
  const { socket } = props;

  const { room_id, username } = useParams();
  const selectedRoom = useSelector((state) =>
    state.roomReducer.rooms.find((room) => room.id === room_id)
  );
  // all users:
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [messageInput, setMessageInput] = useState('');
  const [sentMessage, setSentMessage] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState();
  const messageEndRef = useRef(null);

  const timestamp = createTimestamp('{time}');

  const disabled = !messageInput;

  if (DEBUG) console.log(socket);

  // socket.on('connect', () => {
  //   // message from server
  // });

  socket.on('message', (message) => {
    console.log(message);
    setStatusMessage(message);
  });

  // chatMessage from server
  socket.on('sentMessage', (sentMessage) => {
    const message = changeActionType(sentMessage);
    setReceivedMessage(message);
    console.log('receivedMessage', receivedMessage);
    // console.log('message', message);
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    scrollToBottom(messageEndRef);

    // TODO: fix this later, each message in the array should receive timestamp,
    // emit chatMessage to the server
    socket.emit(
      'chatMessage',
      dispatch(addMessage(sentMessage, username, timestamp))
    );
    // clear messageInput:
    setMessageInput('');
  };

  const handleChange = (e) => {
    setMessageInput(e.target.value);
  };

  // if (DEBUG) console.log('selectedRoom', selectedRoom);
  // if (DEBUG) console.log('users', users);
  // if (DEBUG) console.log('room_name', room_name);
  // if (DEBUG) console.log('username', username);
  if (DEBUG) console.log('socket from Chat component', socket);

  return (
    <Main>
      <ChatRoom>
        <UserWrapper>
          <ActiveRoomContainer>
            <ActiveRoomComponent
              roomIcon={selectedRoom.icon}
              roomName={selectedRoom.name}
            ></ActiveRoomComponent>
          </ActiveRoomContainer>
          <UsersContainer>
            {/* TODO: users array should only list (map) those users, where roomId matches with the url params room_id */}
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
            {/* {statusMessage} */}
            {sentMessage.map((message) => {
              return (
                <>
                  <Message
                    key={uuidv4()}
                    primary={true}
                    username={username}
                    timestamp={timestamp}
                    text={message}
                  ></Message>
                </>
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
                {/* TODO: create disabled button here */}
                <ButtonComponent
                  to={false}
                  name={'Send'}
                  isIcon={true}
                  iconComponent={<SendIcon />}
                  onClick={() => setSentMessage([...sentMessage, messageInput])}
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
