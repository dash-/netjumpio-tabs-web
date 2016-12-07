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
		[actions.GET_ITEM_DONE]: getItemDone,
		[actions.ADD_TAB_DONE]: addTabDone,
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
	return Immutable.fromJS(action.payload);
}

function addTabDone(state, action) {
	const tabs = state.get('tabs').push(
		Immutable.fromJS(action.payload)
	);
	return state.set('tabs', tabs);
}
