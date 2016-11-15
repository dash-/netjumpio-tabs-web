///
// Dependencies
///

import Immutable from 'immutable';
import _ from 'lodash';

///
// Reducers
///

function root(state, action) {
	if(_.isUndefined(state)) {
		state = init();
	}

	return state;
}

export default root;


///
// Delegates
///

function init() {
	return Immutable.fromJS([]);
}

