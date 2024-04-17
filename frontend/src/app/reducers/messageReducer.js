import * as types from '../constants/actionTypes';

const initState = {
  messages: [],
};

const messageReducer = (state = initState.messages, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.RECEIVE_MESSAGE:
      let newMessage = {
        id: action.payload.id,
        userId: action.payload.userId,
        message: action.payload.message,
        author: action.payload.author,
        timestamp: action.payload.timestamp,
      };
      return state.concat([newMessage]);
    case types.ADD_REPLY_MESSAGE:
    case types.RECEIVE_REPLY_MESSAGE:
      let newReplyMessage = {
        prevId: action.payload.prevId,
        prevUserId: action.payload.prevUserId,
        prevMessage: action.payload.prevMessage,
        prevAuthor: action.payload.prevAuthor,
        prevTimestamp: action.payload.prevTimestamp,
        id: action.payload.id,
        userId: action.payload.userId,
        message: action.payload.message,
        author: action.payload.author,
        timestamp: action.payload.timestamp,
      };
      return state.concat([newReplyMessage]);
    default:
      return state;
  }
};

export default messageReducer;
