import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsetsItemNotifs from '../TabsetsItemNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsetsItemNotifs {...props} />,
		{context: {}}
	);
});
