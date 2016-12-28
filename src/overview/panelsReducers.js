///
// Dependencies
///

import { fromJS } from 'immutable';
import isUndefined from 'lodash/isUndefined';
import * as actions from './actions';


///
// Reducers
///

export default function panels(state, action) {
	if(isUndefined(state)) {
		state = init();
	}

	const handlers = {
		[actions.OVERVIEW_TOGGLE_ITEM]: toggleOverviewItem,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}


///
// Delegates
///

function init() {
	return fromJS({
		groups: {
			isExpanded: false,
		},
		people: {
			isExpanded: false,
		},
		roles: {
			isExpanded: false,
		},
		tabsets: {
			isExpanded: false,
		},
	});
}

function toggleOverviewItem(state, action) {
	const keyPath = [action.payload, 'isExpanded'];
	const isExpanded = state.getIn(keyPath);
	return state.setIn(keyPath, ! isExpanded);
}

