///
// Dependencies
///

import { fromJS, is } from 'immutable';
import isUndefined from 'lodash/isUndefined';
import isObject from 'lodash/isObject';
import filter from 'lodash/filter';

import { matches, keyIn, init } from '../utils/immutableUtils';

import * as actions from './actions';


///
// Reducers
///

function root(state = fromJS({}), action) {
	const handlers = {
		[actions.GET_LIST_DONE]: getListDone,
		[actions.ADD_ITEM_DONE]: addItemDone,
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
	const rolesWithGroup = filter(action.payload, item => (
		isObject(item.group) && ! isUndefined(item.group.id)
	));

	state = state.set('groups', toGroupRoles(
		state, rolesWithGroup
	));

	const roles = fromJS(
		filter(action.payload, item => (
			! isObject(item.group) || isUndefined(item.group.id)
		))
	).map(role => (
		role.filter(keyIn('id', 'name', 'logoUrl'))
	));

	return state.set('roles', roles);
}

function addItemDone(state, action) {
	const role = fromJS(action.payload);
	const existingKey = state.get('roles').findKey(item => (
		is(item.get('id'), role.get('id'))
	));

	if(! isUndefined(existingKey)) {
		return state.setIn(['roles', existingKey], role);
	}

	return state.update('roles', roles => roles.push(role));
}


///
// Helpers
///

function toGroupRoles(state, rolesWithGroup) {
	const roles = fromJS(rolesWithGroup);

	return roles.reduce((reduction, role) => {
		const group = role.get('group');
		let groupKey = getGroupKey(reduction, group);

		if(isUndefined(groupKey)) {
			reduction = reduction.push(
				group.filter(keyIn('id', 'name'))
			);
			groupKey = getGroupKey(reduction, group);
		}

		const rolesPath = [groupKey, 'roles'];
		reduction = init(reduction, rolesPath, fromJS([]));

		return reduction.updateIn(rolesPath, roles => (
			roles.push(
				role.filter(keyIn('id', 'name', 'logoUrl'))
			)
		));
	}, fromJS([]));
}

function getGroupKey(groups, group) {
	return groups.findKey(matches({
		id: group.get('id')
	}));
}

