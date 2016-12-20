///
// Action types
///

export const FORM_INIT = 'FORMS:FORM_INIT';
export const FORM_INIT_DATA = 'FORMS:FORM_INIT_DATA';
export const FORM_CLEAR = 'FORMS:FORM_CLEAR';
export const FORM_CLEAR_VALUES = 'FORMS:FORM_CLEAR_VALUES';
export const FORM_SHOW = 'FORMS:FORM_SHOW';
export const FORM_HIDE = 'FORMS:FORM_HIDE';
export const FORM_SUBMIT_START = 'FORMS:FORM_SUBMIT_START';
export const FORM_SUBMIT_FAIL = 'FORMS:FORM_SUBMIT_FAIL';
export const FORM_SUBMIT_DONE = 'FORMS:FORM_SUBMIT_DONE';
export const FORM_FIELD_CHANGED = 'FORMS:FORM_FIELD_CHANGED';
export const FORM_AUX_FIELD_CHANGED = 'FORMS:FORM_AUX_FIELD_CHANGED';
export const FORM_IMAGE_SELECT_START = 'FORMS:FORM_IMAGE_SELECT_START';
export const FORM_IMAGE_SELECT_CANCEL = 'FORMS:FORM_IMAGE_SELECT_CANCEL';
export const FORM_IMAGE_SELECT_DONE = 'FORMS:FORM_IMAGE_SELECT_DONE';


///
// Action creators
///

export function initForm(name, options={}) {
	return {type: FORM_INIT, payload: name, options: options};
}

export function initFormData(name, data) {
	return {type: FORM_INIT_DATA, payload: name, data: data};
}

export function clearForm(name) {
	return {type: FORM_CLEAR, payload: name};
}

export function clearFormValues(name) {
	return {type: FORM_CLEAR_VALUES, payload: name};
}

export function showForm(name) {
	return {type: FORM_SHOW, payload: name};
}

export function hideForm(name) {
	return {type: FORM_HIDE, payload: name};
}

export function submitForm(name) {
	return {type: FORM_SUBMIT_START, payload: name};
}

export function delegateFormSubmit(delegate, payload, aux) {
	return {
		type: [FORM_SUBMIT_START, delegate].join(':'),
		payload,
		aux,
	};
}

export function fieldChanged(formName, fieldName, value) {
	return {type: FORM_FIELD_CHANGED, payload: {
		form: formName,
		field: fieldName,
		value: value,
	}};
}

export function auxFieldChanged(formName, fieldName, value) {
	return {type: FORM_AUX_FIELD_CHANGED, payload: {
		form: formName,
		field: fieldName,
		value: value,
	}};
}

export function formSubmitDone(formName, resData) {
	return {
		type: FORM_SUBMIT_DONE,
		payload: {
			formName,
			resData,
		}
	};
}

export function selectImageStart(formName, fieldName) {
	return {type: FORM_IMAGE_SELECT_START, payload: {
		form: formName,
		field: fieldName,
	}};
}

export function selectImageCancel(formName, fieldName) {
	return {type: FORM_IMAGE_SELECT_CANCEL, payload: {
		form: formName,
		field: fieldName,
	}};
}

export function selectImageDone(formName, fieldName, image) {
	return {type: FORM_IMAGE_SELECT_DONE, payload: {
		form: formName,
		field: fieldName,
		image
	}};
}

