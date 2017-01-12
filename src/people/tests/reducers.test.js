import { fromJS } from 'immutable';
import reducer from '../reducers';
import * as actions from '../actions';

const defaultItem = fromJS({
	logoUrl: 'a',
	name: 'b',
	id: 'c',
});

it('people: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('people: correctly reduces PEOPLE:GET_LIST_DONE action', () => {
	const reduction = reducer(
		fromJS([]),
		actions.getListDone([defaultItem.toJS()])
	).toJS();

	const correctReduction = [defaultItem.toJS()];

	expect(reduction).toEqual(correctReduction);
});

it('people: correctly reduces PEOPLE:ADD_ITEM_DONE action', () => {
	const reduction = reducer(
		fromJS([]),
		actions.addItemDone(defaultItem.toJS())
	).toJS();

	const correctReduction = [defaultItem.toJS()];

	expect(reduction).toEqual(correctReduction);
});

