import { fromJS } from 'immutable';
import reducer from '../listReducers';
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

const defaultItemWithMeta = defaultItem.set('_meta', fromJS({
	keyPath: ['groups', 0]
}));

it('groups: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('groups: correctly reduces GROUPS:GET_LIST_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
	}), actions.getListDone([defaultItem.toJS()])).toJS();

	const correctReduction = {
		groups: [
			defaultItemWithMeta.toJS()
		]
	};

	expect(reduction).toEqual(correctReduction);
});

it('groups: correctly reduces GROUPS:ADD_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
	}), actions.addItemDone(defaultItem.toJS())).toJS();

	const correctReduction = {
		groups: [
			defaultItemWithMeta.toJS()
		]
	};

	expect(reduction).toEqual(correctReduction);
});

it('groups: correctly reduces GROUPS:EDIT_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [
			defaultItemWithMeta.toJS()
		],
	}), actions.editItemDone(
		defaultItemWithMeta.set('name', 'i').toJS()
	)).toJS();

	const correctReduction = {
		groups: [
			defaultItemWithMeta.set('name', 'i').toJS()
		]
	};

	expect(reduction).toEqual(correctReduction);
});

it('groups: correctly reduces GROUPS:REMOVE_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [
			defaultItemWithMeta.toJS()
		],
	}), actions.removeItemDone(defaultItemWithMeta.toJS())).toJS();

	const correctReduction = {
		groups: []
	};

	expect(reduction).toEqual(correctReduction);
});

it('groups: correctly reduces GROUPS:RESTORE_ITEM_DONE action', () => {
	const reduction = reducer(fromJS({
		groups: [],
	}), actions.restoreItemDone(defaultItemWithMeta.toJS())).toJS();

	const correctReduction = {
		groups: [defaultItemWithMeta.toJS()]
	};

	expect(reduction).toEqual(correctReduction);
});
