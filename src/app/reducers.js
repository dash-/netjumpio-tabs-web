
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import groups from '../groups/reducers';
import users from '../users/reducers';
import roles from '../roles/reducers';
import dirs from '../dirs/reducers';

const reducers = {
	overview,
	forms,
	groups,
	users,
	roles,
	dirs,
};

export default combineReducers(reducers);

