import * as types from '../constants/actionTypes';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      let newMessage = {
        id: action.payload.id,
        message: action.payload.message,
        author: action.payload.author,
        timestamp: action.payload.timestamp,
      };
      return state.concat([newMessage]);
    default:
      return state;
  }
};

export default messageReducer;
