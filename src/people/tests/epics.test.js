///
// Dependencies
///

import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import { ActionsObservable } from 'redux-observable';
import nock from 'nock';
import url from 'url';
import { baseURL } from '../../app/__mocks__/api';

import epic from '../epics';
import * as actions from '../actions';
import * as formsActions from '../../forms/actions';


///
// Initialization / Configuration
///

const userId = 1;
const defaultState = fromJS({
	user: {
		accessToken: 'a',
		id: userId,
	}
});

jest.mock('../../app/api');

const mockStore = configureMockStore([])
let store;

const parsedUrl = url.parse(baseURL);
const baseHost = parsedUrl.protocol + '//' + parsedUrl.hostname;


///
// Tests
///


it('[epic] people: ignores invalid actions', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of({type: null});

	const expected = undefined;

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] people: correctly processes PEOPLE:GET_LIST_START', () => {
	const friendsFrom = [
		{id: 1}, {id: 2}
	];
	const friendsTo = [
		{id: 3}, {id: 4}
	];

	nock(baseHost)
		.get(/^\/people\/1\/friendsFrom.*$/)
		.reply(200, friendsFrom);

	nock(baseHost)
		.get(/^\/people\/1\/friendsTo.*$/)
		.reply(200, friendsTo);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.getListStart()
	);

	const expected = actions.getListDone(
		friendsFrom.concat(friendsTo)
	);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] people: correctly processes PEOPLE:SUBMIT_FORM', () => {
	const item = {a: 'a', b: 'b'};

	nock(baseHost)
		.post(/^\/people\/1\/people.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitForm(item)
	);

	const expected = [
		formsActions.submitFormDone('people'),
		formsActions.clearFormValues('people'),
		actions.addItemDone(item),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

