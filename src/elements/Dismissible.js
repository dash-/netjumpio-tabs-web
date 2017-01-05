///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


///
// View
///

class Dismissible extends Component {
	///
	// Construction & Hooks
	///

	constructor(props) {
		super(props);

		this.handleBgClick = this.handleBgClick.bind(this);
	}

	componentDidMount() {
		const rootId = this.props.rootId || 'root';
		const app = document.getElementById(rootId);
		app.addEventListener('click', this.handleBgClick, false);
	}

	componentWillUnmount() {
		const rootId = this.props.rootId || 'root';
		const app = document.getElementById(rootId);
		app.removeEventListener('click', this.handleBgClick, false);
	}


	///
	// Event handling
	///

	handleBgClick(evt) {
		const area = this.refs.area;

		if(! area.contains(evt.target)) {
			this.props.onDismiss(evt)
		}
	}


	///
	// Rendering
	///

	render() {
		return (
			<div ref="area">
				{this.props.children}
			</div>
		);
	}
}

Dismissible.propTypes = {
	rootId: PropTypes.string,
	onDismiss: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Dismissible;
