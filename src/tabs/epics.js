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

const urlFormSubmit = (action$, store) => (
	action$.ofType(actions.URL_FORM_SUBMIT)
		.switchMap(action => Observable.concat(
			Observable.of(formsActions.formSubmitDone('tabsUrl')),
			Observable.of(formsActions.clearFormValues('tabsUrl')),
			Observable.of(formsActions.showForm('tabs')),
			Observable.of(actions.getWebpageInfoStart(action.payload)),
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
				actions.restoreTabDone(payload))
			)
		))
);

const addTab = (action$, store) => (
	action$.ofType(actions.ADD_TAB_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'tabsets',
					many: 'tabs',
					id: action.aux.tabsetId,
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
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
			).flatMap(payload => Observable.of(
				actions.removeTabDone(action.payload))
			)
		))
);

const restoreTab = (action$, store) => (
	action$.ofType(actions.RESTORE_TAB_START)
		.switchMap(action => (
			Observable.fromPromise(
				api.request('tabs', [
					'', action.payload.id,
					'restore',
				].join('/'), {}, 'POST', {
					accessToken: store.getState().getIn(['user', 'accessToken']),
				})
			).flatMap(payload => Observable.of(
				actions.restoreTabDone(payload))
			)
		))
);


///
// Exports
///

export default combineEpics(
	urlFormSubmit, getWebpageInfo, addTab, removeTab,
	restoreTab
);

