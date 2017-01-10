import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardsListCategory from '../CardsListCategory';

it('renders without crashing', () => {
	const props = {
		name: '',
	};

	shallow(
		<CardsListCategory {...props} />,
		{context: {}}
	);
});
