///
// Dependencies
///

import Immutable from 'immutable';
import isUndefined from 'lodash/isUndefined';
import isObject from 'lodash/isObject';
import filter from 'lodash/filter';

import { matches, keyIn, init } from '../lib/immutableUtils';

import * as actions from './actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
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

	const roles = Immutable.fromJS(
		filter(action.payload, item => (
			! isObject(item.group) || isUndefined(item.group.id)
		))
	).map(role => (
		role.filter(keyIn('id', 'name', 'logoUrl'))
	));

	return state.set('roles', roles);
}

function addItemDone(state, action) {
	const role = Immutable.fromJS(action.payload);
	const existingKey = state.get('roles').findKey(item => (
		item.get('id') === role.get('id')
	));

	if(! isUndefined(existingKey)) {
		return state.setIn(['roles', existingKey], role);
	}

	return state.set('roles', state.get('roles').push(role));
}


///
// Helpers
///

function toGroupRoles(state, rolesWithGroup) {
	const roles = Immutable.fromJS(rolesWithGroup);

	return roles.reduce((memo, role) => {
		const group = role.get('group');
		let groupKey = getGroupKey(memo, group);

		if(isUndefined(groupKey)) {
			memo = memo.push(group.filter(keyIn('id', 'name')));
			groupKey = getGroupKey(memo, group);
		}

		const rolesPath = [groupKey, 'roles'];
		memo = init(memo, rolesPath, Immutable.fromJS([]));

		return memo.setIn(rolesPath, memo.getIn(rolesPath).push(
			role.filter(keyIn('id', 'name', 'logoUrl'))
		));
	}, Immutable.fromJS([]));
}

function getGroupKey(groups, group) {
	return groups.findKey(matches({
		id: group.get('id')
	}));
}

