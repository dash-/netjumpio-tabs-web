///
// Dependencies
///

import React, { Component } from 'react';

import CardsListItem from '../elements/CardsListItem';



///
// View
///

class UsersListItemView extends Component {
	processItem(item) {
		return item.set('href', '/users/' + this.props.item.get('id'));
	}

	render() {
		return (
			<CardsListItem
				item={this.processItem(this.props.item)}
				defaultLogoIcon="user-circle"
				width="2x"
				horizontal
			></CardsListItem>
		);
	}
}

export default UsersListItemView;

