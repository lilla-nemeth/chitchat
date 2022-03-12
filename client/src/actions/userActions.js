// push user to users array
export const createUser = (id, roomId, username, timestamp) => {
	return {
		type: 'CREATE_USER',
		id,
		roomId,
		username,
		timestamp,
	};
};
