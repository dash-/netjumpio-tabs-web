///
// Dependencies
///

import React, { Component } from 'react';

import CardsListItem from '../elements/CardsListItem';



///
// View
///

class OrgsListItemView extends Component {
	processItem(item) {
		return item.set('href', '/orgs/' + this.props.item.get('id'));
	}

	render() {
		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon="id-card"
				width="2x"
			/>
		);
	}
}

export default OrgsListItemView;

