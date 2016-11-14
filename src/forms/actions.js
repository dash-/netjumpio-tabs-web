///
// Action types
///

export const FORM_SHOW = 'FORM_SHOW ';
export const FORM_HIDE = 'FORM_HIDE ';


///
// Action creators
///

export function showForm(name) {
	return {type: FORM_SHOW, payload: name};
}

export function hideForm(name) {
	return {type: FORM_HIDE, payload: name};
}


