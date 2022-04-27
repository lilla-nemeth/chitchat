import ChillIcon01 from '../assets/icons/ChillIcon01';
import DebateIcon02 from '../assets/icons/DebateIcon02';
import TechIcon02 from '../assets/icons/TechIcon02';
import GameIcon01 from '../assets/icons/GameIcon01';
import SportsIcon02 from '../assets/icons/SportsIcon02';

const initState = {
	rooms: [
		{
			id: '1',
			name: 'chill',
			icon: <ChillIcon01 />,
		},
		{
			id: '2',
			name: 'debate',
			icon: <DebateIcon02 />,
		},
		{
			id: '3',
			name: 'tech',
			icon: <TechIcon02 />,
		},
		{
			id: '4',
			name: 'games',
			icon: <GameIcon01 />,
		},
		{
			id: '5',
			name: 'sports',
			icon: <SportsIcon02 />,
		},
	],
};

const roomReducer = (state = initState) => {
	return state;
};

export default roomReducer;
