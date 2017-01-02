///
// Dependencies
///

import { fromJS } from 'immutable';

import * as actions from './actions';


///
// Reducers
///

function root(state = fromJS({}), action) {
	const handlers = {
		[actions.GET_ITEM_DONE]: getItemDone,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getItemDone(state, action) {
	return state;
}
