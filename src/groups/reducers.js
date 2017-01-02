///
// Dependencies
///

import { combineReducers } from 'redux-immutable';

import item from './itemReducers';
import list from './listReducers';


///
// Exports
///

export default combineReducers({
	item,
	list,
});

