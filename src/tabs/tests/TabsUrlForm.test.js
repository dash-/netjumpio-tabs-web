import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsUrlForm from '../TabsUrlForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsUrlForm {...props} />,
		{context: {}}
	);
});
