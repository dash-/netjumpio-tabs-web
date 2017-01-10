import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Dismissible from '../Dismissible';

it('renders without crashing', () => {
	const props = {
		onDismiss: () => {},
	};

	shallow(
		<Dismissible {...props}><i /></Dismissible>,
		{context: {}}
	);
});
