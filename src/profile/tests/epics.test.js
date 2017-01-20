///
// Dependencies
///

import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import { ActionsObservable } from 'redux-observable';
import rxjs from 'rxjs';

import epic from '../epics';
import * as actions from '../actions';


///
// Initialization / Configuration
///

const mockStore = configureMockStore([]);
let store;


///
// Tests
///


it('[epic] profile: ignores invalid actions', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of({type: null});

	const expected = undefined;

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] profile: correctly processes PROFILE:TOGGLE_PANEL show', () => {
	const state = fromJS({
		profile: {
			showPanel: false,
		}
	});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.togglePanel()
	);

	const expected = actions.showPanel();

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] profile: correctly processes PROFILE:TOGGLE_PANEL dismiss', () => {
	const state = fromJS({
		profile: {
			showPanel: true,
		}
	});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.togglePanel()
	);

	const expected = actions.dismissPanel();

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

