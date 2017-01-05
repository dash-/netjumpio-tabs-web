///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


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

SectionHeaderView.propTypes = {
	children: PropTypes.node,
};

export default SectionHeaderView;
