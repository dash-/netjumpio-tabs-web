
///
// Dependencies
///

import Immutable from 'immutable';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import _ from 'lodash';

import state from './state';
import rootEpic from './epics';
import rootReducer from './reducers';


///
// Initialization
///

const initialState = Immutable.fromJS(state);
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleware = composeWithDevTools(applyMiddleware(
	promise(), epicMiddleware, logger()
));

const store = createStore(
	rootReducer, initialState, middleware
);

export default store;
