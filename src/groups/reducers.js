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
		[actions.GET_GROUPS_LIST_FULFILLED]: getGroupsListFulfilled,
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
	return Immutable.fromJS([]);
}

function getGroupsListFulfilled(state, action) {
	return Immutable.fromJS(action.payload.data);
}

