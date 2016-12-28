///
// Dependencies
///

import React, { Component } from 'react';
import classNames from 'classnames';


///
// View
///

class ItemPanelView extends Component {
	render() {
		const className = classNames(
			'item-panel', 'light-theme', this.props.className
		);

		return (
			<div className={className}>
				{this.props.item ? this.props.children : ''}
			</div>
		);
	}
}

export default ItemPanelView;

