import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SectionHeader from '../SectionHeader';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<SectionHeader {...props} />,
		{context: {}}
	);
});
