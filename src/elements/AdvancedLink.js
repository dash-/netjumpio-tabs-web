///
// Dependencies
///

import React, { Component } from 'react';
import { Link } from 'react-router';
import { hasProtocol } from '../lib/urlUtils';
import _ from 'lodash';


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

export default AdvancedLink;
