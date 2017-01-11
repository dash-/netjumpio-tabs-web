import { fromJS } from 'immutable';
import reducer from '../itemReducers';
import * as actions from '../actions';

const defaultItem = fromJS({
	logoUrl: 'a',
	name: 'b',
	url: 'c',
	id: 'd',
	deletedAt: null,
	isDeleted: false,
	tabsets: [],
	roles: [],
});

it('correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('correctly reduces GET_ITEM_DONE action', () => {
	const reduction = reducer(
		fromJS({}),
		actions.getItemDone([defaultItem.toJS()])
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

