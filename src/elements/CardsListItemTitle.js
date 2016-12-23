///
// Dependencies
///

import React, { Component } from 'react';
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

export default CardsListItemTitleView;

