///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';

import Notifications from 'react-notification-system-redux';

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
				Observable.of(actions.addItemDone(payload))
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
				Observable.of(formsActions.clearFormValues('tabsetsTabs')),
				Observable.of(actions.addTabDone(payload))
			))
		))
);

const removeTab = (action$, store) => (
	action$.ofType(actions.REMOVE_TAB_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabs', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).destroyById(action.payload.id)
			).flatMap(payload => Observable.concat(
				Observable.of(actions.removeTabDone(action.payload)),
				Observable.of(Notifications.success({
					title: 'Success!',
					message: 'The tab has been removed.',
					autoDismiss: 8,
					action: {
						label: 'Undo',
						callback: () => console.log('TODO'),
					},
				}))
			))
		))
);


///
// Exports
///

export default combineEpics(
	getList, getItem, saveItem, addTab, removeTab
);

