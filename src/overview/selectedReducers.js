///
// Dependencies
///

import { fromJS } from 'immutable';

import * as actions from './actions';


///
// Reducers
///

function root(state = fromJS({selected: ''}), action) {
	const handlers = {
		[actions.OVERVIEW_SELECT_ITEM]: selectOverviewItem,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function selectOverviewItem(state, action) {
	// Selecting the selected panel deselects all panels
	if(state.get('selected') === action.payload) {
		return state.set('selected', '');
	}

	return state.set('selected', action.payload);
}

