///
// Dependencies
///

import React, { Component } from 'react';
import classNames from 'classnames';


///
// View
///

class CardsListView extends Component {
	render() {
		const className = classNames(
			'cards-list',
			this.props.className
		);

		return (
			<ul className={className}>
				{this.props.children}
			</ul>
		);
	}
}

export default CardsListView;

