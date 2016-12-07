///
// Dependencies
///

import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import map from 'lodash/map';
import reject from 'lodash/reject';
import includes from 'lodash/includes';

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
			Observable.forkJoin(
				api.createRelatedClient({
					one: 'people',
					many: 'friendsFrom',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find(),
				api.createRelatedClient({
					one: 'people',
					many: 'friendsTo',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).find(),
				(friendsFrom, friendsTo) => {
					// Create a union
					const fromIds = map(friendsFrom, 'id');
					return friendsFrom.concat(reject(friendsTo, person => (
						includes(fromIds, person.id)
					)));
				}
			).map(payload => actions.getListDone(payload))
		))
);

// TODO - This will change drastically later, as adding a friend
//        should not create a new person, but rather invite them
//        to be your friend.  So this is basically a placeholder,
//        and it will not work like that.
const saveItem = (action$, store) => (
	action$.ofType(actions.SUBMIT_FORM)
		.switchMap(action => (
			Observable.fromPromise(
				api.createRelatedClient({
					one: 'people',
					many: 'people',
					id: store.getState().getIn(['user', 'id']),
					accessToken: store.getState().getIn(['user', 'accessToken']),
				}).create(action.payload)
			).flatMap(payload => Observable.concat(
				Observable.of(formsActions.formSubmitDone('people')),
				Observable.of(actions.addItemDone(payload))
			))
		))
);


///
// Exports
///

export default combineEpics(
	getList, saveItem
);

