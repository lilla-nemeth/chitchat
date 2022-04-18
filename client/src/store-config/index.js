import { createStore, applyMiddleware } from 'redux';
// composeWithDevToolsDevelopmentOnly
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import allReducers from '../reducers';
import setupSocket from '../sockets';
// TODO: import here the created custom saga middleware

let DEBUG = true;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // TODO: redux saga?

  return store;
};

export default configureStore;
