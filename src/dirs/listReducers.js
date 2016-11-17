///
// Dependencies
///

import Immutable from 'immutable';
import _ from 'lodash';

import * as actions from './actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[actions.FETCH_DIRS_FULFILLED]: retrieveDirsFulfilled,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function retrieveDirsFulfilled(state, action) {
	return Immutable.fromJS(action.payload.data);
}

