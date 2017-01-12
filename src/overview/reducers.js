///
// Dependencies
///

import { combineReducers } from 'redux-immutable';

import root from './selectedReducers';
import panels from './panelsReducers';


///
// Reducers
///

export default combineReducers({
	root,
	panels,
});

