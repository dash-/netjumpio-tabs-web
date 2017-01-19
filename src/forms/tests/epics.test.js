///
// Dependencies
///

import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';
import { ActionsObservable } from 'redux-observable';
import moxios from 'moxios';
import imageUploadConfig from '../../app/__mocks__/imageUploadConfig';

import epic from '../epics';
import * as actions from '../actions';


///
// Initialization / Configuration
///

moxios.install();

jest.mock('../../app/imageUploadConfig');

const mockStore = configureMockStore([]);
let store;


///
// Tests
///

it('[epic] forms: ignores invalid actions', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of({type: null});

	const expected = undefined;

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] forms: correctly processes FORMS:SUBMIT_FORM_START', () => {
	const state = fromJS({
		forms: {
			i: {
				values: {a: 'b'},
				aux: {c: 'd'}
			}
		}
	});
	store = mockStore(state);

	const action$ = ActionsObservable.of(
		actions.submitFormStart('i')
	);

	const expected = actions.delegateFormSubmit(
		'i', {a: 'b'}, {c: 'd'}
	);

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

it('[epic] forms: correctly processes FORMS:SUBMIT_FORM_DONE', () => {
	store = mockStore(fromJS({}));

	const action$ = ActionsObservable.of(
		actions.submitFormDone('i')
	);

	const expected = actions.hideForm('i');

	return epic(action$, store).toPromise().then(received => {
		expect(received).toEqual(expected);
	});
});

pit('[epic] forms: correctly processes FORMS:UPLOAD_IMAGE_START', () => {
	moxios.stubRequest(imageUploadConfig.url, {
		status: 200,
		response: {
			secure_url: 'i',
		}
	});

	const action$ = ActionsObservable.of(
		actions.uploadImageStart('a', 'b', 'c')
	);

	const expected = actions.uploadImageDone(
		'a', 'b', 'i'
	);

	var p = epic(action$).toPromise().then(received => {
		expect(received).toEqual(expected);
	});

	return p;
});

