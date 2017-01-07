///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class FormBodyView extends Component {
	render() {
		return (
			<div className="form-body">
				{this.props.children}
			</div>
		);
	}
}

FormBodyView.propTypes = {
	children: PropTypes.node,
};

export default FormBodyView;

