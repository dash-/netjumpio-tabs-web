///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import Icon from './Icon';


///
// View
///

class ExpanderButton extends Component {
	render() {
		const iconClass = {
			'caret-down': this.props.expanded,
			'caret-right': ! this.props.expanded,
		};

		return (
			<button
				className="expander-button"
				disabled={this.props.disabled}
				onClick={this.props.onClick}
			>
				<Icon name={iconClass} size="lg" />
			</button>
		);
	}
}

ExpanderButton.propTypes = {
	expanded: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

export default ExpanderButton;
