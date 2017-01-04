///
// Dependencies
///

import { fromJS } from 'immutable';

import addMeta, { ARRAY_INDICATOR } from '../utils/meta';

import * as actions from './actions';


///
// Default state
///

const defaultState = fromJS({
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
	const groups = fromJS(action.payload);

	return addMetaToGroups(state.set('groups', groups));
}

function addItemDone(state, action) {
	return addMetaToGroups(
		state.update('groups', groups => (
			groups.push(fromJS(action.payload))
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
	return addMetaToGroups(state);
}

function addMetaToGroups(state) {
	return addMeta(state, [
		'groups', ARRAY_INDICATOR,
	]);
}
