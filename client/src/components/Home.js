import React, { useContext, useState } from "react";
import ButtonComponent from "./generic/ButtonComponent";
import RoomButton from "./generic/RoomButton";
import { RoomContext } from "../context/RoomContext";
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from "../Style";
import TextInput from "./generic/TextInput";

let DEBUG = false;

const handleSubmit = (e) => {
  e.preventDefault();
};

function Home() {
  const [username, setUsername] = useState("");
  const { rooms, setRooms } = useContext(RoomContext);

  if (DEBUG) console.log(rooms);

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

          <Label>Room</Label>
          <RoomContainer>
            {rooms.map((room) => (
              <RoomButton
                key={room.id}
                roomName={room.name}
                roomIcon={room.icon}
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
