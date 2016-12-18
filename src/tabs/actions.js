///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const URL_FORM_SUBMIT = formsActions.FORM_SUBMIT_START + ':tabsUrl';

export const GET_WEBPAGE_INFO_START = 'TABSETS:GET_WEBPAGE_INFO_START';
export const GET_WEBPAGE_INFO_FAIL = 'TABSETS:GET_WEBPAGE_INFO_FAIL';

// TODO - These will be refactored (feat/cr14 - Rework add tab flow)
export const ADD_TAB_START = 'TABSETS:ADD_TAB_START';
export const ADD_TAB_DONE = 'TABSETS:ADD_TAB_DONE';

// TODO - These will be refactored (feat/cr13 - Ability to edit tabs)
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

export function getWebpageInfoStart(url) {
	return {type: GET_WEBPAGE_INFO_START, payload: url};
}

export function getWebpageInfoFail(err) {
	return {type: GET_WEBPAGE_INFO_FAIL, payload: err};
}

export function addTab(tabsetId, tab) {
	return {type: ADD_TAB_START, payload: {tabsetId, tab}};
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

