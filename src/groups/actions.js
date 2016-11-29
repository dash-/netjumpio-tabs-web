///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'GROUPS:GET_LIST_START';
export const GET_LIST_REJECTED = 'GROUPS:GET_LIST_REJECTED';
export const GET_LIST_FULFILLED = 'GROUPS:GET_LIST_FULFILLED';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':groups';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

