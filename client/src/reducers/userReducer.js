const initState = {
	users: [],
};

const userReducer = (state = initState, action) => {
	if (action.type === 'CREATE_USER') {
		let newUser = state.users.push({
			id: action.id,
			roomId: action.roomId,
			username: action.username,
			timestamp: action.timestamp,
		});
		return {
			...state,
			users: [...state.users, newUser],
		};
	}
	return state;
};

export default userReducer;
