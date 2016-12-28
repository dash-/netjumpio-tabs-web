///
// Dependencies
///

import { fromJS, is } from 'immutable';

import * as tabsActions from '../tabs/actions';
import * as actions from './actions';


///
// Reducers
///

function root(state = fromJS({}), action) {
	const handlers = {
		[actions.GET_ITEM_DONE]: getItemDone,
		[tabsActions.ADD_ITEM_DONE]: addTabDone,
		[tabsActions.EDIT_ITEM_DONE]: editTabDone,
		[tabsActions.REMOVE_ITEM_DONE]: removeTabDone,
		[tabsActions.RESTORE_ITEM_DONE]: restoreTabDone,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getItemDone(state, action) {
	return fromJS(action.payload);
}

function addTabDone(state, action) {
	return state.update('tabs', tabs => (
		tabs.push(fromJS(action.payload))
	));
}

function editTabDone(state, action) {
	const tabKey = state.get('tabs').findKey(item => (
		is(item.get('id'), action.payload.id)
	));

	return state.setIn(
		['tabs', tabKey],
		fromJS(action.payload)
	);
}

function removeTabDone(state, action) {
	const tabKey = state.get('tabs').findKey(item => (
		is(item.get('id'), action.payload.id)
	));

	return state.deleteIn(['tabs', tabKey]);
}

function restoreTabDone(state, action) {
	return state.update('tabs', tabs => (
		tabs.push(fromJS(action.payload))
	));
}

