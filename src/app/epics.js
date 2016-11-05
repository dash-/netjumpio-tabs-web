
import { combineEpics } from 'redux-observable';
import TabsetEpics from '../tabset/TabsetEpics';

export default combineEpics.apply(null, [
	TabsetEpics,
]);

