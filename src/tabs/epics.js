///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import isUndefined from 'lodash/isUndefined';

import api from '../app/api';
import * as formsActions from '../forms/actions';
import * as actions from './actions';


///
// Epics
///

const urlFormSubmit = (action$, store) => (
	action$.ofType(actions.URL_FORM_SUBMIT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.formSubmitDone('tabsUrl')),
			Observable.of(formsActions.clearFormValues('tabsUrl')),
			Observable.of(formsActions.showForm('tabs')),
			Observable.of(actions.getWebpageInfoStart(action.payload.url)),
		))
);

const getWebpageInfo = (action$, store) => (
	action$.ofType(actions.GET_WEBPAGE_INFO_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.request('tabs', '/webpage', {
					url: action.payload,
				}, 'GET', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				})
			).flatMap(payload => Observable.of(
				formsActions.initFormData('tabs', {
					values: payload,
				})
			)).catch(error => (
				Observable.of(actions.getWebpageInfoFail(error, action))
			))
		))
);

const tabsFormSubmit = (action$, store) => (
	action$.ofType(actions.TABS_FORM_SUBMIT)
		.switchMap(action => {
			if(isUndefined(action.payload.id)) {
				return Observable.of(actions.addItemStart(
					action.aux.tabsetId, action.payload
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
					one: 'tabsets',
					many: 'tabs',
					id: action.aux.tabsetId,
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('tabs')),
				Observable.of(formsActions.clearFormValues('tabs')),
				Observable.of(actions.addItemDone(payload))
			)).catch(error => (
				Observable.of(actions.addItemFail(error, action))
			))
		))
);

const editItemPrompt = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_PROMPT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.showForm('tabs')),
			Observable.of(
				formsActions.initFormData('tabs', {
					values: action.payload,
				})
			)
		))
);

const editItem = (action$, store) => (
	action$.ofType(actions.EDIT_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabs', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).upsert(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('tabs')),
				Observable.of(formsActions.clearFormValues('tabs')),
				Observable.of(actions.editItemDone(payload))
			)).catch(error => (
				Observable.of(actions.editItemFail(error, action))
			))
		))
);

const removeItem = (action$, store) => (
	action$.ofType(actions.REMOVE_ITEM_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabs', {
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
				api.request('tabs', [
					'', action.payload.id,
					'restore',
				].join('/'), {}, 'POST', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				})
			).flatMap(payload => Observable.of(
				actions.restoreItemDone(payload)
			)).catch(error => (
				Observable.of(actions.restoretemFail(error, action))
			))
		))
);


///
// Exports
///

export default combineEpics(
	urlFormSubmit, getWebpageInfo, tabsFormSubmit,
	addItem, editItemPrompt, editItem, removeItem, restoreItem
);

