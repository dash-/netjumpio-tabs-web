import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AdvancedLink from '../AdvancedLink';

it('renders without crashing', () => {
	const props = {
		to: 'i',
	};

	shallow(
		<AdvancedLink {...props}><i /></AdvancedLink>,
		{context: {}}
	);
});

it('renders external link without crashing', () => {
	const props = {
		to: 'http://www.example.com',
	};

	shallow(
		<AdvancedLink {...props}><i /></AdvancedLink>,
		{context: {}}
	);
});
