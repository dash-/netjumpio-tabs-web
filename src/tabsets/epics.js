
import { combineEpics } from 'redux-observable';
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const fetchList = (action$, store) => (
	action$.ofType(actions.FETCH_TABSETS_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/tabsets.json')
			).map(payload => ({
				type: actions.FETCH_TABSETS_FULFILLED,
				payload
			}))
		))
);

const fetchItem = (action$, store) => (
	action$.ofType(actions.FETCH_TABSET_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/tabsets/' + action.payload + '.json')
			).map(payload => ({
				type: actions.FETCH_TABSET_FULFILLED,
				payload,
			}))
		))
);

export default combineEpics(
	fetchList, fetchItem
);

