import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// generic components
import ButtonComponent from './generic/ButtonComponent';
import RoomButton from './generic/RoomButton';
import TextInput from './generic/TextInput';
// styled components
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../style';
// helper function
import { createTimestamp } from '../utils/timestamp';
import { addUser, messageReceived } from '../actions';

let DEBUG = true;

const Home = () => {
  // const [username, setUsername] = useState('');
  const [username, setUsername] = useState('chatUser');
  const rooms = useSelector((state) => state.roomReducer.rooms);
  const dispatch = useDispatch();
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);
  const navigate = useNavigate();

  const timestamp = createTimestamp('%Y-%m-%d %r');
  // const timestamp = createTimestamp('{time}');

  const disabled = !username;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(null, selectedRoom, username, timestamp));

    navigate(`chat/${selectedRoom}/${username}`);
  };

  return (
    <Main>
      <Wrapper primary>
        <Logo primary>ChitChat</Logo>
        <Form primary onSubmit={handleSubmit}>
          <TextInput
            primary={true}
            name={'Username'}
            labelName={'Username'}
            value={username}
            placeholder={'Username'}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <Label>Rooms</Label>
          <RoomContainer>
            {rooms.map((room) => (
              <RoomButton
                key={room.id}
                roomName={room.name}
                roomIcon={room.icon}
                id={room.id}
                name={'selectedRoom'}
                value={room.id}
                defaultChecked={room.name === 'chill'}
                onChange={(e) => {
                  setSelectedRoom(e.target.value);
                }}
              ></RoomButton>
            ))}
          </RoomContainer>
          {disabled ? (
            <ButtonComponent primary={true} name={'Join'} />
          ) : (
            <ButtonComponent primary={false} name={'Join'} />
          )}
        </Form>
      </Wrapper>
    </Main>
  );
};

export default Home;
