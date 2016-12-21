///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const FORM_SUBMIT = formsActions.FORM_SUBMIT_START + ':tabsets';

export const GET_LIST_START = 'TABSETS:GET_LIST_START';
export const GET_LIST_FAIL = 'TABSETS:GET_LIST_FAIL';
export const GET_LIST_DONE = 'TABSETS:GET_LIST_DONE';

export const GET_ITEM_START = 'TABSETS:GET_ITEM_START';
export const GET_ITEM_FAIL = 'TABSETS:GET_ITEM_FAIL';
export const GET_ITEM_DONE = 'TABSETS:GET_ITEM_DONE';

export const ADD_ITEM_START = 'TABSETS:ADD_ITEM_START';
export const ADD_ITEM_FAIL = 'TABSETS:ADD_ITEM_FAIL';
export const ADD_ITEM_DONE = 'TABSETS:ADD_ITEM_DONE';

export const EDIT_ITEM_PROMPT = 'TABSETS:EDIT_ITEM_PROMPT';
export const EDIT_ITEM_START = 'TABSETS:EDIT_ITEM_START';
export const EDIT_ITEM_FAIL = 'TABSETS:EDIT_ITEM_FAIL';
export const EDIT_ITEM_DONE = 'TABSETS:EDIT_ITEM_DONE';

export const REMOVE_ITEM_START = 'TABSETS:REMOVE_ITEM_START';
export const REMOVE_ITEM_FAIL = 'TABSETS:REMOVE_ITEM_FAIL';
export const REMOVE_ITEM_DONE = 'TABSETS:REMOVE_ITEM_DONE';

export const RESTORE_ITEM_START = 'TABSETS:RESTORE_ITEM_START';
export const RESTORE_ITEM_FAIL = 'TABSETS:RESTORE_ITEM_FAIL';
export const RESTORE_ITEM_DONE = 'TABSETS:RESTORE_ITEM_DONE';


///
// Action creators
///

export function getListStart() {
	return {type: GET_LIST_START};
}

export function getListFail(err) {
	return {type: GET_LIST_FAIL, payload: err};
}

export function getListDone(list) {
	return {type: GET_LIST_DONE, payload: list};
}

export function getItemStart(id) {
	return {type: GET_ITEM_START, payload: id};
}

export function getItemFail(err) {
	return {type: GET_ITEM_FAIL, payload: err};
}

export function getItemDone(item) {
	return {type: GET_ITEM_DONE, payload: item};
}

export function addItemStart(item) {
	return {type: ADD_ITEM_START, payload: item};
}

export function addItemFail(err) {
	return {type: ADD_ITEM_FAIL, payload: err};
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

export function editItemFail(err) {
	return {type: EDIT_ITEM_FAIL, payload: err};
}

export function editItemDone(item) {
	return {type: EDIT_ITEM_DONE, payload: item};
}

export function removeItemStart(item) {
	return {type: REMOVE_ITEM_START, payload: item};
}

export function removeItemFail(err) {
	return {type: REMOVE_ITEM_FAIL, payload: err};
}

export function removeItemDone(item) {
	return {type: REMOVE_ITEM_DONE, payload: item};
}

export function restoreItemStart(item) {
	return {type: RESTORE_ITEM_START, payload: item};
}

export function restoreItemFail(err) {
	return {type: RESTORE_ITEM_FAIL, payload: err};
}

export function restoreItemDone(item) {
	return {type: RESTORE_ITEM_DONE, payload: item};
}

