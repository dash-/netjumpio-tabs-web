///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'PEOPLE:GET_LIST_START';
export const GET_LIST_REJECTED = 'PEOPLE:GET_LIST_REJECTED';
export const GET_LIST_FULFILLED = 'PEOPLE:GET_LIST_FULFILLED';

export const UPDATE_LIST = 'PEOPLE:UPDATE_LIST';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':people';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

export function getListFulfilled(payload) {
	return {type: GET_LIST_FULFILLED, payload};
}

export function updateList(item) {
	return {type: UPDATE_LIST, payload: item};
}

