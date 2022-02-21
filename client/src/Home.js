import React from 'react';
import styled, { css } from 'styled-components';

const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.section`
	background: #2f3c4f;
	padding: 2em 2.5em;
	width: 40vw;
`;

const Form = styled.form`
	padding: 2em 2.5em;
	display: flex;
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
`;

const Logo = styled.h2`
	color: #fff;
	text-align: center;
	font-size: 1.5em;
`;

const ButtonContainer = styled.div`
	text-align: center;
	padding: 1em 0;
`;
const Button = styled.button`
	background: transparent;
	border-radius: 2px;
	border: 2px solid #fbb040;
	color: #fbb040;
	padding: 1em 1.5em;
	cursor: pointer;
	display: flex;
	justify-content: center;
	width: 100%;

	${(props) =>
		props.primary &&
		css`
			background: violet;
			color: white;
		`};
`;

function Home() {
	return (
		<Main>
			<Wrapper>
				<Form>
					<Logo>ChitChat</Logo>
					<Label>
						<LabelName>Username</LabelName>
						<Input type="text" value="username" name="username" />
					</Label>
					<Label>
						<LabelName>Room</LabelName>
						<Input type="text" value="room" name="room" />
					</Label>
					<ButtonContainer>
						<Button type="submit" value="submit" name="submit">
							Join
						</Button>
						{/* <Button primary>Normal</Button> */}
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Main>
	);
}

export default Home;
