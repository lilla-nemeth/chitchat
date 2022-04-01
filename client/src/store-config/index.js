import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from '../reducers';
import setupSocket from '../sockets';
// TODO: import here the created custom saga middleware

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		allReducers,
		compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
		// applyMiddleware(sagaMiddleware)
	);

	const socket = setupSocket(store.dispatch);
	// TODO: sagaMiddleware.run(customSagaMiddleware, {socket})

	return store;
};

export default configureStore;
