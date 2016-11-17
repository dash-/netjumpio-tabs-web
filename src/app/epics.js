
import { combineEpics } from 'redux-observable';
import orgsEpics from '../orgs/epics';
import usersEpics from '../users/epics';
import rolesEpics from '../roles/epics';
import dirsEpics from '../dirs/epics';

export default combineEpics(
	orgsEpics,
	usersEpics,
	rolesEpics,
	dirsEpics
);

