import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsForm from '../TabsForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsForm {...props} />,
		{context: {}}
	);
});
