///
// Action types
///

export const RETRIEVE_ORGS_START = 'ORGS_RETRIEVE_START';
export const RETRIEVE_ORGS_FULFILLED = 'ORGS_RETRIEVE_FULFILLED';


///
// Action creators
///

export function retrieveOrgs() {
	return {type: RETRIEVE_ORGS_START};
}

