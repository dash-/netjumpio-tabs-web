///
// Dependencies
///

import { fromJS, is } from 'immutable';
import isUndefined from 'lodash/isUndefined';
import isObject from 'lodash/isObject';
import filter from 'lodash/filter';
import pick from 'lodash/pick';

import { matches, keyIn } from '../utils/immutableUtils';

import * as tabsetsActions from './actions';
import * as groupsActions from '../groups/actions';
import * as rolesActions from '../roles/actions';


///
// Reducers
///

function root(state = fromJS({}), action) {
	const handlers = {
		[tabsetsActions.GET_LIST_DONE]: getTabsetsListDone,
		[groupsActions.GET_LIST_DONE]: getGroupsListDone,
		[rolesActions.GET_LIST_DONE]: getRolesListDone,
		[tabsetsActions.ADD_ITEM_DONE]: addItemDone,
		[tabsetsActions.EDIT_ITEM_DONE]: editItemDone,
		[tabsetsActions.REMOVE_ITEM_DONE]: removeItemDone,
		[tabsetsActions.RESTORE_ITEM_DONE]: restoreItemDone,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getTabsetsListDone(state, action) {
	return state.set('tabsets', fromJS(action.payload));
}

function getGroupsListDone(state, action) {
	// Get groups that have tabsets
	const groups = filter(action.payload, item => (
		item.tabsets && item.tabsets.length > 0
	));

	return mergeGroups(state, groups);
}

function getRolesListDone(state, action) {
	// Get group-owned roles that have tabsets
	const groupRoles = filter(action.payload, item => (
		isObject(item.group) && ! isUndefined(item.group.id) &&
		item.tabsets && item.tabsets.length > 0
	));

	state = mergeGroupRoles(state, groupRoles);

	// Get groupless roles that have tabsets
	const roles = filter(action.payload, item => (
		(! isObject(item.group) || isUndefined(item.group.id)) &&
		item.tabsets && item.tabsets.length > 0
	));

	return state.set('roles', fromJS(roles));
}

function addItemDone(state, action) {
	return state.update('tabsets', tabsets => (
		tabsets.push(fromJS(action.payload))
	));
}

function editItemDone(state, action) {
	const itemKey = state.get('tabsets').findKey(item => (
		is(item.get('id'), action.payload.id)
	));

	return state.setIn(
		['tabsets', itemKey],
		fromJS(action.payload)
	);
}

function removeItemDone(state, action) {
	const itemKey = state.get('tabsets').findKey(item => (
		is(item.get('id'), action.payload.id)
	));

	return state.deleteIn(['tabsets', itemKey]);
}

function restoreItemDone(state, action) {
	return state.update('tabsets', tabsets => (
		tabsets.push(fromJS(action.payload))
	));
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
	return state.set('groups', fromJS([]));
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
	return state.update('groups', groups => (
		groups.push(fromJS(group))
	));
}

function updateGroup(state, groupKey, group) {
	return (state
		.setIn(['groups', groupKey, 'name'], group.name)
		.setIn(
			['groups', groupKey, 'tabsets'],
			fromJS(group.tabsets)
		)
	);
}

function initGroupRoles(state, groupKey) {
	if(state.getIn(['groups', groupKey, 'roles'])) return state;
	return state.setIn(
		['groups', groupKey, 'roles'], fromJS([])
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
	return state.updateIn(keyPath, roles => (
		roles.push(fromJS(role))
	));
}

function updateGroupRole(state, groupKey, roleKey, role) {
	const keyPath = ['groups', groupKey, 'roles', roleKey];
	return state.setIn(keyPath, fromJS(role));
}

