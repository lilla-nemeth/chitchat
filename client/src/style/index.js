import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Global css variables?

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: rgb(222, 112, 60, 0.4);
`;

const Wrapper = styled.section`
  font-family: 'Nunito', sans-serif;
  background: #2f3c4f;
  border-radius: 2.5em;
  padding: 2em 2.5em;
`;

const Form = styled.form`
  padding: ${(props) => (props.primary ? '2em 2.5em' : 'none')};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 1.5em 0 0.5em;
  color: #fff;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
`;

const MessageButton = styled.div`
  flex: 1;
  background: #fbb040;
  border: 0.15em solid #fbb040;
`;

const Input = styled.input`
  padding: 1.3em 1.5em;
  font-size: 1em;
  flex: 8;
  border-radius: 0.2em 0 0 0.2em;
  border: none;
  background: ${(props) => (props.primary ? '#fff' : 'rgb(0, 0, 0, 0.1)')};
  &:focus {
    outline: none;
  }
`;

const InputArea = styled.textarea`
  padding: 1em 1.5em;
  font-size: 1em;
  border: none;
  border-radius: 0.2em;
  border: 0.15em solid rgb(80, 111, 134, 0.4);
`;

const Logo = styled.h2`
  color: ${(props) => (props.primary ? '#fff' : '#2f3c4f')};
  font-family: 'DM Serif Display', serif;
  text-align: ${(props) => (props.primary ? 'center' : 'start')};
  font-size: ${(props) => (props.primary ? '2.9em' : '2.25em')};
  padding: ${(props) => (props.primary ? '0.5em 0 0 0' : '0')};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonStyle = styled.button`
  background: ${(props) => (props.primary ? 'transparent' : '#fbb040')};
  color: ${(props) => (props.primary ? '#fbb040' : '#2f3c4f')};
  border: ${(props) => (props.primary ? '0.15em solid #fbb040' : '#2f3c4f')};
  padding: ${(props) => (props.primary ? '1em 1.5em' : '1.15em 1.65em')};
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1em;
`;

const SendButton = styled.button`
  background: #fbb040;
  color: #2f3c4f;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1.15em 1.15em;
  border: 0.15em solid #fbb040;
`;

const ButtonIconStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1.5em;
  height: 1.5em;
`;

const RoomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 2.5em;
  width: 60em;
`;

const RoomIcon = styled.div`
  flex: 2;
  fill: #2f3c4f;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  width: 5em;
  height: 5em;
`;

const RoomText = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #2f3c4f;
  font-weight: 800;
  text-transform: capitalize;
`;

const RoomButtonWrapper = styled.div`
  display: flex;
`;

const RoomLabel = styled.label`
  border: none;
  width: 10em;
  height: 10em;
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RoomButtonContainer = styled.div`
  flex: 1;
  fill: #fff;
  color: #fff;
  border: none;
  width: 10em;
  height: 10em;
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.1s;
  background: ${(props) => (props.selected ? '#fbb040' : 'rgb(80, 111, 134)')};
  &:hover {
    background: ${(props) => !props.selected && 'rgb(80, 147, 197)'};
  }
`;

const RoomIconSVG = styled.svg`
  height: 5em;
`;

const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  width: 11em;
  height: 11em;
`;

// Chat room part:
const StyledLink = styled(Link)`
  color: ${(props) => (props.primary ? '#2f3c4f' : '#fbb040')};
  text-decoration: none;
`;

const ChatRoom = styled.div`
  font-family: 'Nunito', sans-serif;
  display: flex;
  width: 80vw;
  height: inherit;
  border-radius: 2.5em;
  height: 85vh;
`;
// flex-wrap: wrap;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #2f3c4f;
  border-radius: 2.5em 0 0 2.5em;
  padding: 2em;
`;

const ActiveRoomContainer = styled.div`
  display: flex;
  flex: 0.85;
`;

const ActiveRoomWrapper = styled.div`
  display: flex;
  flex: auto;
  fill: #fff;
  color: #fff;
  justify-content: space-between;
`;

const ActiveRoomIcon = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ActiveRoomText = styled.div`
  display: flex;
  flex: 3;
  font-size: 1.5em;
  text-transform: capitalize;
  align-items: center;
  padding-left: 1em;
`;

const UsersContainer = styled.div`
  flex: 5.5;
  overflow-y: scroll;
`;
// TODO: overflow-y: scroll should be visible, when the room users reach a number (something limit)

const UserBox = styled.div`
  border-radius: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  margin-bottom: 1.3em;
  padding: 1em 2.5em;
  color: #ffffff;
  background: rgb(80, 111, 134, 0.4);
  margin-right: 2em;
  margin-top: 1.3em;
`;
// padding: 2.25em 2.5em;

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
  flex: 0.6;
  padding-bottom: 1em;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  margin-bottom: 1em;
  overflow-y: scroll;
`;

const MessageRef = styled.div``;

const BubbleStyle = styled.div`
  display: flex;
  padding: 2em 2.5em;
  margin-bottom: 2em;
  overflow-wrap: break-word;
  border-radius: 0.2em;
  flex-direction: column;
  background: rgb(80, 111, 134, 0.4);
  align-self: flex-start;
  width: fill-available;
  margin-right: 2em;
`;

const MessageMeta = styled.div`
  display: flex;
  margin-bottom: 0.5em;
  overflow-wrap: break-word;
  width: 19.15em;
  font-size: 0.9em;
`;

const MessageUsername = styled.div`
  display: flex;
  padding-right: 0.5em;
  font-weight: 600;
`;

const MessageTimetamp = styled.div`
  display: flex;
  color: grey;
`;

const MessageText = styled.div`
  display: flex;
  font-weight: 600;
  line-height: 1.5;
`;

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
  SendButton,
  RoomContainer,
  RoomLabel,
  RoomButtonWrapper,
  RoomButtonContainer,
  RadioButton,
  RoomText,
  RoomIcon,
  StyledLink,
  ChatRoom,
  UserWrapper,
  UserBox,
  MessageWrapper,
  HeaderContainer,
  Header,
  MessageContainer,
  MessageRef,
  InputContainer,
  MessageButton,
  ActiveRoomContainer,
  ActiveRoomWrapper,
  ActiveRoomIcon,
  ActiveRoomText,
  UsersContainer,
  BubbleStyle,
  MessageMeta,
  MessageUsername,
  MessageTimetamp,
  MessageText,
  ButtonIconStyle,
  RoomIconSVG,
};
