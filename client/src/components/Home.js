import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// generic components
import FormButton from './generic/FormButton';
import RoomButton from './generic/RoomButton';
import TextInput from './generic/TextInput';
// styled components
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../style';

// let DEBUG = true;

const Home = () => {
	const rooms = useSelector((state) => state.roomReducer.rooms);
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);

	const disabled = !username;

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate(`chat/${selectedRoom}/${username}`);
	};

	return (
		<Main homemain={true} mainheight={true}>
			<Wrapper primary>
				<Logo primary>ChitChat</Logo>
				<Form homeform={true} onSubmit={handleSubmit}>
					<TextInput
						homelabel={true}
						primary={'true'}
						name={'Username'}
						labelName={'Username'}
						value={username}
						placeholder={'Username'}
						onChange={(e) => setUsername(e.target.value)}
						required={true}
						autoFocus={true}
					/>
					<Label homelabel={true}>Rooms</Label>
					<RoomContainer>
						{rooms.map((room) => (
							<RoomButton
								key={room.id}
								roomName={room.name}
								roomIcon={room.icon}
								type={'radio'}
								name={'selectedRoom'}
								htmlFor={room.name}
								id={room.id}
								value={room.id}
								selected={room.id === selectedRoom}
								defaultChecked={room.id === selectedRoom}
								onChange={(e) => {
									setSelectedRoom(e.target.value);
								}}
							></RoomButton>
						))}
					</RoomContainer>
					{disabled ? <FormButton primary={true} name={'Join'} /> : <FormButton primary={false} name={'Join'} />}
				</Form>
			</Wrapper>
		</Main>
	);
};

export default Home;
