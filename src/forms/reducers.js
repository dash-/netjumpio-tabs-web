///
// Dependencies
///

import Immutable from 'immutable';
import _ from 'lodash';

import * as actions from './actions';


///
// Reducers
///

function root(state, action) {
	if(_.isUndefined(state)) {
		state = init();
	}

	const handlers = {
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

function init() {
	const defaultItem = {
		isVisible: false,
		values: {},
	};

	return Immutable.fromJS({
		groups: _.assign({}, defaultItem),
		people: _.assign({}, defaultItem),
		roles: _.assign({}, defaultItem),
		tabsets: _.assign({}, defaultItem),
	});
}

function showForm(state, action) {
	return setVisibility(state, action.payload, true);
}

function hideForm(state, action) {
	return setVisibility(state, action.payload, false);
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

