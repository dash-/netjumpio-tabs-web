import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { TabsFormModalView as TabsFormModal } from '../TabsFormModal';

it('renders without crashing', () => {
	const props = {
		forms: fromJS([
			{values: []}
		])
	};

	shallow(
		<TabsFormModal {...props} />,
		{context: {}}
	);
});
