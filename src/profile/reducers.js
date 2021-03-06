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
		[actions.SHOW_PANEL]: showPanel,
		[actions.DISMISS_PANEL]: dismissPanel,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function showPanel(state, action) {
	return state.set('showPanel', true);
}

function dismissPanel(state, action) {
	return state.set('showPanel', false);
}

