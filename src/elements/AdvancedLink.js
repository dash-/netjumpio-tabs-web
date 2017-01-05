///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { hasProtocol } from '../utils/urlUtils';


///
// View
///

class AdvancedLink extends Component {
	renderRouterLink(url) {
		return (
			<Link to={url}>
				{this.props.children}
			</Link>
		);
	}

	renderExternalLink(url) {
		const defaultTarget = url.replace(/[^a-zA-Z]/g, '');
		return (
			<a href={url} target={this.props.target || defaultTarget}>
				{this.props.children}
			</a>
		);
	}

	render() {
		if(hasProtocol(this.props.to)) {
			return this.renderExternalLink(this.props.to);
		}

		return this.renderRouterLink(this.props.to);
	}
}

AdvancedLink.propTypes = {
	target: PropTypes.string,
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default AdvancedLink;
