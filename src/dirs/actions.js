///
// Action types
///

export const FETCH_DIRS_START = 'FETCH_DIRS_START';
export const FETCH_DIRS_REJECTED = 'FETCH_DIRS_REJECTED';
export const FETCH_DIRS_FULFILLED = 'FETCH_DIRS_FULFILLED';

export const FETCH_DIR_START = 'FETCH_DIR_START';
export const FETCH_DIR_REJECTED = 'FETCH_DIR_REJECTED';
export const FETCH_DIR_FULFILLED = 'FETCH_DIR_FULFILLED';


///
// Action creators
///

export function retrieveDirs() {
	return {type: FETCH_DIRS_START};
}

export function retrieveDir(id) {
	return {type: FETCH_DIR_START, payload: id};
}
