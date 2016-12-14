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

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':tabsets';

export const ADD_TAB = formsActions.FORM_SUBMIT_START + ':tabsetsTabs';
export const ADD_TAB_DONE = 'TABSETS:ADD_TAB_DONE';

export const EDIT_TAB_PROMPT = 'TABSETS:EDIT_TAB_PROMPT';
export const EDIT_TAB_START = 'TABSETS:EDIT_TAB_START';
export const EDIT_TAB_FAIL = 'TABSETS:EDIT_TAB_FAIL';
export const EDIT_TAB_DONE = 'TABSETS:EDIT_TAB_DONE';

export const REMOVE_TAB_START = 'TABSETS:REMOVE_TAB_START';
export const REMOVE_TAB_FAIL = 'TABSETS:REMOVE_TAB_FAIL';
export const REMOVE_TAB_DONE = 'TABSETS:REMOVE_TAB_DONE';

export const RESTORE_TAB_START = 'TABSETS:RESTORE_TAB_START';
export const RESTORE_TAB_FAIL = 'TABSETS:RESTORE_TAB_FAIL';
export const RESTORE_TAB_DONE = 'TABSETS:RESTORE_TAB_DONE';


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

export function addTab(tabsetId, tab) {
	return {type: ADD_TAB, payload: {tabsetId, tab}};
}

export function addTabDone(tab) {
	return {type: ADD_TAB_DONE, payload: tab};
}

export function editTabPrompt(tab) {
	return {type: EDIT_TAB_PROMPT, payload: tab};
}

export function editTabStart(tab) {
	return {type: EDIT_TAB_START, payload: tab};
}

export function editTabFail(err) {
	return {type: EDIT_TAB_FAIL, payload: err};
}

export function editTabDone(tab) {
	return {type: EDIT_TAB_DONE, payload: tab};
}

export function removeTabStart(tab) {
	return {type: REMOVE_TAB_START, payload: tab};
}

export function removeTabFail(err) {
	return {type: REMOVE_TAB_FAIL, payload: err};
}

export function removeTabDone(tab) {
	return {type: REMOVE_TAB_DONE, payload: tab};
}

export function restoreTabStart(tab) {
	return {type: RESTORE_TAB_START, payload: tab};
}

export function restoreTabFail(err) {
	return {type: RESTORE_TAB_FAIL, payload: err};
}

export function restoreTabDone(tab) {
	return {type: RESTORE_TAB_DONE, payload: tab};
}

