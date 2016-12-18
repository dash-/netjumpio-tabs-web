///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import isUndefined from 'lodash/isUndefined';

import api from '../app/api';
import * as formsActions from '../forms/actions';
import * as tabsActions from '../tabs/actions';
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
	action$.ofType(actions.FORM_SUBMIT)
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

const urlFormSubmit = (action$, store) => (
	action$.ofType(tabsActions.URL_FORM_SUBMIT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.formSubmitDone('tabsUrl')),
			Observable.of(formsActions.clearFormValues('tabsUrl')),
			Observable.of(formsActions.showForm('tabs')),
			Observable.of(tabsActions.getWebpageInfoStart(action.payload.url)),
		))
);

const getWebpageInfo = (action$, store) => (
	action$.ofType(tabsActions.GET_WEBPAGE_INFO_START)
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
			))
		))
);

const tabsFormSubmit = (action$, store) => (
	action$.ofType(tabsActions.TABS_FORM_SUBMIT)
		.switchMap(action => {
			if(isUndefined(action.payload.id)) {
				return Observable.of(tabsActions.addTabStart(
					action.aux.tabsetId, action.payload
				));
			}

			return Observable.of(tabsActions.editTabStart(
				action.payload
			));
		})
);

const addTab = (action$, store) => (
	action$.ofType(tabsActions.ADD_TAB_START)
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
				Observable.of(tabsActions.addTabDone(payload))
			))
		))
);

const editTabPrompt = (action$, store) => (
	action$.ofType(tabsActions.EDIT_TAB_PROMPT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.showForm('tabs')),
			Observable.of(
				formsActions.initFormData('tabs', {
					values: action.payload,
				})
			)
		))
);

const removeTab = (action$, store) => (
	action$.ofType(tabsActions.REMOVE_TAB_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createClient('tabs', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).destroyById(action.payload.id)
			).flatMap(payload => Observable.of(
				tabsActions.removeTabDone(action.payload))
			)
		))
);

const restoreTab = (action$, store) => (
	action$.ofType(tabsActions.RESTORE_TAB_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.request('tabs', [
					'', action.payload.id,
					'restore',
				].join('/'), {}, 'POST', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				})
			).flatMap(payload => Observable.of(
				tabsActions.restoreTabDone(payload))
			)
		))
);


///
// Exports
///

export default combineEpics(
	getList, getItem, saveItem, urlFormSubmit,
	getWebpageInfo, tabsFormSubmit,
	addTab, editTabPrompt, removeTab, restoreTab
);

