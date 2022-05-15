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

export const addMessage = (id, userId, message, author, timestamp) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id,
    userId,
    message,
    author,
    timestamp,
  },
});

export const receivedMessage = (id, userId, message, author, timestamp) => ({
  type: types.RECEIVED_MESSAGE,
  payload: {
    id,
    userId,
    message,
    author,
    timestamp,
  },
});

// when the user joins or leaves the chat room
export const sendUsers = (users) => ({
  type: types.SEND_USERS,
  payload: {
    users,
  },
});

export const removeUser = (users) => ({
  type: types.REMOVE_USER,
  payload: {
    users,
  },
});
