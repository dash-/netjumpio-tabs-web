///
// Dependencies
///

import Immutable from 'immutable';
import filter from 'lodash/filter';
import isUndefined from 'lodash/isUndefined';
import pick from 'lodash/pick';

import { matches, keyIn } from '../app/immutableTools';

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
		[tabsetsActions.UPDATE_LIST]: updateList,
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

function getGroupsListFulfilled(state, action) {
	// Get groups that have tabsets
	const groups = filter(action.payload, item => (
		item.tabsets && item.tabsets.length > 0
	));

	return mergeGroups(state, groups);
}

function getRolesListFulfilled(state, action) {
	// Get group-owned roles that have tabsets
	const groupRoles = filter(action.payload, item => (
		item.ownerGroupId && item.tabsets && item.tabsets.length > 0
	));

	state = mergeGroupRoles(state, groupRoles);

	// Get groupless roles that have tabsets
	const roles = filter(action.payload, item => (
		! item.ownerGroupId && item.tabsets && item.tabsets.length > 0
	));

	return state.set('roles', Immutable.fromJS(roles));
}

function updateList(state, action) {
	const tabset = Immutable.fromJS(action.payload);
	const existingKey = state.get('tabsets').findKey(item => (
		Immutable.is(item.get('id'), tabset.get('id'))
	));

	if(isUndefined(existingKey)) {
		return state.set('tabsets', state.get('tabsets').push(tabset));
	}

	return state.setIn(['tabsets', existingKey], tabset);
}


///
// Helpers
///

function mergeGroups(state, groups) {
	state = initGroups(state);
	state = deleteGroupsKeys(state, 'tabsets');

	groups.forEach(group => {
		const groupKey = getGroupKey(state, group);

		if(isUndefined(groupKey)) {
			state = createGroup(
				state, pick(group, ['id', 'name', 'tabsets'])
			);
		} else {
			state = updateGroup(state, groupKey, group);
		}
	});

	return state;
}

function mergeGroupRoles(state, roles) {
	state = initGroups(state);
	state = deleteGroupsKeys(state, 'roles');

	roles.forEach(role => {
		const group = role.group;
		let groupKey = getGroupKey(state, group);

		if(isUndefined(groupKey)) {
			state = createGroup(state, pick(group, ['id', 'name']));
			groupKey = getGroupKey(state, group);
		}

		state = initGroupRoles(state, groupKey);

		let roleKey = getGroupRoleKey(state, groupKey, role);

		if(roleKey) {
			state = updateGroupRole(state, groupKey, roleKey, role);
		} else {
			state = createGroupRole(state, groupKey, role);
		}
	});

	return state;
}

function initGroups(state) {
	if(state.get('groups')) return state;
	return state.set('groups', Immutable.fromJS([]));
}

function deleteGroupsKeys(state, ...keysToDelete) {
	return state.set('groups', state.get('groups').map(group => (
		group.filterNot(keyIn.apply({}, keysToDelete))
	)));
}

function getGroupKey(state, group) {
	return state.get('groups').findKey(matches({
		id: group.id
	}));
}

function createGroup(state, group) {
	return state.set('groups', state.get('groups').push(
		Immutable.fromJS(group)
	));
}

function updateGroup(state, groupKey, group) {
	return (state
		.setIn(['groups', groupKey, 'name'], group.name)
		.setIn(
			['groups', groupKey, 'tabsets'],
			Immutable.fromJS(group.tabsets)
		)
	);
}

function initGroupRoles(state, groupKey) {
	if(state.getIn(['groups', groupKey, 'roles'])) return state;
	return state.setIn(
		['groups', groupKey, 'roles'], Immutable.fromJS([])
	);
}

function getGroupRoleKey(state, groupKey, role) {
	return state.getIn(
		['groups', groupKey, 'roles']
	).findKey(matches({
		id: role.id,
	}));
}

function createGroupRole(state, groupKey, role) {
	const keyPath = ['groups', groupKey, 'roles'];
	return state.setIn(
		keyPath, state.getIn(keyPath).push(Immutable.fromJS(role))
	);
}

function updateGroupRole(state, groupKey, roleKey, role) {
	const keyPath = ['groups', groupKey, 'roles', roleKey];
	return state.setIn(keyPath, Immutable.fromJS(role));
}

