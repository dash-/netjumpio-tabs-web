///
// Action types
///

export const TOGGLE_PROFILE_PANEL = 'USER:TOGGLE_PROFILE_PANEL';
export const DISMISS_PROFILE_PANEL = 'USER:DISMISS_PROFILE_PANEL';


///
// Action creators
///

export function toggleProfilePanel() {
	return {type: TOGGLE_PROFILE_PANEL};
}

export function dismiss() {
	return {type: DISMISS_PROFILE_PANEL};
}
