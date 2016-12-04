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
				api.createClient('roles').find({
					include: ['tabsets'],
				})
			).map(payload => ({
				type: actions.GET_LIST_FULFILLED,
				payload
			}))
		))
);

const saveItem = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				axios.post('/roles', action.payload)
			).map(payload => formsActions.formSubmitFulfilled('roles'))
		))
);


///
// Export
///

export default combineEpics(
	getList, saveItem
);


