import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { FormView as Form } from '../Form';

it('renders without crashing', () => {
	const props = {
		name: 'i',
		initForm: () => {},
		submitForm: () => {},
	};

	shallow(
		<Form {...props}><i /></Form>,
		{context: {}}
	);
});
