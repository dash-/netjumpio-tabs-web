///
// Action types
///

export const INIT_FORM = 'FORMS:INIT_FORM';
export const INIT_FORM_DATA = 'FORMS:INIT_FORM_DATA';
export const CLEAR_FORM = 'FORMS:CLEAR_FORM';
export const CLEAR_FORM_VALUES = 'FORMS:CLEAR_FORM_VALUES';
export const SHOW_FORM = 'FORMS:SHOW_FORM';
export const HIDE_FORM = 'FORMS:HIDE_FORM';
export const SUBMIT_FORM_START = 'FORMS:SUBMIT_FORM_START';
export const SUBMIT_FORM_FAIL = 'FORMS:SUBMIT_FORM_FAIL';
export const SUBMIT_FORM_DONE = 'FORMS:SUBMIT_FORM_DONE';
export const FIELD_CHANGED = 'FORMS:FIELD_CHANGED';
export const AUX_FIELD_CHANGED = 'FORMS:AUX_FIELD_CHANGED';
export const UPLOAD_IMAGE_START = 'FORMS:UPLOAD_IMAGE_START';
export const UPLOAD_IMAGE_FAIL = 'FORMS:UPLOAD_IMAGE_FAIL';
export const UPLOAD_IMAGE_DONE = 'FORMS:UPLOAD_IMAGE_DONE';


///
// Action creators
///

export function initForm(name, options={}) {
	return {type: INIT_FORM, payload: name, options: options};
}

export function initFormData(name, data) {
	return {type: INIT_FORM_DATA, payload: name, data: data};
}

export function clearForm(name) {
	return {type: CLEAR_FORM, payload: name};
}

export function clearFormValues(name) {
	return {type: CLEAR_FORM_VALUES, payload: name};
}

export function showForm(name) {
	return {type: SHOW_FORM, payload: name};
}

export function hideForm(name) {
	return {type: HIDE_FORM, payload: name};
}

export function submitForm(name) {
	return {type: SUBMIT_FORM_START, payload: name};
}

export function delegateSubmitForm(delegate, payload, aux) {
	return {
		type: [SUBMIT_FORM_START, delegate].join(':'),
		payload,
		aux,
	};
}

export function fieldChanged(formName, fieldName, value) {
	return {type: FIELD_CHANGED, payload: {
		form: formName,
		field: fieldName,
		value: value,
	}};
}

export function auxFieldChanged(formName, fieldName, value) {
	return {type: AUX_FIELD_CHANGED, payload: {
		form: formName,
		field: fieldName,
		value: value,
	}};
}

export function submitFormDone(formName, resData) {
	return {
		type: SUBMIT_FORM_DONE,
		payload: {
			formName,
			resData,
		}
	};
}

export function uploadImageStart(formName, fieldName, image) {
	return {type: UPLOAD_IMAGE_START, payload: {
		form: formName,
		field: fieldName,
		image,
	}};
}

export function uploadImageFail(error, action) {
	return {type: UPLOAD_IMAGE_FAIL, payload: {
		error, action
	}};
}

export function uploadImageDone(formName, fieldName, imageUrl) {
	return {type: UPLOAD_IMAGE_DONE, payload: {
		form: formName,
		field: fieldName,
		imageUrl
	}};
}

