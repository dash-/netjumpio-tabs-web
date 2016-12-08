///
// Dependencies
///

import React, { Component } from 'react';

import Icon from './Icon';


///
// View
///

class ButtonsListItem extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		console.log('clicked');
	}

	render() {
		return (
			<li className="buttons-list-item" onClick={this.onClick}>
				<Icon name={this.props.icon} />
				{this.props.children}
			</li>
		);
	}
}

export default ButtonsListItem;
