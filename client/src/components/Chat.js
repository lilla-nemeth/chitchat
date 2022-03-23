import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import User from './generic/User';
import ButtonComponent from './generic/ButtonComponent';
import TextInput from './generic/TextInput';
import TextArea from './generic/TextArea';
import Message from './generic/Message';
import SendIcon from '../assets/icons/SendIcon';
import { useParams } from 'react-router-dom';
import ActiveRoomComponent from './generic/ActiveRoomComponent';
import { createTimestamp, scrollToBottom } from '../Helperfunctions';
import { v4 as uuidv4 } from 'uuid';
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
} from '../Style';

let DEBUG = false;

const Chat = () => {
  const { room_id, username } = useParams();
  const selectedRoom = useSelector((state) =>
    state.roomReducer.rooms.find((room) => room.id === room_id)
  );
  // TODO: select user by id, now it uses the whole users array
  const users = useSelector((state) => state.userReducer.users);
  const [messageInput, setMessageInput] = useState('');
  const [sentMessage, setSentMessage] = useState([]);
  const messageEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    scrollToBottom(messageEndRef);

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
            {/* TODO: remove this map (it will not be necessary) */}
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
            {sentMessage.map((message) => {
              return (
                <>
                  <Message
                    key={uuidv4()}
                    primary={true}
                    username={username}
                    timestamp={createTimestamp('%r')}
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
