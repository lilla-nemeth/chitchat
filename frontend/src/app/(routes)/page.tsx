'use client';
// React
import React, { FormEvent, useState } from 'react';
// Types
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { HandleNameChangeInterface } from '../../app/types/reactTypes';
import { Room as RoomType, CustomRootState } from '../types/reduxTypes';
// Redux Hooks
import { useAppSelector } from '../lib/hooks';
// Next Navigation
import { useRouter } from 'next/navigation';
// Components
import FormButton from '../components/FormButton';
import RoomButton from '../components/RoomButton';
import TextInput from '../components/TextInput';
// Styled-components Styles
import { Main, Wrapper, Form, Logo, Label, RoomContainer } from '../styles';

const Home = () => {
	const router: AppRouterInstance = useRouter();
	const rooms = useAppSelector((state: CustomRootState) => state.rooms.rooms);
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
		<>
			<Main $homemain={true} $mainheight={true}>
				<Wrapper>
					<Logo $primary={true}>ChitChat</Logo>
					<Form $homeform={true} onSubmit={handleSubmit}>
						<TextInput
							$homelabel={true}
							$primary={true}
							name={'Username'}
							labelName={'Username'}
							value={username}
							placeholder={'Username'}
							onChange={handleUsernameChange}
							required={true}
							autoFocus={true}
						/>
						<Label $homelabel={true}>Rooms</Label>
						<RoomContainer>
							{rooms.map((room: RoomType) => (
								<RoomButton
									key={room.id}
									roomName={room.name}
									roomIcon={room.icon}
									type={'radio'}
									name={room.name as string}
									htmlFor={room.name}
									id={room.id}
									value={room.id}
									$selected={room.id === selectedRoom}
									defaultChecked={room.id === selectedRoom}
									onChange={handleRoomChange}
								></RoomButton>
							))}
						</RoomContainer>
						<FormButton $primary={disabled ? true : false} text={'Join'} type={'submit'} name={'submit'} value={'submit'} />
					</Form>
				</Wrapper>
			</Main>
		</>
	);
};

export default Home;
