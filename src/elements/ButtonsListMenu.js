///
// Dependencies
///

import React, { Component } from 'react';

import IconMenu from './IconMenu';


///
// View
///

class ButtonsListMenuView extends Component {
	render() {
		const iconMenu = React.createElement(
			IconMenu, this.props, this.props.children
		);

		return (
			<li className="buttons-list-menu">
				{iconMenu}
			</li>
		);
	}
}

export default ButtonsListMenuView;
