import React, { Component } from 'react';
import Icon from './Icon';

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


export default ExpanderButton;