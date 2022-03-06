import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ButtonComponent from './generic/ButtonComponent';
import RoomButton from './generic/RoomButton';
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../Style';
import TextInput from './generic/TextInput';

let DEBUG = true;

function Home() {
	const rooms = useSelector((state) => state.roomReducer);
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [selectedRoom, setSelectedRoom] = useState();
	const navigate = useNavigate();

	const disabled = !username;

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate('/chat');
	};
	if (DEBUG) console.log(rooms);
	// if (DEBUG) console.log(selectedRoom);
	// if (DEBUG) console.log(disabled);

	return (
		<Main>
			<Wrapper primary>
				<Logo primary>ChitChat</Logo>
				<Form primary onSubmit={handleSubmit}>
					<TextInput
						primary={true}
						labelName={'Username'}
						value={username}
						placeholder={'Username'}
						onChange={(e) => setUsername(e.target.value)}
						required={true}
					/>

					<Label>Rooms</Label>
					<RoomContainer>
						{/* {rooms.map((room) => (
							<RoomButton
								key={room.id}
								roomName={room.name}
								roomIcon={room.icon}
								id={room.id}
								name={'selectedRoom'}
								value={room.name}
								defaultChecked={room.name === 'Chill'}
								onChange={(e) => {
									setSelectedRoom(e.target.value);
								}}
							></RoomButton>
						))} */}
					</RoomContainer>
					{disabled ? (
						<ButtonComponent primary={true} to={false} name={'Join'} />
					) : (
						<ButtonComponent primary={false} to={'/chat'} name={'Join'} />
					)}
				</Form>
			</Wrapper>
		</Main>
	);
}

export default Home;
