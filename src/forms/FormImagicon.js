///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import omit from 'lodash/omit';
import classNames from 'classnames';

import Dropzone from 'react-dropzone';
import Clickable from '../forms/Clickable';

import Imagicon from '../elements/Imagicon';


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
		// TODO
console.log('files', files);
	}


	///
	// Rendering
	///

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
		}, omit(this.props, ['forms']));

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
				</Dropzone>
			</Clickable>
		);
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
	return {};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(FormImagiconView);

