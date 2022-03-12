const initState = {
	users: [],
};

const userReducer = (state = initState, action) => {
	if (action.type === 'CREATE_USER') {
		let newUser = {
			id: action.id,
			roomId: action.roomId,
			username: action.username,
			timestamp: action.timestamp,
		};

		return {
			...state,
			users: [newUser],
		};
	}
	return state;
};

export default userReducer;
