///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import isUndefined from 'lodash/isUndefined';
import omit from 'lodash/omit';

import api from '../app/api';
import * as formsActions from '../forms/actions';
import * as actions from './actions';


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
			).map(
				payload => actions.getListDone(payload)
			).catch(error => (
				Observable.of(actions.getListFail(error, action))
			))
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
			).map(
				payload => actions.getItemDone(payload)
			).catch(error => (
				Observable.of(actions.getItemFail(error, action))
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
					many: 'tabsets',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.submitFormDone('tabsets')),
				Observable.of(formsActions.clearFormValues('tabsets')),
				Observable.of(actions.addItemDone(payload))
			)).catch(error => (
				Observable.of(actions.addItemFail(error, action))
			))
		))
);

const editItemPrompt = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_PROMPT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.showForm('tabsets')),
			Observable.of(
				formsActions.initFormData('tabsets', {
					values: action.payload,
				})
			)
		))
);

const editItem = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabsets', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).upsert(omit(action.payload, ['_meta']))
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.submitFormDone('tabsets')),
				Observable.of(formsActions.clearFormValues('tabsets')),
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
				api.createClient('tabsets', {
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
				api.request('tabsets', [
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
	getList, getItem, submitForm, addItem,
	editItemPrompt, editItem, removeItem, restoreItem
);

export {
	getList, getItem, submitForm, addItem,
	editItemPrompt, editItem, removeItem, restoreItem
};

