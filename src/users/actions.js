///
// Action types
///

export const GET_USERS_LIST_START = 'GET_USERS_LIST_START';
export const GET_USERS_LIST_REJECTED = 'GET_USERS_LIST_REJECTED';
export const GET_USERS_LIST_FULFILLED = 'GET_USERS_LIST_FULFILLED';


///
// Action creators
///

export function getUsersList() {
	return {type: GET_USERS_LIST_START};
}

