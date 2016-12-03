///
// Dependencies
///

import Immutable from 'immutable';
import size from 'lodash/size';

import * as tabsetsActions from '../tabsets/actions';
import * as peopleActions from '../people/actions';
import * as groupsActions from '../groups/actions';
import * as rolesActions from '../roles/actions';


///
// Reducers
///

let actionsCount;

function root(state = Immutable.fromJS({progress: 0}), action) {
	const handlers = {
		[tabsetsActions.GET_LIST_FULFILLED]: actionFulfilled,
		[peopleActions.GET_LIST_FULFILLED]: actionFulfilled,
		[groupsActions.GET_LIST_FULFILLED]: actionFulfilled,
		[rolesActions.GET_LIST_FULFILLED]: actionFulfilled,
		default: (state) => state,
	};

	actionsCount = size(handlers) - 1;

	const handler = handlers[action.type] || handlers.default;
	return handler(state, action);
}

export default root;


///
// Delegates
///

function actionFulfilled(state, action) {
	const priorProgress = state.get('progress');
	return state.set('progress', priorProgress + 1 / actionsCount);
}

