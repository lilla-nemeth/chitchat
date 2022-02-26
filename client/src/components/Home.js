import React from 'react';
import ButtonComponent from './generic/ButtonComponent';
import { Main, Wrapper, Form, Logo, Label, RoomContainer, RoomButton, RoomIcon } from '../Style';
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
					<Label>Room</Label>
					<RoomContainer>
						{chatRooms.map((room) => (
							<RoomButton>{room}</RoomButton>
						))}
					</RoomContainer>
					<ButtonComponent primary={true} to={'/chat'} name={'Join'} />
				</Form>
			</Wrapper>
		</Main>
	);
}

export default Home;
