///
// Dependencies
///

import { fromJS } from 'immutable';
import isUndefined from 'lodash/isUndefined';

import { matches, keyIn } from '../utils/immutableUtils';
import addMeta, { ARRAY_INDICATOR } from '../utils/meta';

import * as actions from './actions';
import * as groupsActions from '../groups/actions';
import * as rolesActions from '../roles/actions';


///
// Default state
///

const defaultState = fromJS({
	tabsets: [],
	groups: [],
	roles: [],
});


///
// Reducers
///

function root(state = defaultState, action) {
	const handlers = {
		[actions.GET_LIST_DONE]: getListDone,
		[groupsActions.GET_LIST_DONE]: getGroupsListDone,
		[rolesActions.GET_LIST_DONE]: getRolesListDone,
		[actions.ADD_ITEM_DONE]: addItemDone,
		[actions.EDIT_ITEM_DONE]: editItemDone,
		[actions.REMOVE_ITEM_DONE]: removeItemDone,
		[actions.RESTORE_ITEM_DONE]: restoreItemDone,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getListDone(state, action) {
	const tabsets = fromJS(action.payload);
		
	return addMetaToTabsets(state.set('tabsets', tabsets));
}

function getGroupsListDone(state, action) {
	const groups = fromJS(action.payload).filter(group => (
		group.get('tabsets') && group.get('tabsets').size > 0
	));
			
	return addMetaToGroups(mergeGroups(state, groups));
}

function getRolesListDone(state, action) {
	const allRoles = fromJS(action.payload);

	// Get group-owned roles that have tabsets
	const groupRoles = allRoles.filter(role => (
		! isUndefined(role.getIn(['group', 'id'])) &&
		role.get('tabsets') && role.get('tabsets').size > 0
	));

	state = addMetaToGroupRoles(mergeGroupRoles(state, groupRoles));

	// Get groupless roles that have tabsets
	const roles = allRoles.filter(role => (
		isUndefined(role.getIn(['group', 'id'])) &&
		role.get('tabsets') && role.get('tabsets').size > 0
	));

	return addMetaToRoles(state.set('roles', roles));
}

function addItemDone(state, action) {
	return addMetaToTabsets(
		state.update('tabsets', tabsets => (
			tabsets.push(fromJS(action.payload))
		))
	);
}

function editItemDone(state, action) {
	return state.setIn(
		action.payload._meta.keyPath,
		fromJS(action.payload)
	);
}

function removeItemDone(state, action) {
	return addMetaToAll(
		state.deleteIn(action.payload._meta.keyPath)
	);
}

function restoreItemDone(state, action) {
	const keyPath = fromJS(action.payload._meta.keyPath);
	const key = keyPath.last();
	const listPath = keyPath.skipLast(1).toJS();

	return addMetaToAll(state.updateIn(listPath, list => (
		list.splice(key, 0, fromJS(action.payload))
	)));
}


///
// Helpers
///

function addMetaToAll(state) {
	return addMetaToTabsets(
		addMetaToGroups(
			addMetaToGroupRoles(
				addMetaToRoles(state)
			)
		)
	);
}

function addMetaToTabsets(state) {
	return addMeta(state, [
		'tabsets', ARRAY_INDICATOR,
	]);
}

function addMetaToGroups(state) {
	return addMeta(state, [
		'groups', ARRAY_INDICATOR, 
		'tabsets', ARRAY_INDICATOR,
	]);
}

function addMetaToGroupRoles(state) {
	return addMeta(state, [
		'groups', ARRAY_INDICATOR, 
		'roles', ARRAY_INDICATOR,
		'tabsets', ARRAY_INDICATOR,
	]);
}

function addMetaToRoles(state) {
	return addMeta(state, [
		'roles', ARRAY_INDICATOR, 
		'tabsets', ARRAY_INDICATOR,
	]);
}

function mergeGroups(state, groups) {
	state = state.update('groups', groups => (
		groups.map(group => (
			group.set('tabsets', fromJS([]))
		))
	));

	groups.forEach(group => {
		const groupKey = getGroupKey(state, group);

		if(isUndefined(groupKey)) {
			state = createGroup(state, group);
		} else {
			state = updateGroup(state, groupKey, group);
		}
	});

	return state;
}

function mergeGroupRoles(state, roles) {
	state = state.update('groups', groups => (
		groups.map(group => (
			group.set('roles', fromJS([]))
		))
	));

	roles.forEach(role => {
		const group = role.get('group');
		let groupKey = getGroupKey(state, group);

		if(isUndefined(groupKey)) {
			state = createGroup(state, group);
			groupKey = getGroupKey(state, group);
		}

		let roleKey = getGroupRoleKey(state, groupKey, role);

		if(roleKey) {
			state = updateGroupRole(state, groupKey, roleKey, role);
		} else {
			state = createGroupRole(state, groupKey, role);
		}
	});

	return state;
}

function getGroupKey(state, group) {
	return state.get('groups').findKey(matches({
		id: group.get('id')
	}));
}

function createGroup(state, group) {
	group = group
		.filter(keyIn('id', 'name', 'tabsets'))
		.set('roles', fromJS([]))
		.update('tabsets', tabsets => (
			isUndefined(tabsets) ? fromJS([]) : tabsets
		));

	return state.update('groups', groups => (
		groups.push(group)
	));
}

function updateGroup(state, groupKey, group) {
	return (state
		.setIn(['groups', groupKey, 'name'], group.get('name'))
		.setIn(
			['groups', groupKey, 'tabsets'], group.get('tabsets')
		)
	);
}

function getGroupRoleKey(state, groupKey, role) {
	return state.getIn(
		['groups', groupKey, 'roles']
	).findKey(matches({
		id: role.get('id'),
	}));
}

function createGroupRole(state, groupKey, role) {
	const keyPath = ['groups', groupKey, 'roles'];
	return state.updateIn(keyPath, roles => (
		roles.push(role)
	));
}

function updateGroupRole(state, groupKey, roleKey, role) {
	const keyPath = ['groups', groupKey, 'roles', roleKey];
	return state.setIn(keyPath, role);
}

