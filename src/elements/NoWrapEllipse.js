import React, { Component } from 'react';

export default class Icon extends Component {
	render() {
		return (
			<div className="text-nowrap overflow-ellipse">
				{this.props.children}
			</div>
		);
	}
}

