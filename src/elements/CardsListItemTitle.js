///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


///
// View
///

class CardsListItemTitleView extends Component {
	///
	// Rendering
	///

	render() {
		if(! this.props.children) {
			return null;
		}

		const lines = this.props.lines || 3;

		const classes = classNames(
			'title-container',
			'lines-' + lines,
			this.props.className
		);

		return (
			<div className={classes}>
				<div className="title">
					{this.props.children}
				</div>
			</div>
		);
	}
}

CardsListItemTitleView.propTypes = {
	lines: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	children: PropTypes.node,
};

export default CardsListItemTitleView;

