///
// Dependencies
///

import Immutable from 'immutable';
import _ from 'lodash';

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
		.setIn([action.payload, 'values'], Immutable.fromJS({}));
}

function fieldChanged(state, action) {
	const form = action.payload.form;
	const field = action.payload.field;
	const value = action.payload.value;

	return state.setIn([form, 'values', field], value);
}


///
// Helpers
///

function setVisibility(state, item, isVisible) {
	return state.setIn([item, 'isVisible'], isVisible);
}

