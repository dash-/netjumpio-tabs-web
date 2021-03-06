///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const SUBMIT_FORM = formsActions.SUBMIT_FORM_START + ':people';

export const GET_LIST_START = 'PEOPLE:GET_LIST_START';
export const GET_LIST_FAIL = 'PEOPLE:GET_LIST_FAIL';
export const GET_LIST_DONE = 'PEOPLE:GET_LIST_DONE';

export const GET_ITEM_START = 'PEOPLE:GET_ITEM_START';
export const GET_ITEM_FAIL = 'PEOPLE:GET_ITEM_FAIL';
export const GET_ITEM_DONE = 'PEOPLE:GET_ITEM_DONE';

export const ADD_ITEM_START = 'PEOPLE:ADD_ITEM_START';
export const ADD_ITEM_FAIL = 'PEOPLE:ADD_ITEM_FAIL';
export const ADD_ITEM_DONE = 'PEOPLE:ADD_ITEM_DONE';

export const EDIT_ITEM_PROMPT = 'PEOPLE:EDIT_ITEM_PROMPT';
export const EDIT_ITEM_START = 'PEOPLE:EDIT_ITEM_START';
export const EDIT_ITEM_FAIL = 'PEOPLE:EDIT_ITEM_FAIL';
export const EDIT_ITEM_DONE = 'PEOPLE:EDIT_ITEM_DONE';

export const REMOVE_ITEM_START = 'PEOPLE:REMOVE_ITEM_START';
export const REMOVE_ITEM_FAIL = 'PEOPLE:REMOVE_ITEM_FAIL';
export const REMOVE_ITEM_DONE = 'PEOPLE:REMOVE_ITEM_DONE';

export const RESTORE_ITEM_START = 'PEOPLE:RESTORE_ITEM_START';
export const RESTORE_ITEM_FAIL = 'PEOPLE:RESTORE_ITEM_FAIL';
export const RESTORE_ITEM_DONE = 'PEOPLE:RESTORE_ITEM_DONE';


///
// Action creators
///

export function submitForm(formData) {
	return {type: SUBMIT_FORM, payload: formData};
}

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

