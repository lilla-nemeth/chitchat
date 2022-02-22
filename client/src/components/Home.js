import React from 'react';
import { Link } from 'react-router-dom';
import { Main, Wrapper, Form, Logo, Label, LabelName, Input, ButtonContainer, Button } from '../Style';

function Home() {
	return (
		<Main>
			<Wrapper>
				<Logo>ChitChat</Logo>
				<Form>
					<Label>
						<LabelName>Username</LabelName>
						<Input type="text" value="username" name="username" />
					</Label>
					<Label>
						<LabelName>Room</LabelName>
						{/* It has to be a list: */}
						<Input type="text" value="room" name="room" />
					</Label>
					<ButtonContainer>
						<Link to="/chat">
							<Button primary type="submit" value="submit" name="submit">
								Join
							</Button>
						</Link>
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Main>
	);
}

export default Home;
