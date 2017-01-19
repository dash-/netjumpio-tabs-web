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

it('[epic] roles: ignores invalid actions', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of({type: null});

	const expected = undefined;

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:SUBMIT_FORM for add', () => {
	const item = {a: 'a', b: 'b'};

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitForm(item)
	);

	const expected = actions.addItemStart(item);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:SUBMIT_FORM for edit', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitForm(item)
	);

	const expected = actions.editItemStart(item);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:GET_LIST_START', () => {
	const list = [1, 2, 3, 4, 5];

	nock(baseHost)
		.get(/^\/people\/1\/roles.*$/)
		.reply(200, list);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.getListStart()
	);

	const expected = actions.getListDone(list);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:ADD_ITEM_START', () => {
	const item = {a: 'a', b: 'b'};

	nock(baseHost)
		.post(/^\/people\/1\/roles.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.addItemStart(item)
	);

	const expected = [
		formsActions.submitFormDone('roles'),
		formsActions.clearFormValues('roles'),
		actions.addItemDone(item),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:EDIT_ITEM_PROMPT', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.editItemPrompt(item)
	);

	const expected = [
		formsActions.showForm('roles'),
		formsActions.initFormData('roles', {
			values: item,
		}),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:EDIT_ITEM_START', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	nock(baseHost)
		.put(/^\/roles.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.editItemStart(item)
	);

	const expected = [
		formsActions.submitFormDone('roles'),
		formsActions.clearFormValues('roles'),
		actions.editItemDone(item),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:REMOVE_ITEM_START', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	nock(baseHost)
		.delete(/^\/roles\/1234.*$/)
		.reply(200, {});

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.removeItemStart(item)
	);

	const expected = actions.removeItemDone(item);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] roles: correctly processes ROLES:RESTORE_ITEM_START', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	nock(baseHost)
		.post(/^\/roles\/1234\/restore.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.restoreItemStart(item)
	);

	const expected = actions.restoreItemDone(item);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

