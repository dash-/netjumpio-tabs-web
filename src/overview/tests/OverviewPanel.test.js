import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { OverviewPanelView as OverviewPanel } from '../OverviewPanel';

it('renders without crashing', () => {
	const props = {
		overview: fromJS({
			root: {
				selected: 'i',
			},
			panels: {
				i: {isExpanded: true}
			},
		}),
	};

	shallow(
		<OverviewPanel {...props} />,
		{context: {}}
	);
});
