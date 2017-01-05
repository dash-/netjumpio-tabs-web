///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import omit from 'lodash/omit';
import isUndefined from 'lodash/isUndefined';
import classNames from 'classnames';

import * as types from './types';

import Dropzone from 'react-dropzone';
import Spinner from 'react-spinner';

import Clickable from '../forms/Clickable';
import Imagicon from '../elements/Imagicon';

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

		this.handleDrop = this.handleDrop.bind(this);
	}


	///
	// Event handling
	///

	handleDrop(files) {
		const form = this.context.formName;
		const field = this.props.name;

		this.props.uploadImage(form, field, files[0]);
	}


	///
	// Rendering
	///

	renderSpinner() {
		const uploads = this.props.forms.getIn([
			this.context.formName,
			'uploads',
			this.props.name,
		]);

		if(isUndefined(uploads)) {
			return '';
		}

		return (
			<div className="spinner-container">
				<Spinner />
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
			text: 'Drop image here, or click to select an image from your computer.',
		}, omit(this.props, ['forms', 'uploadImage', 'name']));

		return React.createElement(
			Imagicon, props, this.props.children
		);
	}

	render() {
		const className = classNames(
			'form-imagicon', this.props.className
		);

		return (
			<Clickable className={className}>
				<Dropzone
					className="dropzone"
					multiple={false}
					maxSize={10000000}
					accept="image/*"
					onDrop={this.handleDrop}
				>
					{this.renderImagicon()}
					{this.renderSpinner()}
				</Dropzone>
			</Clickable>
		);
	}
}

FormImagiconView.contextTypes = {
	formName: PropTypes.string.isRequired,
};

FormImagiconView.propTypes = assign(
	{}, Imagicon.propTypes, {
		name: PropTypes.string.isRequired,
		uploadImage: PropTypes.func.isRequired,
		className: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
		]),
		forms: types.Forms,
		children: PropTypes.node,
	}
);


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
		uploadImage: (form, field, image) => (
			dispatch(actions.uploadImageStart(form, field, image))
		),
	};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(FormImagiconView);

