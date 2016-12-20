///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import omit from 'lodash/omit';
import classNames from 'classnames';

import Dropzone from 'react-dropzone';

import Imagicon from '../elements/Imagicon';
import Clickable from './Clickable';

import * as actions from './actions';


///
// View
///

class FormImagiconView extends Component {
	///
	// Construction
	///

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}


	///
	// Event handling
	///

	handleClick(evt) {
		this.props.selectImage(this.context.formName, this.props.name);
	}

	handleDrop(files) {
		// TODO
console.log('files', files);
	}


	///
	// Rendering
	///

	renderImageSelect(imageSelect) {
		const className = classNames(
			'form-image-select', this.props.className
		);

		return (
			<div className={className}>
				<Dropzone onDrop={this.handleDrop}>
					Drop image here, or click to select an image
					from your computer.
					(TODO Save &amp; Cancel)
				</Dropzone>
			</div>
		);
	}

	renderImagicon() {
		const form = this.props.forms.get(this.context.formName);

		// Props:
		// - name
		// - src
		// - alt
		// - altIcon
		// - text
		const props = assign({
			src: form.getIn(['values', this.props.name], ''),
			text: 'Change',
		}, omit(this.props, ['forms']));

		const contents = React.createElement(
			Imagicon, props, this.props.children
		);

		return (
			<Clickable onClick={this.handleClick}>
				{contents}
			</Clickable>
		);
	}

	render() {
		const form = this.props.forms.get(this.context.formName);

		const imageSelect = form.getIn(['imageSelects', this.props.name]);
		if(imageSelect) {
			return this.renderImageSelect(imageSelect);
		}

		return this.renderImagicon();
	}
}

FormImagiconView.contextTypes = {
	formName: PropTypes.string.isRequired,
};



///
// Container
///

function mapStateToProps(state) {
	return {
		forms: state.get('forms'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		selectImage: (formName, fieldName) => (
			dispatch(actions.selectImageStart(formName, fieldName))
		)
	};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(FormImagiconView);

