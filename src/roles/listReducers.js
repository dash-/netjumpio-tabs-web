///
// Dependencies
///

import { fromJS } from 'immutable';
import isUndefined from 'lodash/isUndefined';

import { matches, keyIn } from '../utils/immutableUtils';
import addMeta, { ARRAY_INDICATOR } from '../utils/meta';

import * as actions from './actions';


///
// Default state
///

const defaultState = fromJS({
	roles: [],
	groups: [],
});


///
// Reducers
///

function root(state = defaultState, action) {
	const handlers = {
		[actions.GET_LIST_DONE]: getListDone,
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
	const allRoles = fromJS(action.payload);

	return addMetaToAll(
		state
			.set('roles', buildRoles(allRoles))
			.set('groups', buildGroups(allRoles))
	);
}

function addItemDone(state, action) {
	return addMetaToRoles(
		state.update('roles', roles => (
			roles.push(fromJS(action.payload))
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
	return addMetaToRoles(
		addMetaToGroups(state)
	);
}

function addMetaToRoles(state) {
	return addMeta(state, [
		'roles', ARRAY_INDICATOR,
	]);
}

function addMetaToGroups(state) {
	return addMeta(state, [
		'groups', ARRAY_INDICATOR,
		'roles', ARRAY_INDICATOR,
	]);
}

function buildRoles(allRoles) {
	return allRoles.filter(item => (
		isUndefined(item.getIn(['group', 'id']))
	)).map(role => (
		role.filter(keyIn('id', 'name', 'logoUrl'))
	))
}

function buildGroups(allRoles) {
	return allRoles.filter(item => (
		! isUndefined(item.getIn(['group', 'id']))
	)).reduce(groupRoleReducer, fromJS([]));
}

function groupRoleReducer(reduction, role) {
	const group = role.get('group');
	let groupKey = getGroupKey(reduction, group);

	if(isUndefined(groupKey)) {
		reduction = createGroup(reduction, group);
		groupKey = getGroupKey(reduction, group);
	}

	const rolesPath = [groupKey, 'roles'];

	return reduction.updateIn(rolesPath, roles => (
		roles.push(
			role.filter(keyIn('id', 'name', 'logoUrl'))
		)
	));
}

function createGroup(state, group) {
	return state.push(
		group
			.filter(keyIn('id', 'name'))
			.set('roles', fromJS([]))
	);
}

function getGroupKey(groups, group) {
	return groups.findKey(matches({
		id: group.get('id')
	}));
}

