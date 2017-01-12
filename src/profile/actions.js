///
// Action types
///

export const TOGGLE_PANEL = 'PROFILE:TOGGLE_PANEL';
export const SHOW_PANEL = 'PROFILE:SHOW_PANEL';
export const DISMISS_PANEL = 'PROFILE:DISMISS_PANEL';


///
// Action creators
///

export function togglePanel() {
	return {type: TOGGLE_PANEL};
}

export function showPanel() {
	return {type: SHOW_PANEL};
}

export function dismissPanel() {
	return {type: DISMISS_PANEL};
}

