///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class ButtonsListView extends Component {
	render() {
		return (
			<ul className="buttons-list">
				{this.props.children}
			</ul>
		);
	}
}

ButtonsListView.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ButtonsListView;
