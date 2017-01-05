///
// Dependencies
///

import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Icon from '../elements/Icon';


///
// View
///

class FormModalView extends Component {
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.onClose}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{this.props.children}</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onClose}>
						<Icon name="close" /> &nbsp;Cancel
					</Button>
					<Button bsStyle="primary" onClick={this.props.onSave}>
						<Icon name="check" /> &nbsp;Save
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

FormModalView.propTypes = {
	show: PropTypes.bool,
	title: PropTypes.string,
	onClose: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default FormModalView;

