import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from './generic/ButtonComponent';
import RoomButton from './generic/RoomButton';
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../Style';
import TextInput from './generic/TextInput';
import { createUser } from '../actions/userActions';
import { createTimestamp } from '../Helperfunctions';
import { v4 as uuidv4 } from 'uuid';

let DEBUG = true;

const Home = () => {
  // TODO: change the harcoded username at the end of the project
  // const [username, setUsername] = useState('');
  const [username, setUsername] = useState('username');
  const rooms = useSelector((state) => state.roomReducer.rooms);
  const dispatch = useDispatch();
  const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);

  const navigate = useNavigate();

  const disabled = !username;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createUser(
        uuidv4(),
        selectedRoom,
        username,
        createTimestamp('%Y-%m-%d %R %p')
      )
    );
    // if (DEBUG)
    //   console.log(
    //     dispatch(
    //       createUser(
    //         uuidv4(),
    //         selectedRoom,
    //         username,
    //         createTimestamp('%Y-%m-%d %R %p')
    //       )
    //     )
    //   );

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

                  if (DEBUG) console.log(selectedRoom);
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
