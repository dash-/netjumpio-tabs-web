///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import user from '../user/epics';
import forms from '../forms/epics';
import groups from '../groups/epics';
import people from '../people/epics';
import roles from '../roles/epics';
import tabsets from '../tabsets/epics';


///
// Exports
///

export default combineEpics(
	user,
	forms,
	groups,
	people,
	roles,
	tabsets
);

