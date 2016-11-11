
import { combineEpics } from 'redux-observable';
import directiveEpics from '../dirs/epics';

export default combineEpics.apply(null, [
	directiveEpics,
]);

