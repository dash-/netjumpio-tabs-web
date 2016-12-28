///
// Dependencies
///

import { fromJS, is } from 'immutable';
import isUndefined from 'lodash/isUndefined';

import * as actions from './actions';


///
// Reducers
///

function root(state = fromJS([]), action) {
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
	return fromJS(action.payload);
}

function addItemDone(state, action) {
	const person = fromJS(action.payload);
	const existingKey = state.findKey(item => (
		is(item.get('id'), person.get('id'))
	));

	if(! isUndefined(existingKey)) {
		return state.set(existingKey, person);
	}

	return state.push(person);
}

