///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class ButtonsListView extends Component {
	onClick(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		return false;
	}

	render() {
		return (
			<ul
				className="buttons-list"
				onClick={this.onClick}
			>
				{this.props.children}
			</ul>
		);
	}
}

export default ButtonsListView;
