///
// Dependencies
///

import Immutable from 'immutable';
import isUndefined from 'lodash/isUndefined';

import * as rolesActions from './actions';
import * as groupsActions from '../groups/actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[rolesActions.GET_LIST_FULFILLED]: getRolesListFulfilled,
		[groupsActions.GET_LIST_FULFILLED]: getGroupsListFulfilled,
		[rolesActions.UPDATE_LIST]: updateList,
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

function updateList(state, action) {
	const role = Immutable.fromJS(action.payload);
	const existingKey = state.get('roles').findKey(item => (
		item.get('id') === role.get('id')
	));

	if(! isUndefined(existingKey)) {
		return state.setIn(['roles', existingKey], role);
	}

	return state.set('roles', state.get('roles').push(role));
}

