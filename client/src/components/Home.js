import React from 'react';
import JoinLeaveButton from './generic/JoinLeaveButton';
import { Main, Wrapper, Form, Logo, InputContainer, Label, RoomContainer, RoomButton, RoomIcon } from '../Style';
import TextInput from './generic/TextInput';

const chatRooms = ['Chill', 'Debate', 'Geek', 'Sport', 'Food', 'Music'];

function Home() {
	return (
		<Main>
			<Wrapper primary>
				<Logo>ChitChat</Logo>
				<Form>
					<TextInput labelName={'Username'} value={'username'} />
					{/* change this: */}
					<InputContainer>
						<Label>Room</Label>
					</InputContainer>
					<RoomContainer>
						{chatRooms.map((room) => (
							<RoomButton>{room}</RoomButton>
						))}
					</RoomContainer>
					<JoinLeaveButton primary={true} to={'/chat'} name={'Join'} />
				</Form>
			</Wrapper>
		</Main>
	);
}

export default Home;
