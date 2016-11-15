///
// Action types
///

export const RETRIEVE_ROLES_START = 'ROLES_RETRIEVE_START';
export const RETRIEVE_ROLES_FULFILLED = 'ROLES_RETRIEVE_FULFILLED';


///
// Action creators
///

export function retrieveRoles() {
	return {type: RETRIEVE_ROLES_START};
}

