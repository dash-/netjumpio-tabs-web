///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


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

ItemPanelSectionView.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ItemPanelSectionView;
