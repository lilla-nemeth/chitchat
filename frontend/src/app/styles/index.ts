import styled from 'styled-components';
import Link from 'next/link';
import { minSize, maxSize } from './deviceSizes';
import {
	MainProps,
	FormProps,
	LabelProps,
	PrevMessageWrapperProps,
	InputProps,
	LogoProps,
	ButtonProps,
	RoomButtonContainerProps,
	StyledLinkProps,
	UsersContainerProps,
	UserBoxProps,
	BubbleProps,
	MessageTextProps,
} from '../types/styleTypes';

const Main = styled.main<MainProps>`
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--clr-peach);
	@media ${minSize.laptop} {
		height: 100vh;
	}
`;

const Wrapper = styled.section`
	background: var(--clr-darknavy);
	border-radius: 2.5em;

	margin: 2.5em;
	width: 80vw;
`;

const Form = styled.form<FormProps>`
	padding: ${(props) => (props.$homeform ? '2em 2.5em' : 'none')};
	display: flex;
	flex-direction: column;
`;

const Label = styled.label<LabelProps>`
	padding: 0.5em 0 0 0;
	color: var(--clr-white);
	@media ${maxSize.tablet} {
		margin: 0;
	}
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 1em;
	align-items: center;
	justify-content: center;
`;

const PrevMessageWrapper = styled.div<PrevMessageWrapperProps>`
	z-index: 1;
	height: auto;
	width: auto;
	margin-bottom: -1em;
	border-radius: 0.2em 0.2em 0 0;
	background: ${(props) => (!props.$replyactive ? 'var(--clr-white)' : 'var(--clr-lightblue)')};
	display: ${(props) => (!props.$replyactive ? 'none' : 'block')};
`;

const PrevMessageContainer = styled.div`
	padding: 1em 1.5em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background: var(--clr-lightblue);
	border-radius: 0.2em;
`;

const PrevContainer = styled.div``;

const PrevAuthor = styled.div`
	font-weight: 600;
	font-size: 0.9em;
`;

const PrevText = styled.div`
	font-weight: 500;
	padding-top: 1em;
`;

const PrevTimestamp = styled.div`
	font-size: 0.9em;
`;

const CloseButton = styled.div`
	width: 1.2em;
	cursor: pointer;
`;

const MessageButton = styled.div`
	flex: 1;
	background: var(-clr-yellow);
	border: 0.15em solid var(-clr-yellow);
`;

const Input = styled.input<InputProps>`
	outline: none;
	padding: 1.3em 1.5em;
	font-size: 1em;
	flex: 8;
	border-radius: ${(props) => (props.$primary ? '0.2em' : '0.2em 0 0 0.2em')};
	border: none;
	background: ${(props) => (props.$primary ? 'var(--clr-white)' : 'var(--clr-lightgrey)')};
	&:focus {
		outline: none;
	}
	&:invalid {
		box-shadow: none;
	}
	margin: ${(props) => (props.$primary ? '1em 0 1em 0' : 'none')};
	@media ${maxSize.mobileL} {
		min-width: ${(props) => (props.$primary ? '7em' : 'none')};
		margin: 0em;
	}
	@media ${maxSize.desktop} {
		min-width: ${(props) => (props.$primary ? 'none' : '2em')};
	}
`;

const Logo = styled.h2<LogoProps>`
	color: ${(props) => (props.$primary ? 'var(--clr-white)' : 'var(--clr-navy)')};
	font-family: 'DM Serif Display', serif;
	text-align: ${(props) => (props.$primary ? 'center' : 'start')};
	font-size: ${(props) => (props.$primary ? '2.9em' : '2.25em')};
	padding: ${(props) => (props.$primary ? '0.5em 0 0 0' : '0')};
	@media ${maxSize.mobileL} {
		font-size: 2.6em;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	@media ${maxSize.laptopM} {
		margin-top: 1em;
	}
`;

const ButtonStyle = styled.button<ButtonProps>`
	background: ${(props) => (props.$primary ? 'transparent' : 'var(--clr-yellow)')};
	color: ${(props) => (props.$primary ? 'var(--clr-yellow)' : 'var(--clr-navy)')};
	border: ${(props) => (props.$primary ? '0.15em solid var(--clr-yellow)' : 'var(--clr-navy)')};
	padding: ${(props) => (props.$primary ? '1em 1.5em' : '1.15em 1.65em')};
	border-radius: 2px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	width: 100%;
	font-size: 1em;
	@media ${maxSize.laptopL} {
		width: unset;
		min-width: 10em;
		margin: 0;
	}
	@media ${maxSize.mobileL} {
		margin: 0;
	}
`;

const ChatSmallButton = styled.button`
	background: var(--clr-yellow);
	color: var(--clr-navy);
	border-radius: 2px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 1em;
	border: 0.15em solid var(--clr-yellow);
	font-size: 1em;
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
	width: 60em;
	padding: 0 0 0.5em 0;
	margin: 0 -1em 0 -1em;
	@media ${maxSize.laptop} {
		flex-wrap: wrap;
		width: fit-content;
		justify-content: start;
		margin: 0 -1em 0 -1em;
	}
`;

const RoomIcon = styled.div`
	flex: 2;
	fill: var(--clr-darknavy);
	display: flex;
	align-items: flex-end;
	justify-content: center;
	text-align: center;
	width: 4em;
	height: 4em;
`;

const RoomText = styled.span`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: var(--clr-darknavy);
	font-weight: 600;
	font-size: 1.1em;
	text-transform: capitalize;
`;

