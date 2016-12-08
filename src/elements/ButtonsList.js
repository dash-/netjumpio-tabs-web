///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class ButtonsList extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

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

export default ButtonsList;
