///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
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

CardsListView.propTypes = {
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	children: PropTypes.node.isRequired,
};

export default CardsListView;

