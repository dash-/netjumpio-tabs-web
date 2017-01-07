///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const SUBMIT_LOGIN_FORM = formsActions.SUBMIT_FORM_START + ':login';

export const LOGIN_START = 'USER:LOGIN_START';
export const LOGIN_FAIL = 'USER:LOGIN_FAIL';
export const LOGIN_DONE = 'USER:LOGIN_DONE';

export const LOGOUT_START = 'USER:LOGOUT_START';
export const LOGOUT_FAIL = 'USER:LOGOUT_FAIL';
export const LOGOUT_DONE = 'USER:LOGOUT_DONE';


///
// Action creators
///

export function loginStart(credentials) {
	return {type: LOGIN_START, payload: credentials};
}

export function loginFail(error, action) {
	return {type: LOGIN_FAIL, payload: {
		error, action
	}};
}

export function loginDone(login) {
	return {type: LOGIN_DONE, payload: login};
}

export function logoutStart() {
	return {type: LOGOUT_START};
}

export function logoutFail(error, action) {
	return {type: LOGOUT_FAIL, payload: {
		error, action
	}};
}

export function logoutDone() {
	return {type: LOGOUT_DONE};
}

