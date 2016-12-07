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
					many: 'tabsets',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find()
			).map(payload => ({
				type: actions.GET_LIST_DONE,
				payload
			}))
		))
);

const getItem = (action$, store) => (
	action$.ofType(actions.GET_ITEM_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabsets', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).findOne({
					where: {id: action.payload},
					include: ['tabs'],
				})
			).map(payload => ({
				type: actions.GET_ITEM_DONE,
				payload,
			}))
		))
);

const saveItem = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'people',
					many: 'tabsets',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('tabsets')),
				Observable.of(actions.updateList(payload))
			))
		))
);

const addTab = (action$, store) => (
	action$.ofType(actions.ADD_TAB)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'tabsets',
					many: 'tabs',
					id: action.aux.tabsetId,
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('tabsetsTabs')),
				Observable.of(actions.updateTabsList(payload))
			))
		))
);


///
// Export
///

export default combineEpics(
	getList, getItem, saveItem, addTab
);

