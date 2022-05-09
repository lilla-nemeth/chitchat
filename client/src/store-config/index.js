import { createStore, applyMiddleware } from 'redux';
// composeWithDevToolsDevelopmentOnly
import allReducers from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import socketMiddleware from '../middleware';
import * as types from '../constants/actionTypes';
import { addMessage, addUser, messageReceived, updateUsers } from '../actions';

let DEBUG = true;

const configureStore = () => {
  const store = createStore(
    allReducers,
    composeWithDevTools(
      applyMiddleware(
        socketMiddleware({
          url: 'http://localhost:3003/',
          listeners: [
            { message: 'joinUser', action: addUser },
            { message: 'serverMessage', action: addMessage },
          ],
          subscribers: [
            { message: 'sendUser', type: types.ADD_USER },
            { message: 'chatMessage', type: types.ADD_MESSAGE },
          ],
        })
      )
    )
  );

  // console.log(store.getState());
  return store;
};

export default configureStore;
