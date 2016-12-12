///
// Dependencies
///

import React, { Component } from 'react';


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

export default ButtonsListView;
