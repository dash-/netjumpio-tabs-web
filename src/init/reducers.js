///
// Dependencies
///

import { fromJS } from 'immutable';
import size from 'lodash/size';

import * as tabsetsActions from '../tabsets/actions';
import * as peopleActions from '../people/actions';
import * as groupsActions from '../groups/actions';
import * as rolesActions from '../roles/actions';


///
// Reducers
///

let actionsCount;

function root(state = fromJS({progress: 0}), action) {
	const handlers = {
		[tabsetsActions.GET_LIST_DONE]: actionDone,
		[peopleActions.GET_LIST_DONE]: actionDone,
		[groupsActions.GET_LIST_DONE]: actionDone,
		[rolesActions.GET_LIST_DONE]: actionDone,
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

function actionDone(state, action) {
	const priorProgress = state.get('progress');
	return state.set('progress', priorProgress + 1 / actionsCount);
}

