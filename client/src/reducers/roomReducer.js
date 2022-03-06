import ChillIcon01 from '../assets/icons/ChillIcon01';
import DebateIcon01 from '../assets/icons/DebateIcon01';
import DebateIcon02 from '../assets/icons/DebateIcon02';
import TechIcon01 from '../assets/icons/TechIcon01';
import TechIcon02 from '../assets/icons/TechIcon02';
import GameIcon01 from '../assets/icons/GameIcon01';
import SportIcon01 from '../assets/icons/SportIcon01';
import SportIcon02 from '../assets/icons/SportIcon02';
import SportIcon03 from '../assets/icons/SportIcon03';
import SportIcon04 from '../assets/icons/SportIcon04';
import SportIcon05 from '../assets/icons/SportIcon05';

const initState = {
	rooms: [
		{
			id: '1',
			name: 'Chill',
			icon: <ChillIcon01 />,
		},
		{
			id: '2',
			name: 'Debate',
			// icon: <DebateIcon01 />,
			icon: <DebateIcon02 />,
		},
		{
			id: '3',
			name: 'Tech',
			// icon: <TechIcon01 />,
			icon: <TechIcon02 />,
		},
		{
			id: '4',
			name: 'Games',
			icon: <GameIcon01 />,
		},
		{
			id: '5',
			name: 'Sports',
			// icon: <SportIcon01 />,
			icon: <SportIcon02 />,
			// icon: <SportIcon03 />,
			// icon: <SportIcon04 />,
			// icon: <SportIcon05 />,
		},
	],
};

const roomReducer = (state = initState, action) => {
	if (action.type === 'SELECT_ROOM') {
		let oneRoom = state.rooms.filter((room) => {
			return action.id !== room.id;
		});

		return {
			...state,
			rooms: oneRoom,
		};
	}
	return state;
};

export default roomReducer;
