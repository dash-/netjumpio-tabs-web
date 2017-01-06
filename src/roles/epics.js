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
			).map(payload => (
				actions.getListDone(payload)
			)).catch(error => (
				Observable.of(actions.getListFail(error, action))
			))
		))
);

const formSubmit = (action$, store) => (
	action$.ofType(actions.FORM_SUBMIT)
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
					many: 'roles',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('roles')),
				Observable.of(formsActions.clearFormValues('roles')),
				Observable.of(actions.addItemDone(payload))
			)).catch(error => (
				Observable.of(actions.addItemFail(error, action))
			))
		))
);

const editItemPrompt = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_PROMPT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.showForm('roles')),
			Observable.of(
				formsActions.initFormData('roles', {
					values: action.payload,
				})
			)
		))
);

const editItem = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('roles', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).upsert(omit(action.payload, ['_meta']))
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('roles')),
				Observable.of(formsActions.clearFormValues('roles')),
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
				api.createClient('roles', {
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
				api.request('roles', [
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
	getList, formSubmit, addItem,
	editItemPrompt, editItem, removeItem, restoreItem
);

