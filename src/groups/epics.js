///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';

import api from '../app/api';
import * as actions from './actions';
import * as formsActions from '../forms/actions';


///
// Epics
///

// Example with delayed retries for epic failure

/*
const getList = (action$, store) => (
	action$.ofType(actions.GET_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.defer(() => (
				api.createRelatedClient({
					one: 'people',
					many: 'groups',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find({
					include: ['tabsets', {roles: ['tabsets']}],
				})
			)).retryWhen(attempts => (
				attempts
					.zip(Observable.range(1, 3), (_, i) => i)
					.flatMap(i => (
						Observable.timer(i * 1000)
					))
			)).map(payload => (
				actions.getListDone(payload)
			)).catch(error => (
				Observable.of(actions.getListFail(error, action))
			))
		))
);
*/

const getList = (action$, store) => (
	action$.ofType(actions.GET_LIST_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'people',
					many: 'groups',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find({
					include: ['tabsets', {roles: ['tabsets']}],
				})
			).map(payload => (
				actions.getListDone(payload)
			)).catch(error => (
				Observable.of(actions.getListFail(error, action))
			))
		))
);

const submitForm = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => {
			if(isUndefined(action.payload.id)) {
				return Observable.of(actions.addItemStart(
					action.payload
				));
			}

			return Observable.of(actions.editItemStart(
				action.payload
			));
		})
);

const addItem = (action$, store) => (
	action$.ofType(actions.ADD_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'people',
					many: 'groups',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.submitFormDone('groups')),
				Observable.of(formsActions.clearFormValues('groups')),
				Observable.of(actions.addItemDone(payload))
			)).catch(error => (
				Observable.of(actions.addItemFail(error, action))
			))
		))
);

const editItemPrompt = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_PROMPT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.showForm('groups')),
			Observable.of(
				formsActions.initFormData('groups', {
					values: action.payload,
				})
			)
		))
);

const editItem = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('groups', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).upsert(omit(action.payload, ['_meta']))
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.submitFormDone('groups')),
				Observable.of(formsActions.clearFormValues('groups')),
				Observable.of(actions.editItemDone(action.payload))
			)).catch(error => (
				Observable.of(actions.editItemFail(error, action))
			))
		))
);

const removeItem = (action$, store) => (
	action$.ofType(actions.REMOVE_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('groups', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).destroyById(action.payload.id)
			).flatMap(payload => Observable.of(
				actions.removeItemDone(action.payload)
			)).catch(error => (
				Observable.of(actions.removeItemFail(error, action))
			))
		))
);

const restoreItem = (action$, store) => (
	action$.ofType(actions.RESTORE_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.request('groups', [
					'', action.payload.id,
					'restore',
				].join('/'), {}, 'POST', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				})
			).flatMap(payload => Observable.of(
				actions.restoreItemDone(action.payload)
			)).catch(error => (
				Observable.of(actions.restoreItemFail(error, action))
			))
		))
);


///
// Exports
///

export default combineEpics(
	getList, submitForm, addItem,
	editItemPrompt, editItem, removeItem, restoreItem
);

export {
	getList, submitForm, addItem,
	editItemPrompt, editItem, removeItem, restoreItem
};

