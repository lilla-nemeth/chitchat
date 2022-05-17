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

// add message
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

// received chat message
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

// send user list
export const sendUsers = (users) => ({
  type: types.SEND_USERS,
  payload: {
    users,
  },
});

// send user who leaves the room
export const getUser = (users) => ({
  type: types.GET_USER,
  payload: {
    users,
  },
});
