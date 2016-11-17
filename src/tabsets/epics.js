
import { combineEpics } from 'redux-observable';
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const fetchList = (action$, store) => (
	action$.ofType(actions.GET_TABSETS_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/tabsets.json')
			).map(payload => ({
				type: actions.GET_TABSETS_LIST_FULFILLED,
				payload
			}))
		))
);

const fetchItem = (action$, store) => (
	action$.ofType(actions.GET_TABSETS_ITEM_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/tabsets/' + action.payload + '.json')
			).map(payload => ({
				type: actions.GET_TABSETS_ITEM_FULFILLED,
				payload,
			}))
		))
);

export default combineEpics(
	fetchList, fetchItem
);

