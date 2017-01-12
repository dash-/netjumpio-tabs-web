import { fromJS } from 'immutable';
import reducer from '../reducers';
import * as actions from '../actions';

const defaultItem = fromJS({
	id: 'a',
	ttl: 1,
	created: '2017-01-12T03:34:20.159Z',
	userId: 'b',
	user: {
		name: 'c',
		logoUrl: 'd',
		username: 'e',
		email: 'f',
		id: 'g',
	}
});

it('user: correctly reduces invalid action', () => {
	const reduction = reducer(
		fromJS({}), {type: null},
	).toJS();

	const correctReduction = {};

	expect(reduction).toEqual(correctReduction);
});

it('user: correctly reduces USER:LOGIN_DONE action', () => {
	const reduction = reducer(
		undefined, actions.loginDone(defaultItem.toJS())
	).toJS();

	const correctReduction = (defaultItem
		.get('user')
		.set('accessToken', defaultItem.get('id'))
		.set('loginTTL', defaultItem.get('ttl'))
		.set('loginTimestamp', 1484192060159)
	).toJS();

	expect(reduction).toEqual(correctReduction);
});

it('user: correctly reduces USER:LOGOUT_DONE action', () => {
	const reduction = reducer(
		(defaultItem
			.get('user')
			.set('accessToken', defaultItem.get('id'))
			.set('loginTTL', defaultItem.get('ttl'))
			.set('loginTimestamp', 1484192060159)
		),
		actions.logoutDone()
	).toJS();

	const correctReduction = {
	};

	expect(reduction).toEqual(correctReduction);
});

