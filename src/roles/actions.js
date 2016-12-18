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

export const ADD_ITEM_DONE = 'ROLES:ADD_ITEM_DONE';

export const FORM_SUBMIT = formsActions.FORM_SUBMIT_START + ':roles';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

export function getListDone(payload) {
	return {type: GET_LIST_DONE, payload};
}

export function addItemDone(item) {
	return {type: ADD_ITEM_DONE, payload: item};
}

