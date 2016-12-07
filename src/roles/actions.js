///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'ROLES:GET_LIST_START';
export const GET_LIST_FAIL = 'ROLES:GET_LIST_FAIL';
export const GET_LIST_DONE = 'ROLES:GET_LIST_DONE';

export const UPDATE_LIST = 'ROLES:UPDATE_LIST';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':roles';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

export function getListDone(payload) {
	return {type: GET_LIST_DONE, payload};
}

export function updateList(item) {
	return {type: UPDATE_LIST, payload: item};
}

