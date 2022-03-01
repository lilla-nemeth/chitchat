import styled from "styled-components";
import { Link } from "react-router-dom";
// Global css variables?

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(222, 112, 60, 0.4);
`;

const Wrapper = styled.section`
  font-family: "Nunito", sans-serif;
  background: #2f3c4f;
  border-radius: 2.5em;
  padding: 2em 2.5em;
`;

const Form = styled.form`
  padding: ${(props) => (props.primary ? "2em 2.5em" : "none")};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 0.5em 0 0.5em;
  color: #fff;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
`;
// background: red;

const MessageButton = styled.div`
  flex: 1;
  background: #fbb040;
  border: 0.15em solid #fbb040;
`;

const Input = styled.input`
  padding: 1em 1.5em;
  font-size: 1em;
  flex: 8;
  border-radius: 0.2em 0 0 0.2em;
  border: 0.15em solid rgb(80, 111, 134, 0.4);
`;

const InputArea = styled.textarea`
  padding: 1em 1.5em;
  font-size: 1em;
  border: none;
  border-radius: 0.2em;
  border: 0.15em solid rgb(80, 111, 134, 0.4);
`;
// rows: 1;
// cols: 4;

const Logo = styled.h2`
  color: ${(props) => (props.primary ? "#fff" : "#2f3c4f")};
  font-family: "DM Serif Display", serif;
  text-align: ${(props) => (props.primary ? "center" : "start")};
  font-size: ${(props) => (props.primary ? "2.9em" : "2.25em")};
  padding: ${(props) => (props.primary ? "0.5em 0 0 0" : "0")};
`;

const ButtonContainer = styled.div`
  text-align: center;
  padding: 1em 0;
`;

const ButtonStyle = styled.button`
  background: ${(props) => (props.primary ? "transparent" : "#fbb040")};
  color: ${(props) => (props.primary ? "#fbb040" : "#2f3c4f")};
  border: ${(props) => (props.primary ? "0.15em solid #fbb040" : "#2f3c4f")};
  border-radius: 2px;
  padding: 1em 1.5em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1em;
`;

const RoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 40vw;
  justify-content: space-between;
`;
//   justify-content: flex-start;

const RoomButtonStyle = styled.button`
  background: #fff;
  border: none;
  width: 10em;
  height: 10em;
  border-radius: 0.2em;
  color: #000;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 2.5em;
`;
// flex-flow: column wrap;
// flex-wrap: wrap;
// margin-right: 1em;
// margin-top: 0.5em;
// margin-bottom: 0.5em;

const RoomButtonIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
`;

const RoomButtonText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
// background: lightblue;
// align-items: flex-start;

const RoomIcon = styled.div`
  color: #fff;
`;

// Chat room part:

// React Link:
const StyledLink = styled(Link)`
  color: ${(props) => (props.primary ? "#2f3c4f" : "#fbb040")};
  text-decoration: none;
`;

const ChatRoom = styled.div`
  font-family: "Nunito", sans-serif;
  display: flex;
  width: 80vw;
  height: inherit;
  border-radius: 2.5em;
  height: 85vh;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #2f3c4f;
  border-radius: 2.5em 0 0 2.5em;
  padding: 2em;
`;

const RoomNameContainer = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  flex: 1;
  background: red;
  margin-bottom: 1em;
`;
// border: 4px solid red;
const UsersContainer = styled.div`
  flex: 5.5;
  margin-top: 1em;
`;
// border: 0.1em solid white;
// background: yellow;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  background: white;
  border-radius: 0 2.5em 2.5em 0;
  padding: 2em;
`;

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 0.1em solid rgb(80, 111, 134, 0.4);
`;
// border: 1px solid black;

const Header = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  align-items: center;
`;
// background: grey;
// justify-content: center;

const MessageContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`;
// border: 1px solid grey;

const BubbleStyle = styled.div`
  display: flex;
  padding: 2em 2.5em;
  margin-bottom: 2em;
  overflow-wrap: break-word;
  border-radius: 0.2em;
  flex-direction: column;
  background: rgb(80, 111, 134, 0.4);
  align-self: flex-start;
`;
// width: 20vw;
// align-self: ${(props) => (props.primary ? "flex-start" : "flex-end")};
// background: ${(props) => props.primary ? "rgb(222, 112, 60, 0.4)" : "rgb(80, 111, 134, 0.4)"};

const MessageMeta = styled.div`
  display: flex;
  margin-bottom: 0.5em;
  overflow-wrap: break-word;
  width: 19.15em;
  font-size: 0.9em;
`;
// align-self: ${(props) => (props.primary ? "flex-start" : "flex-end")};
// justify-content: ${(props) => (props.primary ? "flex-start" : "flex-end")};

const MessageUsername = styled.div`
  display: flex;
  padding-right: 0.5em;
  font-weight: 600;
`;
// background: red;

const MessageTimetamp = styled.div`
  display: flex;
  color: grey;
`;
// background: green;

const MessageText = styled.div`
  display: flex;
  font-weight: 600;
`;
// background: orange;

const UserBox = styled.div`
  background: #fbb040;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
`;
// width: 20vw;

export {
  Main,
  Wrapper,
  Form,
  Label,
  Input,
  InputArea,
  Logo,
  ButtonContainer,
  ButtonStyle,
  RoomContainer,
  RoomButtonStyle,
  RoomButtonText,
  RoomButtonIcon,
  RoomIcon,
  StyledLink,
  ChatRoom,
  UserWrapper,
  UserBox,
  MessageWrapper,
  HeaderContainer,
  Header,
  MessageContainer,
  InputContainer,
  MessageButton,
  RoomNameContainer,
  UsersContainer,
  BubbleStyle,
  MessageMeta,
  MessageUsername,
  MessageTimetamp,
  MessageText,
};
