///
// Dependencies
///

import React, { Component } from 'react';

import CardsListItem from '../elements/CardsListItem';
import TabSetsLogo from '../elements/TabSetsLogo';


///
// View
///

class TabsetsListItemView extends Component {
	processItem(item) {
		return item.set('href', '/app/tabsets/' + this.props.item.get('id'));
	}

	render() {
		const defaultLogoIcon = (
			<TabSetsLogo />
		);

		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon={defaultLogoIcon}
				width="2x"
				horizontal
			></CardsListItem>
		);
	}
}

export default TabsetsListItemView;

