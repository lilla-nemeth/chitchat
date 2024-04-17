'use client';
import React, { useState } from 'react';
import { useAppSelector } from '../lib/hooks';
import { useRouter } from 'next/navigation';

import FormButton from '../components/FormButton';
import RoomButton from '../components/RoomButton';
import TextInput from '../components/TextInput';
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../styles';

const Home = () => {
	const router = useRouter();

	const rooms = useAppSelector((state: any) => state.rooms.rooms);
	const [username, setUsername] = useState('');
	const [selectedRoom, setSelectedRoom] = useState(rooms[0].id);

	const disabled = !username;

	const handleSubmit = (e: any) => {
		e.preventDefault();

		router.push(`chat/${selectedRoom}/${username}`);
	};

	return (
		<Main homeMain={true} mainHeight={true}>
			<Wrapper>
				<Logo primary>ChitChat</Logo>
				<Form homeForm={true} onSubmit={handleSubmit}>
					<TextInput
						homeLabel={true}
						primary={true}
						name={'Username'}
						labelName={'Username'}
						value={username}
						placeholder={'Username'}
						onChange={(e: any) => setUsername(e.target.value)}
						required={true}
						autoFocus={true}
					/>
					<Label homeLabel={true}>Rooms</Label>
					<RoomContainer>
						{rooms.map((room: any) => (
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
								onChange={(e: any) => {
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
