import { fromJS } from 'immutable';
import reducer from '../panelsReducers';
import * as actions from '../actions';

it('overview: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('overview: correctly reduces OVERVIEW:TOGGLE_ITEM action', () => {
	const reduction = reducer(
		undefined, actions.toggleItem('groups')
	);

	const correctReduction = reduction.setIn(
		['groups', 'isExpanded'], true
	).toJS();

	expect(reduction.toJS()).toEqual(correctReduction);
});

