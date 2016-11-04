
///
// Action types
///

export const FETCH_APPS = 'FETCH_APPS';


///
// Auto-action types (redux-promise-middleware)
///

export const FETCH_APPS_PENDING = 'FETCH_APPS_PENDING';
export const FETCH_APPS_REJECTED = 'FETCH_APPS_REJECTED';
export const FETCH_APPS_FULFILLED = 'FETCH_APPS_FULFILLED';


///
// Action creators
///

export function fetchApps() {
	return {type: FETCH_APPS};
}

