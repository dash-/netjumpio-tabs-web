///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


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

SectionBodyView.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SectionBodyView;
