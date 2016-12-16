///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class ItemPanelSectionView extends Component {
	render() {
		return (
			<div className="item-panel-section">
				{this.props.children}
			</div>
		);
	}
}

export default ItemPanelSectionView;
