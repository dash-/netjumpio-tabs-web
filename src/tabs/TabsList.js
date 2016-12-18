///
// Dependencies
///

import React, { Component } from 'react';

import CardsList from '../elements/CardsList';

import TabsListItem from './TabsListItem';


///
// View
///

class TabsListView extends Component {
	///
	// Rendering
	///

	renderTabsListItems() {
		const tabs = this.props.tabs || [];

		return tabs.map((tab, key) => (
			<TabsListItem tab={tab} key={key} />
		));
	}

	render() {
		return (
			<CardsList className="tabsets-list">
				{this.renderTabsListItems()}
			</CardsList>
		);
	}
}

export default TabsListView;

