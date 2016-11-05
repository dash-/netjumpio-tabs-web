
import { combineEpics } from 'redux-observable';
import directiveEpics from '../directive/epics';

export default combineEpics.apply(null, [
	directiveEpics,
]);

