import { fromJS } from 'immutable';
import reducer from '../selectedReducers';
import * as actions from '../actions';

it('overview: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('overview: correctly reduces OVERVIEW:SELECT_ITEM action', () => {
	const reduction = reducer(
		undefined, actions.selectItem('i')
	).toJS();

	const correctReduction = {
		selected: 'i',
	};

	expect(reduction).toEqual(correctReduction);
});

