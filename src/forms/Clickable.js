///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import assign from 'lodash/assign';
import classNames from 'classnames';


///
// View
///

class ClickableView extends Component {
	///
	// Rendering
	///

	render() {
		const props = assign({}, this.props, {
			className: classNames('clickable', this.props.className),
		});

		return React.createElement(
			'div', props, this.props.children
		);
	}
}

ClickableView.propTypes = {
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	children: PropTypes.node.isRequired,
};

export default ClickableView;

