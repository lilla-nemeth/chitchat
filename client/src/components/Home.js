import React from 'react';
import { Main, Wrapper, Form, Logo, Label, LabelName, Input, ButtonContainer, Button, StyledLink } from '../Style';

function Home() {
	return (
		<Main>
			<Wrapper primary>
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
						<StyledLink to="/chat">
							<Button primary type="submit" value="submit" name="submit">
								Join
							</Button>
						</StyledLink>
					</ButtonContainer>
				</Form>
			</Wrapper>
		</Main>
	);
}

export default Home;
