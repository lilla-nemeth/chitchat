'use client';

import React, { FormEvent, useState } from 'react';
import { HandleNameChangeInterface } from '../../app/types/reactTypes';
import { useAppSelector } from '../lib/hooks';
import { useRouter } from 'next/navigation';
import FormButton from '../components/FormButton';
import RoomButton from '../components/RoomButton';
import TextInput from '../components/TextInput';
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../styles';

const Home = () => {
	const router = useRouter();
	const rooms = useAppSelector((state) => state.rooms.rooms);
	const [username, setUsername] = useState<string>('');
	const [selectedRoom, setSelectedRoom] = useState<string>(rooms[0].id);

	const disabled = !username;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`chat/${selectedRoom}/${username}`);
	};

	const handleUsernameChange = (e: HandleNameChangeInterface) => {
		setUsername(e.target.value);
	};

	const handleRoomChange = (e: HandleNameChangeInterface) => {
		setSelectedRoom(e.target.value);
	};

	return (
		<Main homemain={true} mainheight={true}>
			<Wrapper>
				<Logo primary>ChitChat</Logo>
				<Form homeform={true} onSubmit={handleSubmit}>
					<TextInput
						homelabel={true}
						primary={'true'}
						name={'Username'}
						labelName={'Username'}
						value={username}
						placeholder={'Username'}
						onChange={handleUsernameChange}
						required={true}
						autoFocus={true}
					/>
					<Label homelabel={true}>Rooms</Label>
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
								onChange={handleRoomChange}
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
