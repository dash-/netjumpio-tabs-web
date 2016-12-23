///
// Dependencies
///

import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import isUndefined from 'lodash/isUndefined';

import * as actions from './actions';
import panels from './panelsReducers';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	if(isUndefined(state.get('selected'))) {
		state = state.set('selected', '');
	}

	const handlers = {
		[actions.OVERVIEW_SELECT_ITEM]: selectOverviewItem,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default combineReducers({
	root,
	panels,
});


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

