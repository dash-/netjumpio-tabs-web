///
// Dependencies
///

import { fromJS } from 'immutable';
import isUndefined from 'lodash/isUndefined';
import isObject from 'lodash/isObject';

import * as actions from './actions';


///
// Reducers
///

function root(state = fromJS({}), action) {
	const handlers = {
		[actions.FORM_INIT]: initForm,
		[actions.FORM_INIT_DATA]: initFormData,
		[actions.FORM_CLEAR]: clearForm,
		[actions.FORM_CLEAR_VALUES]: clearFormValues,
		[actions.FORM_SHOW]: showForm,
		[actions.FORM_HIDE]: hideForm,
		[actions.FORM_FIELD_CHANGED]: fieldChanged,
		[actions.FORM_AUX_FIELD_CHANGED]: auxFieldChanged,
		[actions.FORM_IMAGE_UPLOAD_START]: imageUploadStart,
		[actions.FORM_IMAGE_UPLOAD_DONE]: imageUploadDone,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

const defaultItem = {
	isVisible: false, // Only used by form modals
	allowClear: true,
	allowHide: true,
	dataHasInitialized: false,
	uploads: {},
	values: {},
	aux: {},
};

function initForm(state, action) {
	const formName = action.payload;

	if(! state.get(formName)) {
		state = state.set(formName, fromJS(defaultItem));
	}

	if(action.options) {
		const options = action.options;

		if(! isUndefined(options.allowClear)) {
			state = state.setIn(
				[formName, 'allowClear'], options.allowClear
			);
		}

		if(! isUndefined(options.allowHide)) {
			state = state.setIn(
				[formName, 'allowHide'], options.allowHide
			);
		}
	}

	return state;
}

function initFormData(state, action) {
	state = initForm(state, action);

	const formName = action.payload;
	const data = action.data;

	if(! isObject(data)) {
		return state;
	}

	if(isObject(data.values)) {
		state = state.setIn(
			[formName, 'values'],
			fromJS(data.values)
		);
	}

	if(isObject(data.aux)) {
		state = state.setIn(
			[formName, 'aux'],
			fromJS(data.aux)
		);
	}

	return state.setIn([formName, 'dataHasInitialized'], true);
}

function clearForm(state, action) {
	const formName = action.payload;

	if(! state.getIn([formName, 'allowClear'])) {
		return state;
	}

	return (state
		.setIn([action.payload, 'values'], fromJS({}))
		.setIn([action.payload, 'aux'], fromJS({}))
	);
}

function clearFormValues(state, action) {
	const formName = action.payload;

	if(! state.getIn([formName, 'allowClear'])) {
		return state;
	}

	return (state
		.setIn([action.payload, 'values'], fromJS({}))
	);
}

function showForm(state, action) {
	return setVisibility(state, action.payload, true);
}

function hideForm(state, action) {
	const formName = action.payload;

	if(! state.getIn([formName, 'allowClear'])) {
		return state;
	}

	return setVisibility(state, formName, false);
}

function fieldChanged(state, action) {
	const form = action.payload.form;
	const field = action.payload.field;
	const value = action.payload.value;

	return state.setIn([form, 'values', field], value);
}

function auxFieldChanged(state, action) {
	const form = action.payload.form;
	const field = action.payload.field;
	const value = action.payload.value;

	return state.setIn([form, 'aux', field], value);
}

function imageUploadStart(state, action) {
	const form = action.payload.form;
	const field = action.payload.field;

	return state.setIn(
		[form, 'uploads', field, 'isUploading'],
		true
	);
}

function imageUploadDone(state, action) {
	const form = action.payload.form;
	const field = action.payload.field;
	const imageUrl = action.payload.imageUrl;

	return (state
		.setIn([form, 'values', field], imageUrl)
		.deleteIn([form, 'uploads', field])
	);
}


///
// Helpers
///

function setVisibility(state, item, isVisible) {
	return state.setIn([item, 'isVisible'], isVisible);
}

