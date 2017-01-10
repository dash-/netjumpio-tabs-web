import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabsFormNotifs from '../TabsFormNotifs';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabsFormNotifs {...props} />,
		{context: {}}
	);
});
