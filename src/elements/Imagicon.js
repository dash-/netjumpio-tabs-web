///
// Dependencies
///

import React, { Component } from 'react';
import assign from 'lodash/assign';
import omit from 'lodash/omit';
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

		if(this.props.altIcon) {
			return (
				<Icon
					name={this.props.altIcon}
					className="icon"
				/>
			);
		}
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

export default ImagiconView;

