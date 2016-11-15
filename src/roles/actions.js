///
// Action types
///

export const FETCH_ROLES_START = 'ROLES_FETCH_START';
export const FETCH_ROLES_FULFILLED = 'ROLES_FETCH_FULFILLED';


///
// Action creators
///

export function retrieveRoles() {
	return {type: FETCH_ROLES_START};
}

