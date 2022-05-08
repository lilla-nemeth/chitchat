import { createStore, applyMiddleware } from 'redux';
// composeWithDevToolsDevelopmentOnly
import { composeWithDevTools } from '@redux-devtools/extension';
import socketMiddleware from '../middleware';
import allReducers from '../reducers';
import * as types from '../constants/actionTypes';
import { addMessage, addUser, messageReceived, updateUsers } from '../actions';

let DEBUG = true;

const configureStore = () => {
  const store = createStore(
    allReducers,
    composeWithDevTools(
      applyMiddleware(
        socketMiddleware({
          url: 'http://localhost:3003',
          // listeners: when the server sends a message ('message')
          // the middleware iterates through with map()
          // and the client (socketMiddleware) dispatch the action (addUser)
          listeners: [{ message: 'joinUser', action: addUser }],

          // TODO: change the hard coded 'sendUser' to a variable later
          subscribers: [{ message: 'sendUser', type: types.ADD_USER }],
        })
      )
    )
  );

  // console.log(store.getState());
  return store;
};

export default configureStore;
