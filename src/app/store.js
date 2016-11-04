
///
// Dependencies
///

import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { applyMiddleware, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import epics from './epics';
import reducers from './reducers';


///
// Initialization
///

const rootEpic = combineEpics.apply(combineEpics, epics);
const rootReducer = combineReducers(reducers);

const initialState = Immutable.Map();
const epicMiddleware = createEpicMiddleware(rootEpic.values());
const middleware = composeWithDevTools(applyMiddleware(
	promise(), epicMiddleware, logger()
));

const store = createStore(
	rootReducer, initialState, middleware
);

export default store;
