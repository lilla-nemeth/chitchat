import { createStore, applyMiddleware } from 'redux';
// composeWithDevToolsDevelopmentOnly
import allReducers from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import socketMiddleware from '../middleware';
import * as types from '../constants/actionTypes';
import {
  addMessage,
  receiveMessage,
  receiveReplyMessage,
  sendUsers,
} from '../actions';
// import logger from 'redux-logger';

// let DEBUG = true;

const configureStore = () => {
  const store = createStore(
    allReducers,
    composeWithDevTools(
      applyMiddleware(
        // logger,
        socketMiddleware({
          url: 'http://localhost:8080/',
          listeners: [
            { message: 'sendUsersList', action: sendUsers },
            { message: 'serverMessage', action: addMessage },
            { message: 'receiveReplyMessage', action: receiveReplyMessage },
            { message: 'receiveMessage', action: receiveMessage },
          ],
          subscribers: [
            types.ADD_USER,
            types.ADD_REPLY_MESSAGE,
            types.ADD_MESSAGE,
            types.GET_USER,
          ],
        })
      )
    )
  );

  return store;
};

export default configureStore;
