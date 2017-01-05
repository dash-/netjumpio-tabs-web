///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class CardsListCategoryView extends Component {
	render() {
		return (
			<li className="cards-list-category">
				<h5 className="title">{this.props.name}</h5>
				<ul>
					{this.props.children}
				</ul>
			</li>
		);
	}
}

CardsListCategoryView.propTypes = {
	name: PropTypes.node.isRequired,
	children: PropTypes.node,
};

export default CardsListCategoryView;

