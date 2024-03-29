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

// send user list
export const sendUsers = (users) => ({
  type: types.SEND_USERS,
  payload: {
    users,
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

// receive message
export const receiveMessage = (id, userId, message, author, timestamp) => ({
  type: types.RECEIVE_MESSAGE,
  payload: {
    id,
    userId,
    message,
    author,
    timestamp,
  },
});

// add reply message
export const addReplyMessage = (
  prevId,
  prevUserId,
  prevMessage,
  prevAuthor,
  prevTimestamp,
  id,
  userId,
  message,
  author,
  timestamp
) => ({
  type: types.ADD_REPLY_MESSAGE,
  payload: {
    prevId,
    prevUserId,
    prevMessage,
    prevAuthor,
    prevTimestamp,
    id,
    userId,
    message,
    author,
    timestamp,
  },
});

// receive reply message
export const receiveReplyMessage = (
  prevId,
  prevUserId,
  prevMessage,
  prevAuthor,
  prevTimestamp,
  id,
  userId,
  message,
  author,
  timestamp
) => ({
  type: types.RECEIVE_REPLY_MESSAGE,
  payload: {
    prevId,
    prevUserId,
    prevMessage,
    prevAuthor,
    prevTimestamp,
    id,
    userId,
    message,
    author,
    timestamp,
  },
});
