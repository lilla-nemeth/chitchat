import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectRoom } from '../actions/roomActions';
import ButtonComponent from './generic/ButtonComponent';
import RoomButton from './generic/RoomButton';
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../Style';
import TextInput from './generic/TextInput';

let DEBUG = true;

function Home() {
	const [username, setUsername] = useState('');

	// const [selectedRoom, setSelectedRoom] = useState();
	const navigate = useNavigate();

	const disabled = !username;

	const rooms = useSelector((state) => state.roomReducer.rooms);

	// const selectedRoom = useSelector((state, id) => {
	// 	let roomId = id.match.params.room_id;

	// 	return {
	// 		room: state.rooms.find((room) => room.id === roomId),
	// 	};
	// });

	let roomArray = Object.values(rooms);

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		// dispatch(selectRoom(e));
		// if (DEBUG) console.log(dispatch);

		navigate('/chat');
	};

	// if (DEBUG) console.log(rooms);
	// if (DEBUG) console.log(roomArray);

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
						{roomArray.map((room) => (
							<RoomButton
								key={room.id}
								roomName={room.name}
								roomIcon={room.icon}
								id={room.id}
								name={'selectedRoom'}
								value={room.name}
								defaultChecked={room.name === 'Chill'}
								// checked={'selectedRoom' === room.name}
								onChange={(e) => {
									// setSelectedRoom(e.target.value);
									// console.log(room.name);
								}}
							></RoomButton>
						))}
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
