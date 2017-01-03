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


///
// Helpers
///

function addMetaToGroups(state) {
	return addMeta(state, [
		ARRAY_INDICATOR
	]);
}
