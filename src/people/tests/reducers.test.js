import { fromJS } from 'immutable';
import reducer from '../reducers';
import * as actions from '../actions';

const defaultItem = fromJS({
	logoUrl: 'a',
	name: 'b',
	id: 'c',
});

it('correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('correctly reduces GET_LIST_DONE action', () => {
	const reduction = reducer(
		fromJS([]),
		actions.getListDone([defaultItem.toJS()])
	).toJS();

	const correctReduction = [defaultItem.toJS()];

	expect(reduction).toEqual(correctReduction);
});

it('correctly reduces ADD_ITEM_DONE action', () => {
	const reduction = reducer(
		fromJS([]),
		actions.addItemDone(defaultItem.toJS())
	).toJS();

	const correctReduction = [defaultItem.toJS()];

	expect(reduction).toEqual(correctReduction);
});

