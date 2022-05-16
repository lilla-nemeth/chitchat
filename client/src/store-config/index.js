import { createStore, applyMiddleware } from 'redux';
// composeWithDevToolsDevelopmentOnly
import allReducers from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import socketMiddleware from '../middleware';
import * as types from '../constants/actionTypes';
import { addMessage, receivedMessage, sendUsers, removeUser } from '../actions';
import logger from 'redux-logger';

let DEBUG = true;

const configureStore = () => {
  const store = createStore(
    allReducers,
    composeWithDevTools(
      applyMiddleware(
        logger,
        socketMiddleware({
          url: 'http://localhost:3003/',
          listeners: [
            { message: 'sendUsersList', action: sendUsers },
            { message: 'serverMessage', action: addMessage },
            { message: 'receivedMessage', action: receivedMessage },
          ],
          subscribers: [types.ADD_USER, types.ADD_MESSAGE, types.REMOVE_USER],
        })
      )
    )
  );

  return store;
};

export default configureStore;
