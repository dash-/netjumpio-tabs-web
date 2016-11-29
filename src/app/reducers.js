
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import groups from '../groups/reducers';
import people from '../people/reducers';
import roles from '../roles/reducers';
import tabsets from '../tabsets/reducers';

export default combineReducers({
	overview,
	forms,
	groups,
	people,
	roles,
	tabsets,
});

