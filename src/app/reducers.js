
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import groups from '../groups/reducers';
import users from '../users/reducers';
import roles from '../roles/reducers';
import tabsets from '../tabsets/reducers';

const reducers = {
	overview,
	forms,
	groups,
	users,
	roles,
	tabsets,
};

export default combineReducers(reducers);

