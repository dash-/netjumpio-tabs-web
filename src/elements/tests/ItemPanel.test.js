import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ItemPanel from '../ItemPanel';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<ItemPanel {...props} />,
		{context: {}}
	);
});
