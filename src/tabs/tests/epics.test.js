///
// Dependencies
///

import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import { ActionsObservable } from 'redux-observable';
import nock from 'nock';
import url from 'url';
import { baseURL } from '../../app/__mocks__/api';
import { not, keyIn } from '../../utils/immutableUtils';

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

it('[epic] tabs: ignores invalid actions', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of({type: null});

	const expected = undefined;

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:SUBMIT_URL_FORM', () => {
	const item = {url: 'xxx'};

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitUrlForm(item)
	);

	const expected = [
		formsActions.submitFormDone('tabsUrl'),
		formsActions.clearFormValues('tabsUrl'),
		formsActions.showForm('tabs'),
		actions.getWebpageInfoStart(item.url),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:GET_WEBPAGE_INFO_START', () => {
	const item = {a: 'a', b: 'b'};
	const url = 'xxx';

	nock(baseHost)
		.get(/^\/tabs\/webpage.*$/)
		.reply(200, item);

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.getWebpageInfoStart(url)
	);

	const expected = formsActions.initFormData('tabs', {
		values: item
	});

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:SUBMIT_TABS_FORM for add', () => {
	const item = {a: 'a', b: 'b'};
	const tabsetId = 1;

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitTabsForm(tabsetId, item)
	);

	const expected = actions.addItemStart(tabsetId, item);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:SUBMIT_TABS_FORM for edit', () => {
	const item = {id: 1234, a: 'a', b: 'b'};
	const tabsetId = 1;

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitTabsForm(tabsetId, item)
	);

	const expected = actions.editItemStart(item);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:ADD_ITEM_START', () => {
	const item = {a: 'a', b: 'b'};
	const tabsetId = 1;

	nock(baseHost)
		.post(/^\/tabsets\/1\/tabs.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.addItemStart(tabsetId, item)
	);

	const expected = [
		formsActions.submitFormDone('tabs'),
		formsActions.clearFormValues('tabs'),
		actions.addItemDone(item),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:EDIT_ITEM_PROMPT', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	const state = fromJS({});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.editItemPrompt(item)
	);

	const expected = [
		formsActions.showForm('tabs'),
		formsActions.initFormData('tabs', {
			values: item,
		}),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:EDIT_ITEM_PROMPT', () => {
	const item = {a: 'a', b: 'b'};

	nock(baseHost)
		.put(/^\/tabs.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.editItemPrompt(item)
	);

	const expected = [
		formsActions.showForm('tabs'),
		formsActions.initFormData('tabs', {values: item}),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:EDIT_ITEM_START', () => {
	const item = fromJS({id: 1234, a: 'a', b: 'b'});

	nock(baseHost)
		.put(/^\/tabs.*$/)
		.reply(200, item);

	const state = fromJS(defaultState);
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.editItemStart(item.toJS())
	);

	const expected = [
		formsActions.submitFormDone('tabs'),
		formsActions.clearFormValues('tabs'),
		actions.editItemDone(
			item.filterNot(keyIn('id')).toJS()
		),
	];

	return epic(action$, store).reduce((acc, action) => {
		return acc.concat([action]);
	}, []).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] tabs: correctly processes TABS:REMOVE_ITEM_START', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	nock(baseHost)
		.delete(/^\/tabs\/1234.*$/)
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

pit('[epic] tabs: correctly processes TABS:RESTORE_ITEM_START', () => {
	const item = {id: 1234, a: 'a', b: 'b'};

	nock(baseHost)
		.post(/^\/tabs\/1234\/restore.*$/)
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

