import { fromJS } from 'immutable';
import reducer from '../itemReducers';
import * as actions from '../actions';

const defaultItem = fromJS({
	logoUrl: 'a',
	name: 'b',
	id: 'c',
	ownerGroupId: 'd',
	deletedAt: null,
	isDeleted: false,
	tabsets: [],
	group: {},
});

it('roles: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('roles: correctly reduces ROLES:GET_ITEM_DONE action', () => {
	const reduction = reducer(
		fromJS({}),
		actions.getItemDone([defaultItem.toJS()])
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

