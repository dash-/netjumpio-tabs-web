///
// Action types
///

export const SELECT_OVERVIEW_ITEM = 'SELECT_OVERVIEW_ITEM ';
export const TOGGLE_OVERVIEW_ITEM = 'TOGGLE_OVERVIEW_ITEM ';


///
// Action creators
///

export function selectItem(item) {
	return {type: SELECT_OVERVIEW_ITEM, payload: item};
}

export function toggleItem(item) {
	return {type: TOGGLE_OVERVIEW_ITEM, payload: item};
}

