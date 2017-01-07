///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const SUBMIT_URL_FORM = formsActions.SUBMIT_FORM_START + ':tabsUrl';
export const SUBMIT_TABS_FORM = formsActions.SUBMIT_FORM_START + ':tabs';

export const GET_WEBPAGE_INFO_START = 'TABS:GET_WEBPAGE_INFO_START';
export const GET_WEBPAGE_INFO_FAIL = 'TABS:GET_WEBPAGE_INFO_FAIL';

export const ADD_ITEM_START = 'TABS:ADD_ITEM_START';
export const ADD_ITEM_FAIL = 'TABS:ADD_ITEM_FAIL';
export const ADD_ITEM_DONE = 'TABS:ADD_ITEM_DONE';

export const EDIT_ITEM_PROMPT = 'TABS:EDIT_ITEM_PROMPT';
export const EDIT_ITEM_START = 'TABS:EDIT_ITEM_START';
export const EDIT_ITEM_FAIL = 'TABS:EDIT_ITEM_FAIL';
export const EDIT_ITEM_DONE = 'TABS:EDIT_ITEM_DONE';

export const REMOVE_ITEM_START = 'TABS:REMOVE_ITEM_START';
export const REMOVE_ITEM_FAIL = 'TABS:REMOVE_ITEM_FAIL';
export const REMOVE_ITEM_DONE = 'TABS:REMOVE_ITEM_DONE';

export const RESTORE_ITEM_START = 'TABS:RESTORE_ITEM_START';
export const RESTORE_ITEM_FAIL = 'TABS:RESTORE_ITEM_FAIL';
export const RESTORE_ITEM_DONE = 'TABS:RESTORE_ITEM_DONE';


///
// Action creators
///

export function getWebpageInfoStart(url) {
	return {type: GET_WEBPAGE_INFO_START, payload: url};
}

export function getWebpageInfoFail(error, action) {
	return {type: GET_WEBPAGE_INFO_FAIL, payload: {
		error, action
	}};
}

export function addItemStart(tabsetId, tab) {
	return {type: ADD_ITEM_START, payload: tab, aux: {tabsetId}};
}

export function addItemFail(error, action) {
	return {type: ADD_ITEM_FAIL, payload: {
		error, action
	}};
}

export function addItemDone(tab) {
	return {type: ADD_ITEM_DONE, payload: tab};
}

export function editItemPrompt(tab) {
	return {type: EDIT_ITEM_PROMPT, payload: tab};
}

export function editItemStart(tab) {
	return {type: EDIT_ITEM_START, payload: tab};
}

export function editItemFail(error, action) {
	return {type: EDIT_ITEM_FAIL, payload: {
		error, action
	}};
}

export function editItemDone(tab) {
	return {type: EDIT_ITEM_DONE, payload: tab};
}

export function removeItemStart(tab) {
	return {type: REMOVE_ITEM_START, payload: tab};
}

export function removeItemFail(error, action) {
	return {type: REMOVE_ITEM_FAIL, payload: {
		error, action
	}};
}

export function removeItemDone(tab) {
	return {type: REMOVE_ITEM_DONE, payload: tab};
}

export function restoreItemStart(tab) {
	return {type: RESTORE_ITEM_START, payload: tab};
}

export function restoreItemFail(error, action) {
	return {type: RESTORE_ITEM_FAIL, payload: {
		error, action
	}};
}

export function restoreItemDone(tab) {
	return {type: RESTORE_ITEM_DONE, payload: tab};
}

