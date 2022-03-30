import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import setupSocket from './sockets';
// TODO: import here the created custom saga middleware

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	allReducers,
	applyMiddleware(sagaMiddleware)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const socket = setupSocket(store.dispatch);
// TODO: sagaMiddleware.run(customSagaMiddleware, {socket})

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
