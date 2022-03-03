import React, { useContext, useState } from "react";
import ButtonComponent from "./generic/ButtonComponent";
import RoomButton from "./generic/RoomButton";
import { RoomContext } from "../context/RoomContext";
import {
  Main,
  Wrapper,
  Form,
  Logo,
  Label,
  RoomContainer,
  Label1,
  Input1,
  LabelText1,
} from "../Style";
import TextInput from "./generic/TextInput";

let DEBUG = true;

const handleSubmit = (e) => {
  e.preventDefault();
};

function Home() {
  const { rooms, setRooms } = useContext(RoomContext);
  const [username, setUsername] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(rooms);

  // if (DEBUG) console.log(rooms);
  // if (DEBUG) console.log(selectedRoom);

  return (
    <Main>
      <Wrapper primary>
        <Logo primary>ChitChat</Logo>
        <Form primary onSubmit={handleSubmit}>
          <TextInput
            primary={true}
            labelName={"Username"}
            value={username}
            placeholder={"Username"}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Label>Rooms</Label>
          <RoomContainer>
            {rooms.map((room) => (
              <RoomButton
                key={room.id}
                roomName={room.name}
                roomIcon={room.icon}
                id={room.id}
                name={"selectedRoom"}
                value={room.name}
                checked={selectedRoom === room.name}
                onChange={(event) => {
                  setSelectedRoom(event.target.value);
                  console.log(event.target.value);
                }}
              ></RoomButton>
            ))}
          </RoomContainer>

          <ButtonComponent primary={true} to={"/chat"} name={"Join"} />
        </Form>
      </Wrapper>
    </Main>
  );
}

export default Home;
