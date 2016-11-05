
///
// Action types
///

export const FETCH_TABSETS = 'FETCH_TABSETS';


///
// Auto-action types (redux-promise-middleware)
///

export const FETCH_TABSETS_PENDING = 'FETCH_TABSETS_PENDING';
export const FETCH_TABSETS_REJECTED = 'FETCH_TABSETS_REJECTED';
export const FETCH_TABSETS_FULFILLED = 'FETCH_TABSETS_FULFILLED';


///
// Action creators
///

export default function fetchTabsets() {
	return {type: FETCH_TABSETS};
}

