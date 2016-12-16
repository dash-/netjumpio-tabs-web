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
		[actions.PROFILE_PANEL_TOGGLE]: togglePanel,
		[actions.PROFILE_PANEL_DISMISS]: dismissPanel,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function togglePanel(state, action) {
	return state.set('showPanel', ! state.get('showPanel'));
}

function dismissPanel(state, action) {
	return state.set('showPanel', false);
}

