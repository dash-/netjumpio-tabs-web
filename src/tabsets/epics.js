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
			).map(payload => actions.getListDone(payload))
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
			).map(payload => actions.getItemDone(payload))
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
					many: 'tabsets',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('tabsets')),
				Observable.of(formsActions.clearFormValues('tabsets')),
				Observable.of(actions.addItemDone(payload))
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
				Observable.of(formsActions.formSubmitDone('tabsets')),
				Observable.of(formsActions.clearFormValues('tabsets')),
				Observable.of(actions.editItemDone(action.payload))
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
				actions.removeItemDone(action.payload))
			)
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
				actions.restoreItemDone(action.payload))
			)
		))
);


///
// Exports
///

export default combineEpics(
	getList, getItem, formSubmit, addItem,
	editItemPrompt, editItem, removeItem, restoreItem
);

