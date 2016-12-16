///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const SUBMIT_LOGIN_FORM = formsActions.FORM_SUBMIT_START + ':login';

export const LOGOUT_START = 'USER:LOGOUT_START';
export const LOGOUT_FAIL = 'USER:LOGOUT_FAIL';
export const LOGOUT_DONE = 'USER:LOGOUT_DONE';


///
// Action creators
///

export function logoutStart() {
	return {type: LOGOUT_START};
}

export function logoutFail() {
	return {type: LOGOUT_FAIL};
}

export function logoutDone() {
	return {type: LOGOUT_DONE};
}
