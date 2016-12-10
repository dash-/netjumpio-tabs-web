///
// Dependencies
///

import Immutable from 'immutable';
import isUndefined from 'lodash/isUndefined';

import * as actions from './actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[actions.FORM_INIT]: initForm,
		[actions.FORM_CLEAR]: clearForm,
		[actions.FORM_SHOW]: showForm,
		[actions.FORM_HIDE]: hideForm,
		[actions.FORM_FIELD_CHANGED]: fieldChanged,
		[actions.FORM_AUX_FIELD_CHANGED]: auxFieldChanged,
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
	values: {},
	aux: {},
};

function initForm(state, action) {
	const formName = action.payload;

	if(! state.get(formName)) {
		state = state.set(formName, Immutable.fromJS(defaultItem));
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

function clearForm(state, action) {
	const formName = action.payload;

	if(! state.getIn([formName, 'allowClear'])) {
		return state;
	}

	return (state
		.setIn([action.payload, 'values'], Immutable.fromJS({}))
		.setIn([action.payload, 'aux'], Immutable.fromJS({}))
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


///
// Helpers
///

function setVisibility(state, item, isVisible) {
	return state.setIn([item, 'isVisible'], isVisible);
}

