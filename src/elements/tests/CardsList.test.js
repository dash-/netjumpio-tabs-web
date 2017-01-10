import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardsList from '../CardsList';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<CardsList {...props}><i /></CardsList>,
		{context: {}}
	);
});
