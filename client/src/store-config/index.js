import { createStore, applyMiddleware } from 'redux';
// composeWithDevToolsDevelopmentOnly
import allReducers from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import socketMiddleware from '../middleware';
import * as types from '../constants/actionTypes';
import { addMessage, addUser, messageReceived, updateUsers } from '../actions';
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
            { message: 'serverMessage', action: addMessage },
            { message: 'joinUser', action: addUser },
            // { message: 'chatMessage', action: messageReceived },
          ],
          subscribers: [
            { message: 'sendUser', type: types.ADD_USER },
            // TODO: fix this in the middleware, somehow it only uses the first action (ADD_USER)
            { message: 'addMessage', type: types.ADD_MESSAGE },
          ],
        })
      )
    )
  );

  // console.log(store.getState());
  return store;
};

export default configureStore;
