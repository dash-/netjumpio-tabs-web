
import { combineEpics } from 'redux-observable';
import orgsEpics from '../orgs/epics';
import usersEpics from '../users/epics';
import dirsEpics from '../dirs/epics';

export default combineEpics.apply(null, [
	orgsEpics,
	usersEpics,
	dirsEpics,
]);

