import * as types from '../constants/actionTypes';

const initState = {
  users: [],
};

const userReducer = (state = initState.users, action) => {
  switch (action.type) {
    case types.ADD_USER:
      let newUser = {
        id: action.payload.id,
        roomId: action.payload.roomId,
        username: action.payload.username,
        timestamp: action.payload.timestamp,
      };
      return state.concat([newUser]);
    case types.GET_USER:
    case types.SEND_USERS:
      return action.payload.users;
    default:
      return state;
  }
};

export default userReducer;
