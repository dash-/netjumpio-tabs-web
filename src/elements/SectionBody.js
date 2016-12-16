///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class SectionBodyView extends Component {
	render() {
		return (
			<div className="section-body">
				{this.props.children}
			</div>
		);
	}
}

export default SectionBodyView;
