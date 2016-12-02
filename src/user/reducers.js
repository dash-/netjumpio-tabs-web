///
// Dependencies
///

import Immutable from 'immutable';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

