import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsetsForm from '../TabsetsForm';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsetsForm {...props} />,
		{context: {}}
	);
});
