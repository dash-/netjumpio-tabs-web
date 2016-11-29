///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import axios from 'axios';
import { Observable } from 'rxjs';

import apiConfig from '../app/apiConfig';
import * as actions from './actions';
import * as formsActions from '../forms/actions';


///
// Epics
///

const fetchList = (action$, store) => (
	action$.ofType(actions.GET_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/tabsets.json')
			).map(payload => ({
				type: actions.GET_LIST_FULFILLED,
				payload
			}))
		))
);

const fetchItem = (action$, store) => (
	action$.ofType(actions.GET_ITEM_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				axios.get('/data/tabsets/' + action.payload + '.json')
			).map(payload => ({
				type: actions.GET_ITEM_FULFILLED,
				payload,
			}))
		))
);

const saveItem = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				axios.post('/tabsets', action.payload, apiConfig())
			).map(payload => formsActions.formSubmitFulfilled('tabsets'))
		))
);


///
// Export
///

export default combineEpics(
	fetchList, fetchItem, saveItem
);

