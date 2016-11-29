
import { combineEpics } from 'redux-observable';
import forms from '../forms/epics';
import groups from '../groups/epics';
import users from '../users/epics';
import roles from '../roles/epics';
import tabsets from '../tabsets/epics';

export default combineEpics(
	forms,
	groups,
	users,
	roles,
	tabsets
);

