///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'TABSETS:GET_LIST_START';
export const GET_LIST_FAIL = 'TABSETS:GET_LIST_FAIL';
export const GET_LIST_DONE = 'TABSETS:GET_LIST_DONE';

export const GET_ITEM_START = 'TABSETS:GET_ITEM_START';
export const GET_ITEM_FAIL = 'TABSETS:GET_ITEM_FAIL';
export const GET_ITEM_DONE = 'TABSETS:GET_ITEM_DONE';

export const ADD_ITEM_DONE = 'TABSETS:ADD_ITEM_DONE';

export const EDIT_ITEM_START = 'TABSETS:EDIT_ITEM_START';

export const REMOVE_ITEM_START = 'TABSETS:REMOVE_ITEM_START';

export const FORM_SUBMIT = formsActions.FORM_SUBMIT_START + ':tabsets';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

export function getItem(id) {
	return {type: GET_ITEM_START, payload: id};
}

export function addItemDone(item) {
	return {type: ADD_ITEM_DONE, payload: item};
}

export function editItemStart(item) {
	return {type: EDIT_ITEM_START, payload: item};
}

export function removeItemStart(item) {
	return {type: REMOVE_ITEM_START, payload: item};
}

