///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

export default class NoWrapEllipseView extends Component {
	render() {
		return (
			<div className="text-nowrap overflow-ellipse">
				{this.props.children}
			</div>
		);
	}
}

