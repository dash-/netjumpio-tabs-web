///
// Dependencies
///

import Immutable from 'immutable';
import isUndefined from 'lodash/isUndefined';

import * as actions from './actions';


///
// Reducers
///

function root(state=Immutable.fromJS([]), action) {
	const handlers = {
		[actions.GET_LIST_FULFILLED]: getListFulfilled,
		[actions.UPDATE_LIST]: updateList,
		default: (state) => state,
	};

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function getListFulfilled(state, action) {
	return Immutable.fromJS(action.payload);
}

function updateList(state, action) {
	const group = Immutable.fromJS(action.payload);
	const existingKey = state.findKey(item => (
		item.get('id') === group.get('id')
	));

	if(! isUndefined(existingKey)) {
		return state.set(existingKey, group);
	}

	return state.push(group);
}

