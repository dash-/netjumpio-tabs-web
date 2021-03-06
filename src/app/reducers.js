///
// Dependencies
///

import { combineReducers } from 'redux-immutable';
import {reducer as notifications} from 'react-redux-notifications-immutable';
import user from '../user/reducers';
import profile from '../profile/reducers';
import init from '../init/reducers';
import overview from '../overview/reducers';
import forms from '../forms/reducers';
import groups from '../groups/reducers';
import people from '../people/reducers';
import roles from '../roles/reducers';
import tabsets from '../tabsets/reducers';


///
// Exports
///

export default combineReducers({
	notifications,
	user,
	profile,
	init,
	overview,
	forms,
	groups,
	people,
	roles,
	tabsets,
});

