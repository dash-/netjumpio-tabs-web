import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SectionBody from '../SectionBody';

it('renders without crashing', () => {
	const props = {};

	shallow(
		<SectionBody {...props}><i /></SectionBody>,
		{context: {}}
	);
});
