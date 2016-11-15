
import { combineReducers } from 'redux-immutable';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import orgs from '../orgs/reducers';
import users from '../users/reducers';
import roles from '../roles/reducers';
import dirs from '../dirs/reducers';

const reducers = {
	overview,
	forms,
	orgs,
	users,
	roles,
	dirs,
};

export default combineReducers(reducers);

