///
// Action types
///

export const RETRIEVE_USERS_START = 'USERS_RETRIEVE_START';
export const RETRIEVE_USERS_FULFILLED = 'USERS_RETRIEVE_FULFILLED';


///
// Action creators
///

export function retrieveUsers() {
	return {type: RETRIEVE_USERS_START};
}

