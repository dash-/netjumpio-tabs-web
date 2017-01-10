import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TabSetsLogo from '../TabSetsLogo';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<TabSetsLogo {...props} />,
		{context: {}}
	);
});
