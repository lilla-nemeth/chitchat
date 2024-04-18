'use client';

import React, { FormEvent, useState } from 'react';
import { HandleNameChangeInterface } from '../../app/types/reactTypes';
import { useAppSelector } from '../lib/hooks';
import { useRouter } from 'next/navigation';
import FormButton from '../components/FormButton';
import RoomButton from '../components/RoomButton';
import TextInput from '../components/TextInput';
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../styles';

import ChillIcon from '../../app/assets/icons/ChillIcon';
import DebateIcon from '../../app/assets/icons/DebateIcon';
import TechIcon from '../../app/assets/icons/TechIcon';
import GamesIcon from '../assets/icons/GamesIcon';
import SportsIcon from '../../app/assets/icons/SportsIcon';

const Home = () => {
	const router = useRouter();
	const rooms = useAppSelector((state) => state.rooms.rooms);
	const [username, setUsername] = useState<string>('');
	const [selectedRoom, setSelectedRoom] = useState<string>(rooms[0].id);

	const icons = [
		{ name: 'chill', icon: <ChillIcon /> },
		{ name: 'debate', icon: <DebateIcon /> },
		{ name: 'tech', icon: <TechIcon /> },
		{ name: 'games', icon: <GamesIcon /> },
		{ name: 'sports', icon: <SportsIcon /> },
	];

	const disabled = !username;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(rooms);
		router.push(`chat/${selectedRoom}/${username}`);
	};

	const handleUsernameChange = (e: HandleNameChangeInterface) => {
		setUsername(e.target.value);
	};

	const handleRoomChange = (e: HandleNameChangeInterface) => {
		setSelectedRoom(e.target.value);
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
						onChange={handleUsernameChange}
						required={true}
						autoFocus={true}
					/>
					<Label homeLabel={true}>Rooms</Label>
					<RoomContainer>
						{/* {icons.map((icon: any) => (
							<div>{icon.icon}</div>
						))} */}
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
