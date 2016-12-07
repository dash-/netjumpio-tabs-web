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
		[actions.UPDATE_TABS_LIST]: updateTabsList,
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
	return Immutable.fromJS(action.payload);
}

function updateTabsList(state, action) {
	const tabs = state.get('tabs').push(
		Immutable.fromJS(action.payload)
	);
	return state.set('tabs', tabs);
}
