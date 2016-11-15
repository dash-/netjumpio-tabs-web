
import { combineEpics } from 'redux-observable';
import dirsEpics from '../dirs/epics';
import orgsEpics from '../orgs/epics';

export default combineEpics.apply(null, [
	dirsEpics,
	orgsEpics,
]);

