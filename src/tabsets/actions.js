///
// Action types
///

export const FETCH_TABSETS_START = 'FETCH_TABSETS_START';
export const FETCH_TABSETS_REJECTED = 'FETCH_TABSETS_REJECTED';
export const FETCH_TABSETS_FULFILLED = 'FETCH_TABSETS_FULFILLED';

export const FETCH_TABSET_START = 'FETCH_TABSET_START';
export const FETCH_TABSET_REJECTED = 'FETCH_TABSET_REJECTED';
export const FETCH_TABSET_FULFILLED = 'FETCH_TABSET_FULFILLED';


///
// Action creators
///

export function retrieveTabsets() {
	return {type: FETCH_TABSETS_START};
}

export function retrieveTabset(id) {
	return {type: FETCH_TABSET_START, payload: id};
}
