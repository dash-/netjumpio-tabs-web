///
// Action types
///

export const GET_LIST_START = 'USERS:GET_LIST_START';
export const GET_LIST_REJECTED = 'USERS:GET_LIST_REJECTED';
export const GET_LIST_FULFILLED = 'USERS:GET_LIST_FULFILLED';


///
// Action creators
///

export function getList() {
	return {type: GET_LIST_START};
}

