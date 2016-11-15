///
// Action types
///

export const FETCH_ORGS_START = 'ORGS_FETCH_START';
export const FETCH_ORGS_FULFILLED = 'ORGS_FETCH_FULFILLED';


///
// Action creators
///

export function retrieveOrgs() {
	return {type: FETCH_ORGS_START};
}

