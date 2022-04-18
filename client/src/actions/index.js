import * as types from '../constants/actionTypes';

let userId = 0;
let messageId = 0;

// add user
export const addUser = (roomId, username, timestamp) => ({
  type: types.ADD_USER,
  payload: {
    id: userId++,
    roomId,
    username,
    timestamp,
  },
});

export const addMessage = (message, author, timestamp) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id: messageId++,
    message,
    author,
    timestamp,
  },
});

// TODO: delete from here and messageReducer, if I don't use it
export const messageReceived = (message, author, timestamp) => ({
  type: types.MESSAGE_RECEIVED,
  payload: {
    id: messageId++,
    message,
    author,
    timestamp,
  },
});

// when the user joins or leaves the chat room
export const updateUsers = (users) => ({
  type: types.UPDATE_USERS,
  payload: {
    users,
  },
});
