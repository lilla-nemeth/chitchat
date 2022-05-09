import * as types from '../constants/actionTypes';

// add user
export const addUser = (id, roomId, username, timestamp) => ({
  type: types.ADD_USER,
  payload: {
    id,
    roomId,
    username,
    timestamp,
  },
});

export const addMessage = (id, message, author, timestamp) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id,
    message,
    author,
    timestamp,
  },
});

export const messageReceived = (id, message, author, timestamp) => ({
  type: types.MESSAGE_RECEIVED,
  payload: {
    id,
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
