///
// Action types
///

export const FETCH_DIRS_START = 'DIRS_FETCH_START';
export const FETCH_DIRS_FULFILLED = 'DIRS_FETCH_FULFILLED';


///
// Action creators
///

export function retrieveDirs() {
	return {type: FETCH_DIRS_START};
}

