///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'TABSETS:GET_LIST_START';
export const GET_LIST_REJECTED = 'TABSETS:GET_LIST_REJECTED';
export const GET_LIST_FULFILLED = 'TABSETS:GET_LIST_FULFILLED';

export const GET_ITEM_START = 'TABSETS:GET_ITEM_START';
export const GET_ITEM_REJECTED = 'TABSETS:GET_ITEM_REJECTED';
export const GET_ITEM_FULFILLED = 'TABSETS:GET_ITEM_FULFILLED';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':tabsets';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

export function getItem(id) {
	return {type: GET_ITEM_START, payload: id};
}

