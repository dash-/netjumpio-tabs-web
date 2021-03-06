///
// Dependencies
///

import Immutable from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { middleware as NotificationMiddleware } from 'react-redux-notifications-immutable';

import { loadState, saveState } from './localStorage';
import rootEpic from './epics';
import rootReducer from './reducers';


///
// Initialization
///

const initialState = loadState();
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = compose(applyMiddleware(
	epicMiddleware, NotificationMiddleware
));

const store = createStore(
	rootReducer, initialState, middleware
);

store.subscribe(() => {
	const state = store.getState();

	saveState(Immutable.fromJS({
		user: state.get('user'),
	}));
});

export default store;
