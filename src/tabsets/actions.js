///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_TABSETS_LIST_START = 'GET_TABSETS_LIST_START';
export const GET_TABSETS_LIST_REJECTED = 'GET_TABSETS_LIST_REJECTED';
export const GET_TABSETS_LIST_FULFILLED = 'GET_TABSETS_LIST_FULFILLED';

export const GET_TABSETS_ITEM_START = 'GET_TABSETS_ITEM_START';
export const GET_TABSETS_ITEM_REJECTED = 'GET_TABSETS_ITEM_REJECTED';
export const GET_TABSETS_ITEM_FULFILLED = 'GET_TABSETS_ITEM_FULFILLED';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':tabsets';


///
// Action creators
///

export function getTabsetsList() {
	return {type: GET_TABSETS_LIST_START};
}

export function getTabsetsItem(id) {
	return {type: GET_TABSETS_ITEM_START, payload: id};
}

