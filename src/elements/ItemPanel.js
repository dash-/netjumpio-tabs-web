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
		const outerClassName = this.props.className ? [this.props.className] : [];

		return (
			<div className={classNames('item-panel', outerClassName)}>
				{this.props.item ? this.props.children : ''}
			</div>
		);
	}
}

export default ItemPanelView;

