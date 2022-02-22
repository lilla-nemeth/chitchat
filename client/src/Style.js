import styled from 'styled-components';

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
	padding: 2em 2.5em;
	width: 30vw;
	border-radius: 2.5em;
`;
// border-radius: 2.5em 2.5em 2.5em 0em;

const Form = styled.form`
	padding: 2em 2.5em;
	display: flex;
	flex-direction: column;
	font-family: 'Nunito', sans-serif;
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

export { Main, Wrapper, Form, Label, LabelName, Input, Logo, ButtonContainer, Button };
