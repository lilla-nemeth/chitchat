const initState = {
  users: [],
};

const userReducer = (state = initState, action) => {
  if (action.type === 'JOIN_USER') {
    let newUser = {
      socketId: action.payload.socketId,
      roomId: action.payload.roomId,
      username: action.payload.username,
      timestamp: action.meta.timestamp,
    };

    return {
      ...state,
      users: [newUser],
    };
  }

  // TODO: Define these actions, 2 options:
  /* Create the functions here/in a new file to the logic,
  export them, and call the functions here */

  // GET_USER
  // USER_LEAVE
  // GET_ROOM_USERS

  return state;
};

export default userReducer;
