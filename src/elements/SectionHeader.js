///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class SectionHeaderView extends Component {
	render() {
		return (
			<div className="section-header">
				<h3>{this.props.children}</h3>
			</div>
		);
	}
}

export default SectionHeaderView;
