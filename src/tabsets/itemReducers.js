///
// Dependencies
///

import Immutable from 'immutable';

import * as tabsActions from '../tabs/actions';
import * as actions from './actions';


///
// Reducers
///

function root(state = Immutable.fromJS({}), action) {
	const handlers = {
		[actions.GET_ITEM_DONE]: getItemDone,
		[tabsActions.ADD_TAB_DONE]: addTabDone,
		[tabsActions.EDIT_TAB_PROMPT]: editTabPrompt,
		[tabsActions.REMOVE_TAB_DONE]: removeTabDone,
		[tabsActions.RESTORE_TAB_DONE]: restoreTabDone,
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
	return Immutable.fromJS(action.payload);
}

function addTabDone(state, action) {
	const tabs = state.get('tabs').push(
		Immutable.fromJS(action.payload)
	);
	return state.set('tabs', tabs);
}

// TODO: This is a stub. feat/cr13 (depends on feat/cr19)
function editTabPrompt(state, action) {
	return state;
}

function removeTabDone(state, action) {
	const tabKey = state.get('tabs').findKey(item => {
		return item.get('id') === action.payload.id;
	});

	return state.deleteIn(['tabs', tabKey]);
}

function restoreTabDone(state, action) {
	return state.set('tabs', state.get('tabs').push(
		Immutable.fromJS(action.payload)
	));
}

