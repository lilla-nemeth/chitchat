import React from 'react';
import {
	Main,
	Wrapper,
	Form,
	Logo,
	Label,
	LabelName,
	Input,
	ButtonContainer,
	Button,
	RoomContainer,
	RoomButton,
	RoomIcon,
	StyledLink,
} from '../Style';

const chatRooms = ['Chill', 'Debate', 'Geek', 'Sport', 'Food', 'Music'];

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
					</Label>
					{/* <Input type="text" value="room" name="room" /> */}
					<RoomContainer>
						{chatRooms.map((room) => (
							<RoomButton>{room}</RoomButton>
						))}
					</RoomContainer>
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
