///
// Dependencies
///

import Immutable from 'immutable';
import filter from 'lodash/filter';

import * as tabsetsActions from './actions';
import * as groupsActions from '../groups/actions';
import * as rolesActions from '../roles/actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[tabsetsActions.GET_LIST_FULFILLED]: getTabsetsListFulfilled,
		[groupsActions.GET_LIST_FULFILLED]: getGroupsListFulfilled,
		[rolesActions.GET_LIST_FULFILLED]: getRolesListFulfilled,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getTabsetsListFulfilled(state, action) {
	return state.set('tabsets', Immutable.fromJS(action.payload));
}

function getRolesListFulfilled(state, action) {
	const rolesWithTabsets = filter(action.payload, item => (
		! item.ownerGroupId && item.tabsets && item.tabsets.length > 0
	));

	return state.set('roles', Immutable.fromJS(rolesWithTabsets));
}

function getGroupsListFulfilled(state, action) {
	// Filter down to just groups with tabsets or roles with tabsets
	return state.set('groups', Immutable.fromJS(action.payload).reduce(
		groupReducer, Immutable.fromJS([])
	));
}


///
// Helpers
///

function groupReducer(memo, group) {
	if(group.get('roles') && group.get('roles').count()) {
		group = group.set('roles', group.get('roles').filter(role => (
			role.get('tabsets') && role.get('tabsets').count() > 0
		)));
	}

	const hasTabsets = group.get('tabsets') && group.get('tabsets').count() > 0;
	const hasRoles = group.get('roles') && group.get('roles').count() > 0;

	if(! hasTabsets) {
		group = group.delete('tabsets');
	}

	if(! hasRoles) {
		group = group.delete('roles');
	}

	if(hasTabsets || hasRoles) {
		return memo.push(group);
	}

	return memo;
}

