///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import axios from 'axios';
import { Observable } from 'rxjs';

import api from '../app/api';
import * as actions from './actions';
import * as formsActions from '../forms/actions';


///
// Epics
///

const getList = (action$, store) => (
	action$.ofType(actions.GET_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabsets').find({
					include: ['ownerGroup', 'ownerRole'],
				})
			).map(payload => ({
				type: actions.GET_LIST_FULFILLED,
				payload
			}))
		))
);

const getItem = (action$, store) => (
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
				// TODO - Replace with api.createClient('tabsets')...
				axios.post('/tabsets', action.payload)
			).map(payload => formsActions.formSubmitFulfilled('tabsets'))
		))
);


///
// Export
///

export default combineEpics(
	getList, getItem, saveItem
);

