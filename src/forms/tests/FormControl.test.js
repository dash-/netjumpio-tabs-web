import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { FormControlView as FormControl } from '../FormControl';

it('renders without crashing', () => {
	const props = {
		name: 'i',
		fieldChanged: () => {},
		forms: fromJS({
			i: {values: []}
		}),
	};

	shallow(
		<FormControl {...props} />,
		{context: {
			formName: 'i',
		}}
	);
});
