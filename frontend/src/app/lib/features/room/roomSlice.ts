import { createSlice } from '@reduxjs/toolkit';
import type { Room, RoomState } from '@/app/types/reduxTypes';

import ChillIcon from '../../../assets/icons/ChillIcon';
import DebateIcon from '../../../assets/icons/DebateIcon';
import TechIcon from '../../../assets/icons/TechIcon';
import GameIcon from '../../../assets/icons/GameIcon';
import SportsIcon from '../../../assets/icons/SportsIcon';

const initialRooms: Room[] = [
	{
		id: '1',
		name: 'chill',
		icon: ChillIcon,
	},
	{
		id: '2',
		name: 'debate',
		icon: DebateIcon,
	},
	{
		id: '3',
		name: 'tech',
		icon: TechIcon,
	},
	{
		id: '4',
		name: 'games',
		icon: GameIcon,
	},
	{
		id: '5',
		name: 'sports',
		icon: SportsIcon,
	},
];

const initialState: RoomState = {
	rooms: initialRooms,
};

const roomSlice = createSlice({
	name: 'rooms',
	initialState,
	reducers: {},
});

export default roomSlice.reducer;
