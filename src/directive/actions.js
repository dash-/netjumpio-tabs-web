
///
// Action types
///

export const FETCH_DIRECTIVES = 'FETCH_DIRECTIVES';


///
// Auto-action types (redux-promise-middleware)
///

export const FETCH_DIRECTIVES_PENDING = 'FETCH_DIRECTIVES_PENDING';
export const FETCH_DIRECTIVES_REJECTED = 'FETCH_DIRECTIVES_REJECTED';
export const FETCH_DIRECTIVES_FULFILLED = 'FETCH_DIRECTIVES_FULFILLED';


///
// Action creators
///

export default function fetchTabsets() {
	return {type: FETCH_DIRECTIVES};
}

