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
					many: 'roles',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find({
					include: ['tabsets', 'group'],
				})
			).map(payload => actions.getListDone(payload))
		))
);

const saveItem = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'people',
					many: 'roles',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('roles')),
				Observable.of(actions.addItemDone(payload))
			))
		))
);


///
// Export
///

export default combineEpics(
	getList, saveItem
);


