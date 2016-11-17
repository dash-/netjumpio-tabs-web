///
// Action types
///

export const GET_ROLES_LIST_START = 'GET_ROLES_LIST_START';
export const GET_ROLES_LIST_REJECTED = 'GET_ROLES_LIST_REJECTED';
export const GET_ROLES_LIST_FULFILLED = 'GET_ROLES_LIST_FULFILLED';


///
// Action creators
///

export function getRolesList() {
	return {type: GET_ROLES_LIST_START};
}

