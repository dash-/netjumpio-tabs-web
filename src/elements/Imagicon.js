///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import assign from 'lodash/assign';
import omit from 'lodash/omit';
import isString from 'lodash/isString';
import classNames from 'classnames';

import Icon from 'react-fontawesome';


///
// View
///

class ImagiconView extends Component {
	///
	// Methods
	///

	getClassNames() {
		let classes = ['imagicon'];

		classes.push('size-' + this.props.size || 'm');

		if(this.props.text) {
			classes.push('has-title');
		}

		return classNames(classes, this.props.className);
	}


	///
	// Rendering
	///

	renderImageOrIcon() {
		if(this.props.src) {
			return (
				<img
					src={this.props.src}
					alt={this.props.alt}
					className="image"
				/>
			);
		}

		if(isString(this.props.altIcon)) {
			return (
				<Icon
					name={this.props.altIcon}
					className="icon"
				/>
			);
		}

		return this.props.altIcon;
	}

	renderText() {
		if(! this.props.text) {
			return '';
		}

		return (
			<div className="title">
				{this.props.text}
			</div>
		);
	}

	renderContents() {
		// Props:
		// - src
		// - alt
		// - altIcon
		// - text

		return (
			<div className="imagicon-inner">
				{this.renderImageOrIcon()}
				{this.renderText()}
				{this.props.children}
			</div>
		);
	}

	render() {
		const props = assign({}, omit(this.props, [
			'children', 'className',
			'src', 'alt', 'altIcon', 'size', 'text'
		]), {
			className: this.getClassNames(),
		});

		return React.createElement('div', props, this.renderContents());
	}
}

ImagiconView.propTypes = {
	size: PropTypes.string,
	text: PropTypes.node,
	className: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	altIcon: PropTypes.node,
	children: PropTypes.node,
};

export default ImagiconView;

