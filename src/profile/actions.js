///
// Action types
///

export const PROFILE_PANEL_TOGGLE = 'PROFILE:PROFILE_PANEL_TOGGLE';
export const PROFILE_PANEL_SHOW = 'PROFILE:PROFILE_PANEL_SHOW';
export const PROFILE_PANEL_DISMISS = 'PROFILE:PROFILE_PANEL_DISMISS';


///
// Action creators
///

export function toggleProfilePanel() {
	return {type: PROFILE_PANEL_TOGGLE};
}

export function showProfilePanel() {
	return {type: PROFILE_PANEL_SHOW};
}

export function dismissProfilePanel() {
	return {type: PROFILE_PANEL_DISMISS};
}

