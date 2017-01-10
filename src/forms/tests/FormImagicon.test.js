import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { FormImagiconView as FormImagicon } from '../FormImagicon';

it('renders without crashing', () => {
	const props = {
		name: 'i',
		uploadImage: () => {},
		forms: fromJS({
			i: {values: []}
		}),
	};

	shallow(
		<FormImagicon {...props} />,
		{context: {
			formName: 'i',
		}}
	);
});
