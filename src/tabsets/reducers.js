import { combineReducers } from 'redux-immutable';

import item from './itemReducers';
import list from './listReducers';

export default combineReducers({
	item,
	list,
});

