///
// Dependencies
///

import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import _ from 'lodash';

import * as actions from './actions';
import panels from './panelsReducers';


///
// Reducers
///

function root(state, action) {
	if(_.isUndefined(state)) {
		state = init();
	}

	const handlers = {
		[actions.SELECT_OVERVIEW_ITEM]: selectOverviewItem,
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

function init() {
	return Immutable.fromJS({
		selected: 'x-orgsPanel',
	});
}

function selectOverviewItem(state, action) {
	return state.set('selected', action.payload);
}

