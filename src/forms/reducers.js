///
// Dependencies
///

import Immutable from 'immutable';

import * as actions from './actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[actions.FORM_INIT]: initForm,
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
	values: {},
	aux: {},
};

function initForm(state, action) {
	if(state.get(action.payload)) {
		return state;
	}

	return state.set(action.payload, Immutable.fromJS(defaultItem));
}

function showForm(state, action) {
	return setVisibility(state, action.payload, true);
}

function hideForm(state, action) {
	return setVisibility(state, action.payload, false)
		.setIn([action.payload, 'values'], Immutable.fromJS({}))
		.setIn([action.payload, 'aux'], Immutable.fromJS({}));
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

