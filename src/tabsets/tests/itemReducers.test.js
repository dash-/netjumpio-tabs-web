import { fromJS } from 'immutable';
import reducer from '../itemReducers';
import * as actions from '../actions';
import * as tabsActions from '../../tabs/actions';

const defaultItem = fromJS({
	name: 'a',
	ownerPersonId: 'b',
	id: 'ta',
	tabs: []
});

const defaultTab = fromJS({
	logoUrl: 'a',
	name: 'b',
	url: 'c',
	ownerTabsetId: 'ta',
	id: 'd',
	deletedAt: null,
	isDeleted: false,
});

it('tabsets: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABSETS:GET_ITEM_DONE action', () => {
	const reduction = reducer(
		fromJS({}),
		actions.getItemDone(
			defaultItem.set('tabs', fromJS([
				defaultTab.toJS(),
			])).toJS()
		)
	).toJS();

	const correctReduction = defaultItem.set('tabs', fromJS([
		defaultTab.toJS(),
	])).toJS();

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABS:ADD_ITEM_DONE action', () => {
	const reduction = reducer(
		defaultItem,
		tabsActions.addItemDone(defaultTab.toJS())
	).toJS();

	const correctReduction = defaultItem.set('tabs', fromJS([
		defaultTab.toJS(),
	])).toJS();

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABS:EDIT_ITEM_DONE action', () => {
	const reduction = reducer(
		defaultItem.set('tabs', fromJS([
			defaultTab.toJS(),
		])),
		tabsActions.editItemDone(
			defaultTab.set('name', 'i').toJS()
		)
	).toJS();

	const correctReduction = defaultItem.set('tabs', fromJS([
		defaultTab.set('name', 'i').toJS(),
	])).toJS();

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABS:REMOVE_ITEM_DONE action', () => {
	const reduction = reducer(
		defaultItem.set('tabs', fromJS([
			defaultTab.toJS(),
		])),
		tabsActions.removeItemDone(defaultTab.toJS())
	).toJS();

	const correctReduction = defaultItem.toJS();

	expect(reduction).toEqual(correctReduction);
});

it('tabsets: correctly reduces TABS:RESTORE_ITEM_DONE action', () => {
	const reduction = reducer(
		defaultItem,
		tabsActions.restoreItemDone(defaultTab.toJS())
	).toJS();

	const correctReduction = defaultItem.set('tabs', fromJS([
		defaultTab.toJS(),
	])).toJS();

	expect(reduction).toEqual(correctReduction);
});

