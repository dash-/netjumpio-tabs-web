///
// Dependencies
///

import { combineEpics } from 'redux-observable';
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
				api.createRelatedClient({
					one: 'people',
					many: 'people',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find()
			).map(payload => ({
					type: actions.GET_LIST_FULFILLED,
					payload
				}))
		))
);

// TODO - This will change drastically later, as adding a friend
//        should not create a new person, but rather invite them
//        to be your friend.  But this will work for now.
const saveItem = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'people',
					many: 'people',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitFulfilled('people')),
				Observable.of(actions.updateList(payload))
			))
		))
);


///
// Export
///

export default combineEpics(
	getList, saveItem
);

