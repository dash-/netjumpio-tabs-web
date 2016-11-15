///
// Dependencies
///

import Immutable from 'immutable';
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import state from './state';
import rootEpic from './epics';
import rootReducer from './reducers';


///
// Initialization
///

const initialState = Immutable.fromJS(state);
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = compose(applyMiddleware(
	epicMiddleware
));

const store = createStore(
	rootReducer, initialState, middleware
);

export default store;
