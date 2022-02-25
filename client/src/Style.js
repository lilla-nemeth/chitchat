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
	font-family: 'Nunito', sans-serif;
	flex-direction: column;
`;

const Label = styled.label`
	color: #fff;
	display: flex;
	flex-direction: column;
	padding: 1em 0 1em;
`;

const LabelName = styled.p`
	padding: 0.5em 0 0.5em;
`;

const Input = styled.input`
	padding: 1em 1.5em;
	font-size: 1em;
	font-family: 'Nunito', sans-serif;
`;

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

const Button = styled.button`
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
	font-family: 'Nunito', sans-serif;
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
	margin: 0.5em;
	flex-wrap: wrap;
`;
// margin-top: 0.5em;
// margin-bottom: 0.5em;

const RoomIcon = styled.div`
	color: #fff;
`;

// Chat room part:
const LeaveButton = styled.button`
	background: #fbb040;
	color: #2f3c4f;
	border: none;
	border-radius: 2px;
	padding: 1em 1.5em;
	cursor: pointer;
	display: flex;
	justify-content: center;
	font-size: 1em;
	font-family: 'Nunito', sans-serif;
`;

// Link from react-router-dom:
const StyledLink = styled(Link)`
	color: ${(props) => (props.primary ? '#2f3c4f' : '#fbb040')};
	text-decoration: none;
`;

const ChatRoomContainer = styled.div`
	display: flex;
	width: 70vw;
	height: inherit;
	border-radius: 2.5em;
	height: 85vh;
`;
// padding: 2em 2.5em;

const UserContainer = styled.div`
	flex: 1;
	background: #2f3c4f;
	border-radius: 2.5em 0 0 2.5em;
`;
// border-right: 0.1em solid rgb(222, 112, 60, 0.4);
// background: white;

const MessageContainer = styled.div`
	flex: 2;
	background: white;
	border-radius: 0 2.5em 2.5em 0;
`;
// border-left: 0.1em solid rgb(222, 112, 60, 0.4);

const UserBox = styled.div`
	background: #fbb040;
	height: 10vh;
	width: 20vw;
	justify-content: space-between;
	margin: 2em;
	padding: 0.5em;
`;
// border-bottom: 0.07em solid #fbb040;
// border-top: 0.07em solid #fbb040;

export {
	Main,
	Wrapper,
	Form,
	Label,
	LabelName,
	Input,
	Logo,
	ButtonContainer,
	Button,
	RoomContainer,
	RoomButton,
	RoomIcon,
	LeaveButton,
	StyledLink,
	ChatRoomContainer,
	UserContainer,
	UserBox,
	MessageContainer,
};
