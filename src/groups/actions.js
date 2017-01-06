///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const FORM_SUBMIT = formsActions.FORM_SUBMIT_START + ':groups';

export const GET_LIST_START = 'GROUPS:GET_LIST_START';
export const GET_LIST_FAIL = 'GROUPS:GET_LIST_FAIL';
export const GET_LIST_DONE = 'GROUPS:GET_LIST_DONE';

export const GET_ITEM_START = 'GROUPS:GET_ITEM_START';
export const GET_ITEM_FAIL = 'GROUPS:GET_ITEM_FAIL';
export const GET_ITEM_DONE = 'GROUPS:GET_ITEM_DONE';

export const ADD_ITEM_START = 'GROUPS:ADD_ITEM_START';
export const ADD_ITEM_FAIL = 'GROUPS:ADD_ITEM_FAIL';
export const ADD_ITEM_DONE = 'GROUPS:ADD_ITEM_DONE';

export const EDIT_ITEM_PROMPT = 'GROUPS:EDIT_ITEM_PROMPT';
export const EDIT_ITEM_START = 'GROUPS:EDIT_ITEM_START';
export const EDIT_ITEM_FAIL = 'GROUPS:EDIT_ITEM_FAIL';
export const EDIT_ITEM_DONE = 'GROUPS:EDIT_ITEM_DONE';

export const REMOVE_ITEM_START = 'GROUPS:REMOVE_ITEM_START';
export const REMOVE_ITEM_FAIL = 'GROUPS:REMOVE_ITEM_FAIL';
export const REMOVE_ITEM_DONE = 'GROUPS:REMOVE_ITEM_DONE';

export const RESTORE_ITEM_START = 'GROUPS:RESTORE_ITEM_START';
export const RESTORE_ITEM_FAIL = 'GROUPS:RESTORE_ITEM_FAIL';
export const RESTORE_ITEM_DONE = 'GROUPS:RESTORE_ITEM_DONE';


///
// Action creators
///

export function getListStart() {
	return {type: GET_LIST_START};
}

export function getListFail(error, action) {
	return {type: GET_LIST_FAIL, payload: {
		error, action
	}};
}

export function getListDone(list) {
	return {type: GET_LIST_DONE, payload: list};
}

export function getItemStart(id) {
	return {type: GET_ITEM_START, payload: id};
}

export function getItemFail(error, action) {
	return {type: GET_ITEM_FAIL, payload: {
		error, action
	}};
}

export function getItemDone(item) {
	return {type: GET_ITEM_DONE, payload: item};
}

export function addItemStart(item) {
	return {type: ADD_ITEM_START, payload: item};
}

export function addItemFail(error, action) {
	return {type: ADD_ITEM_FAIL, payload: {
		error, action
	}};
}

export function addItemDone(item) {
	return {type: ADD_ITEM_DONE, payload: item};
}

export function editItemPrompt(item) {
	return {type: EDIT_ITEM_PROMPT, payload: item};
}

export function editItemStart(item) {
	return {type: EDIT_ITEM_START, payload: item};
}

export function editItemFail(error, action) {
	return {type: EDIT_ITEM_FAIL, payload: {
		error, action
	}};
}

export function editItemDone(item) {
	return {type: EDIT_ITEM_DONE, payload: item};
}

export function removeItemStart(item) {
	return {type: REMOVE_ITEM_START, payload: item};
}

export function removeItemFail(error, action) {
	return {type: REMOVE_ITEM_FAIL, payload: {
		error, action
	}};
}

export function removeItemDone(item) {
	return {type: REMOVE_ITEM_DONE, payload: item};
}

export function restoreItemStart(item) {
	return {type: RESTORE_ITEM_START, payload: item};
}

export function restoreItemFail(error, action) {
	return {type: RESTORE_ITEM_FAIL, payload: {
		error, action
	}};
}

export function restoreItemDone(item) {
	return {type: RESTORE_ITEM_DONE, payload: item};
}

