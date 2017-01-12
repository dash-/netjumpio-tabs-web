///
// Action types
///

export const OVERVIEW_SELECT_ITEM = 'OVERVIEW:SELECT_ITEM ';
export const OVERVIEW_TOGGLE_ITEM = 'OVERVIEW:TOGGLE_ITEM ';


///
// Action creators
///

export function selectItem(item) {
	return {type: OVERVIEW_SELECT_ITEM, payload: item};
}

export function toggleItem(item) {
	return {type: OVERVIEW_TOGGLE_ITEM, payload: item};
}


