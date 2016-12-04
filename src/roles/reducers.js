///
// Dependencies
///

import Immutable from 'immutable';
import _ from 'lodash';

import * as rolesActions from './actions';
import * as groupsActions from '../groups/actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[rolesActions.GET_LIST_FULFILLED]: getRolesListFulfilled,
		[groupsActions.GET_LIST_FULFILLED]: getGroupsListFulfilled,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getRolesListFulfilled(state, action) {
	return state.set('roles', Immutable.fromJS(action.payload));
}

function getGroupsListFulfilled(state, action) {
	return state;
}

