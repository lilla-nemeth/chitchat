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
// width: 30vw;
// height: 90vh;
// padding: ${(props) => (props.primary ? '2em 2.5em' : '0')};
// border-radius: 2.5em 2.5em 2.5em 0em;

const Form = styled.form`
	padding: 2em 2.5em;
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	padding: 0.5em 0 0.5em;
	color: #fff;
`;

const Input = styled.input`
	padding: 1em 1.5em;
	font-size: 1em;
	border: none;
`;

const InputArea = styled.textarea`
	padding: 1em 1.5em;
	font-size: 1em;
	border: none;
`;
// rows: 1;
// cols: 4;

const Logo = styled.h2`
	color: #fff;
	text-align: center;
	font-size: 2.25em;
	font-family: 'DM Serif Display', serif;
	padding: 0.5em 0 0 0;
`;

const ButtonContainer = styled.div`
	text-align: center;
	padding: 1em 0;
`;

const ButtonStyle = styled.button`
	background: ${(props) => (props.primary ? 'transparent' : '#fbb040')};
	color: ${(props) => (props.primary ? '#fbb040' : '#2f3c4f')};
	border: ${(props) => (props.primary ? '2px solid #fbb040' : '#2f3c4f')};
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
`;
// width: 40vw;
// justify-content: space-between;

const RoomButton = styled.button`
	background: #fff;
	border: none;
	width: 6em;
	height: 6em;
	border-radius: 2px;
	color: #000;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-right: 1em;
	flex-wrap: wrap;
`;
// margin-top: 0.5em;
// margin-bottom: 0.5em;

const RoomIcon = styled.div`
	color: #fff;
`;

// Chat room part:

// Link from react-router-dom:
const StyledLink = styled(Link)`
	color: ${(props) => (props.primary ? '#2f3c4f' : '#fbb040')};
	text-decoration: none;
`;

const ChatRoom = styled.div`
	font-family: 'Nunito', sans-serif;
	display: flex;
	width: 70vw;
	height: inherit;
	border-radius: 2.5em;
	height: 85vh;
`;
// padding: 2em 2.5em;

const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	background: #2f3c4f;
	border-radius: 2.5em 0 0 2.5em;
	padding: 2em;
`;

const RoomNameContainer = styled.div`
	flex: 1;
	background: red;
	margin-bottom: 1em;
`;
// border: 4px solid red;
const UsersContainer = styled.div`
	flex: 5.5;
	background: yellow;
	margin-top: 1em;
`;
// border: 4px solid yellow;

const MessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2;
	background: white;
	border-radius: 0 2.5em 2.5em 0;
	padding: 2em;
`;

const PartnerContainer = styled.div`
	display: flex;
	flex: 1;
	background: green;
	margin-bottom: 1em;
`;

const Partner = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	text-align: center;
	background: grey;
`;

const MessageContainer = styled.div`
	flex: 4;
	background: aquamarine;
	margin-top: 1em;
	margin-bottom: 1em;
`;

const MessageInputContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	background: red;
	margin-top: 1em;
	align-items: center;
	justify-content: center;
`;

const MessageInput = styled.div`
	flex: 2;
	background: purple;
`;

const MessageButton = styled.div`
	flex: 1;
	background: cyan;
`;

const UserBox = styled.div`
	background: #fbb040;
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
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
	RoomButton,
	RoomIcon,
	StyledLink,
	ChatRoom,
	UserWrapper,
	UserBox,
	MessageWrapper,
	PartnerContainer,
	Partner,
	MessageContainer,
	MessageInputContainer,
	MessageInput,
	MessageButton,
	RoomNameContainer,
	UsersContainer,
};
