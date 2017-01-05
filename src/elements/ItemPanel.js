///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
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

ItemPanelView.propTypes = {
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	item: PropTypes.node,
	children: PropTypes.node,
};

export default ItemPanelView;