const RoomButtonWrapper = styled.div`
	display: flex;
`;

const RoomLabel = styled.label`
	border: none;
	border-radius: 0.2em;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 8em;
	height: 8em;
`;

const RoomButtonContainer = styled.div<RoomButtonContainerProps>`
	flex: 1;
	fill: var(--clr-white);
	color: var(--clr-white);
	border: none;
	width: 8em;
	height: 8em;
	border-radius: 0.2em;
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.1s;
	margin: 1em;
	background: ${(props) => (props.$selected ? 'var(--clr-yellow)' : 'var(--clr-lightnavy)')};
	&:hover {
		background: ${(props) => !props.$selected && 'var(--clr-brightblue)'};
	}
	@media ${maxSize.laptopL} {
		margin: 1em;
	}
	@media ${maxSize.mobileL} {
		margin: 1em 0 1em 0;
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
const StyledLink = styled(Link)<StyledLinkProps>`
	color: ${(props) => (props.$primary ? 'var(--clr-navy)' : 'var(--clr-yellow)')};
	text-decoration: none;
`;

const ChatRoomContainer = styled.div`
	display: flex;
	border-radius: 2.5em;
	height: 85vh;
	margin: 2.5em;
	width: 80vw;
	@media ${maxSize.laptop} {
		flex-direction: column;
		height: auto;
	}
`;

const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	background: var(--clr-darknavy);
	border-radius: 2.5em 0 0 2.5em;
	padding: 2em;
	@media ${maxSize.laptop} {
		border-radius: 2.5em 2.5em 0 0;
	}
`;

const ActiveRoomContainer = styled.div`
	display: flex;
	flex: 0.85;
	margin-bottom: 3.1em;
`;

const ActiveRoomWrapper = styled.div`
	display: flex;
	flex: auto;
	fill: var(--clr-white);
	color: var(--clr-white);
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

const UsersContainer = styled.div<UsersContainerProps>`
	flex: 5.5;
	overflow-y: ${(props) => (props.$scrollvisible ? 'scroll' : 'hidden')};
`;

const UserBox = styled.div<UserBoxProps>`
	border-radius: 0.2em;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: 600;
	margin-bottom: 1.3em;
	padding: 1.5em;
	color: var(--clr-white);
	background: ${(props) => (props.$currentuser ? 'var(--clr-lightnavy)' : 'var(--clr-navy)')};
	margin-right: ${(props) => (props.$scrollvisible ? '2em' : '0')};
	line-height: 1.5;
`;

const MessageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2;
	background: white;
	border-radius: 0 2.5em 2.5em 0;
	padding: 2em;
	@media ${maxSize.laptop} {
		border-radius: 0 0 2.5em 2.5em;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	flex: 0.6;
	padding-bottom: 2.5em;
	@media ${maxSize.tablet} {
		flex-direction: column;
	}
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
	overflow-y: scroll;
`;

const Ref = styled.div``;

const Bubble = styled.div<BubbleProps>`
	display: flex;
	padding: 1.5em;
	margin-bottom: 2em;
	overflow-wrap: break-word;
	border-radius: 0.2em;
	flex-direction: column;
	background: ${(props) => (props.$chatbot ? 'var(--clr-navy)' : 'var(--clr-lightgrey)')};
	color: ${(props) => (props.$chatbot ? 'var(--clr-white)' : 'var(--clr-black)')};
	align-self: flex-start;
	width: fill-available;
	margin-right: 2em;
`;

const MessageSubWrapper = styled.div`
	position: relative;
`;

const MessageSubContainer = styled.div``;

const ToolStyle = styled.div`
	width: 1em;
	position: absolute;
	zindex: 1;
	top: -0.15em;
	fill: var(--clr-darkgrey);
	width: 1.5em;
	right: 2.5em;
	cursor: pointer;
	&:hover {
		fill: var(--clr-darknavy);
	}
`;

const MessageMeta = styled.div`
	display: flex;
	margin-bottom: 0.5em;
	overflow-wrap: break-word;
	font-size: 0.9em;
`;

const MessageUsername = styled.div`
	display: flex;
	padding-right: 0.5em;
	font-weight: 600;
`;

const MessageTimestamp = styled.div`
	display: flex;
	color: grey;
`;

const MessageText = styled.div<MessageTextProps>`
	display: flex;
	font-weight: 600;
	line-height: 1.5;
	padding-top: ${(props) => (props.$isprevtext ? '1em' : 'unset')};
`;

export {
	ActiveRoomContainer,
	ActiveRoomWrapper,
	ActiveRoomIcon,
	ActiveRoomText,
	Bubble,
	Main,
	Wrapper,
	Form,
	Label,
	Input,
	Logo,
	ButtonContainer,
	ButtonStyle,
	ChatSmallButton,
	RoomContainer,
	RoomLabel,
	RoomButtonWrapper,
	RoomButtonContainer,
	RadioButton,
	RoomText,
	RoomIcon,
	StyledLink,
	ChatRoomContainer,
	UserWrapper,
	UserBox,
	MessageWrapper,
	HeaderContainer,
	Header,
	MessageContainer,
	Ref,
	InputContainer,
	MessageButton,
	UsersContainer,
	ToolStyle,
	MessageSubWrapper,
	MessageSubContainer,
	MessageMeta,
	MessageUsername,
	MessageTimestamp,
	MessageText,
	ButtonIconStyle,
	RoomIconSVG,
	PrevMessageWrapper,
	PrevMessageContainer,
	PrevContainer,
	PrevAuthor,
	PrevText,
	PrevTimestamp,
	CloseButton,
};
