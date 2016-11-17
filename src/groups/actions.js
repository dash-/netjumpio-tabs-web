///
// Action types
///

export const FETCH_GROUPS_START = 'GROUPS_FETCH_START';
export const FETCH_GROUPS_FULFILLED = 'GROUPS_FETCH_FULFILLED';


///
// Action creators
///

export function retrieveGroups() {
	return {type: FETCH_GROUPS_START};
}

