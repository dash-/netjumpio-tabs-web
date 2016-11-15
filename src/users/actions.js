///
// Action types
///

export const FETCH_USERS_START = 'USERS_FETCH_START';
export const FETCH_USERS_FULFILLED = 'USERS_FETCH_FULFILLED';


///
// Action creators
///

export function retrieveUsers() {
	return {type: FETCH_USERS_START};
}

