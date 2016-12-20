///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'lodash/assign';
import omit from 'lodash/omit';

import Imagicon from '../elements/Imagicon';
import Clickable from './Clickable';


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
		console.log('clicked');
	}


	///
	// Rendering
	///

	render() {
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

