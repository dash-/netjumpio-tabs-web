///
// Action types
///

export const GET_GROUPS_LIST_START = 'GET_GROUPS_LIST_START';
export const GET_GROUPS_LIST_REJECTED = 'GET_GROUPS_LIST_REJECTED';
export const GET_GROUPS_LIST_FULFILLED = 'GET_GROUPS_LIST_FULFILLED';


///
// Action creators
///

export function getGroupsList() {
	return {type: GET_GROUPS_LIST_START};
}

