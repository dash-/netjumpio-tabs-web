import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { OverviewPanelItemView as OverviewPanelItem } from '../OverviewPanelItem';

it('renders without crashing', () => {
	const props = {
		name: 'i',
		title: 'i',
		toggleItem: () => {},
		selectItem: () => {},
		clearForm: () => {},
		showForm: () => {},
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
		<OverviewPanelItem {...props}><i /></OverviewPanelItem>,
		{context: {}}
	);
});
