
import { combineEpics } from 'redux-observable';
import groupsEpics from '../groups/epics';
import usersEpics from '../users/epics';
import rolesEpics from '../roles/epics';
import tabsetsEpics from '../tabsets/epics';

export default combineEpics(
	groupsEpics,
	usersEpics,
	rolesEpics,
	tabsetsEpics
);

