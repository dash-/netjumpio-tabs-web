///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'GROUPS:GET_LIST_START';
export const GET_LIST_FAIL = 'GROUPS:GET_LIST_FAIL';
export const GET_LIST_DONE = 'GROUPS:GET_LIST_DONE';

export const UPDATE_LIST = 'GROUPS:UPDATE_LIST';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':groups';


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

