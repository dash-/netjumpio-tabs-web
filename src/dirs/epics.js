
import { combineEpics } from 'redux-observable';
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const fetchList = (action$, store) => (
	action$.ofType(actions.FETCH_DIRS_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/dirs.json')
			).map(payload => ({
				type: actions.FETCH_DIRS_FULFILLED,
				payload
			}))
		))
);

const fetchItem = (action$, store) => (
	action$.ofType(actions.FETCH_DIR_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/dirs/' + action.payload + '.json')
			).map(payload => ({
				type: actions.FETCH_DIR_FULFILLED,
				payload,
			}))
		))
);

export default combineEpics(
	fetchList, fetchItem
);

