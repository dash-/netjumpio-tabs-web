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
		[actions.GET_ITEM_FULFILLED]: getItemFulfilled,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getItemFulfilled(state, action) {
	return Immutable.fromJS(action.payload.data);
}

