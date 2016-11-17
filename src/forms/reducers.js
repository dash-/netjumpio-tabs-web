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
	};

	return Immutable.fromJS({
		groups: _.assign({}, defaultItem),
		users: _.assign({}, defaultItem),
		roles: _.assign({}, defaultItem),
		dirs: _.assign({}, defaultItem),
	});
}

function showForm(state, action) {
	return setVisibility(state, action.payload, true);
}

function hideForm(state, action) {
	return setVisibility(state, action.payload, false);
}

function setVisibility(state, item, isVisible) {
	return state.setIn([item, 'isVisible'], isVisible);
}

