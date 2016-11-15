///
// Dependencies
///

import React, { Component } from 'react';

import CardsListItem from '../elements/CardsListItem';



///
// View
///

class RolesListItemView extends Component {
	processItem(item) {
		return item.set('href', '/roles/' + this.props.item.get('id'));
	}

	render() {
		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon="user-secret"
				width="2x"
			></CardsListItem>
		);
	}
}

export default RolesListItemView;

