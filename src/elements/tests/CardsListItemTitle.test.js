import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardsListItemTitle from '../CardsListItemTitle';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<CardsListItemTitle {...props} />,
		{context: {}}
	);
});
