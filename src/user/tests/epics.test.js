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

const mockStore = configureMockStore([]);
let store;

const parsedUrl = url.parse(baseURL);
const baseHost = parsedUrl.protocol + '//' + parsedUrl.hostname;


///
// Tests
///

it('[epic] users: ignores invalid actions', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of({type: null});

	const expected = undefined;

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] users: correctly processes USER:SUBMIT_LOGIN_FORM', () => {
	const credentials = {a: 'a', b: 'b'};

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitLoginForm(credentials)
	);

	const expected = actions.loginStart(credentials);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] users: correctly processes USER:LOGIN_START', () => {
	const credentials = {email: 'a', password: 'b'};
	const userData = {a: 'a', b: 'b'};

	nock(baseHost)
		.post(/^\/people\/login.*$/)
		.reply(200, userData);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.loginStart(credentials)
	);

	const expected = [
		formsActions.submitFormDone('login', userData),
		actions.loginDone(userData),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] users: correctly processes USER:LOGOUT_START', () => {
	const result = {a: 'a', b: 'b'};

	nock(baseHost)
		.post(/^\/people\/logout\?access_token=a1b2c3.*$/)
		.reply(200, result);

	const state = defaultState.setIn(
		['user', 'accessToken'], 'a1b2c3'
	);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.logoutStart()
	);

	const expected = actions.logoutDone(result);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

