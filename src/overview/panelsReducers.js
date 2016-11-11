///
// Dependencies
///

import Immutable from 'immutable';
import _ from 'lodash';
import * as actions from './actions';


///
// Reducers
///

export default function panels(state, action) {
	if(_.isUndefined(state)) {
		state = init();
	}

	const handlers = {
		[actions.TOGGLE_OVERVIEW_ITEM]: toggleOverviewItem,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}


///
// Delegates
///

function init() {
	return Immutable.fromJS({
		orgsPanel: {
			isExpanded: false,
		},
	});
}

function toggleOverviewItem(state, action) {
	const keyPath = [action.payload, 'isExpanded'];
	const isExpanded = state.getIn(keyPath);
	return state.setIn(keyPath, ! isExpanded);
}

