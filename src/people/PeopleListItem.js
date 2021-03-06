///
// Dependencies
///

import React, { Component } from 'react';

import * as types from './types';

import CardsListItem from '../elements/CardsListItem';


///
// View
///

class PeopleListItemView extends Component {
	processItem(item) {
		return item.set('href', '/app/people/' + this.props.item.get('id'));
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

PeopleListItemView.propTypes = {
	item: types.ListItem.isRequired,
};

export default PeopleListItemView;

