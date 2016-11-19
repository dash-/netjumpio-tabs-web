///
// Dependencies
///

import React, { Component } from 'react';

import CardsListItem from '../elements/CardsListItem';



///
// View
///

class GroupsListItemView extends Component {
	processItem(item) {
		return item.set('href', '/groups/' + this.props.item.get('id'));
	}

	render() {
		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon="id-card"
				width="2x"
				horizontal
			/>
		);
	}
}

export default GroupsListItemView;

