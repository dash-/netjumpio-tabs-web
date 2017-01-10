import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { FormModalView as FormModal } from '../FormModal';

it('renders without crashing', () => {
	const props = {
		name: 'i',
		initForm: () => {},
		hideForm: () => {},
		submitForm: () => {},
		forms: fromJS({
			i: {isVisible: true, values: []}
		}),
	};

	shallow(
		<FormModal {...props}><i /></FormModal>,
		{context: {
			formName: 'i',
		}}
	);
});
