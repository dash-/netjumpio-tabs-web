///
// Action types
///

export const FORM_SHOW = 'FORMS:FORM_SHOW';
export const FORM_HIDE = 'FORMS:FORM_HIDE';
export const FORM_SUBMIT_START = 'FORMS:FORM_SUBMIT_START';
export const FORM_SUBMIT_REJECTED = 'FORMS:FORM_SUBMIT_REJECTED';
export const FORM_SUBMIT_FULFILLED = 'FORMS:FORM_SUBMIT_FULFILLED';
export const FORM_INIT = 'FORMS:FORM_INIT';
export const FORM_FIELD_CHANGED = 'FORMS:FORM_FIELD_CHANGED';


///
// Action creators
///

export function showForm(name) {
	return {type: FORM_SHOW, payload: name};
}

export function hideForm(name) {
	return {type: FORM_HIDE, payload: name};
}

export function submitForm(name) {
	return {type: FORM_SUBMIT_START, payload: name};
}

export function delegateFormSubmit(delegate, payload) {
	return {
		type: [FORM_SUBMIT_START, delegate].join(':'),
		payload: payload
	};
}

export function initForm(name) {
	return {type: FORM_INIT, payload: name};
}

export function fieldChanged(formName, fieldName, value) {
	return {type: FORM_FIELD_CHANGED, payload: {
		form: formName,
		field: fieldName,
		value: value,
	}};
}

export function formSubmitFulfilled(formName) {
	return {
		type: FORM_SUBMIT_FULFILLED,
		payload: formName,
	};
}

