import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { AuxDataView as AuxData } from '../AuxData';

it('renders without crashing', () => {
	const props = {
		name: '',
		auxFieldChanged: () => {},
	};

	shallow(
		<AuxData {...props} />,
		{context: {
			formName: '',
		}}
	);
});
