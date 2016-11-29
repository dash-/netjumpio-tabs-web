///
// Dependencies
///

import * as formsActions from '../forms/actions';


///
// Action types
///

export const GET_LIST_START = 'ROLES:GET_LIST_START';
export const GET_LIST_REJECTED = 'ROLES:GET_LIST_REJECTED';
export const GET_LIST_FULFILLED = 'ROLES:GET_LIST_FULFILLED';

export const SUBMIT_FORM = formsActions.FORM_SUBMIT_START + ':roles';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

