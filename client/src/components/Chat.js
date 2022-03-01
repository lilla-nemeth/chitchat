import React, { useState } from "react";
import User from "./generic/User";
import ButtonComponent from "./generic/ButtonComponent";
import TextInput from "./generic/TextInput";
import TextArea from "./generic/TextArea";
import Message from "./generic/Message";

import {
  Main,
  Form,
  ChatRoom,
  UserWrapper,
  UsersContainer,
  RoomNameContainer,
  MessageWrapper,
  HeaderContainer,
  Header,
  MessageContainer,
  InputContainer,
  MessageButton,
  Logo,
} from "../Style";

function Chat() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Main>
      <ChatRoom>
        <UserWrapper>
          <RoomNameContainer>RoomName</RoomNameContainer>
          <UsersContainer>
            <User username={"Morzsa"} />
          </UsersContainer>
        </UserWrapper>
        <MessageWrapper>
          <HeaderContainer>
            <Header>
              <Logo>ChitChat</Logo>
            </Header>
            <ButtonComponent to={"/"} name={"Leave"} />
          </HeaderContainer>
          <MessageContainer>
            <Message
              primary={true}
              username={"Morzsa"}
              timestamp={"10:20 AM Today"}
              text={"Hello!"}
            ></Message>
            <Message
              primary={false}
              username={"Bodri"}
              timestamp={"10:20 AM Today"}
              text={"How are you?"}
            ></Message>
          </MessageContainer>
          <Form onSubmit={handleSubmit}>
            <InputContainer>
              <TextInput
                primary={false}
                value={message}
                placeholder={"Type your message"}
                onChange={handleChange}
              />
              <MessageButton>
                <ButtonComponent to={false} name={"Send"} />
              </MessageButton>
            </InputContainer>
          </Form>
        </MessageWrapper>
      </ChatRoom>
    </Main>
  );
}

export default Chat;
