///
// Dependencies
///

import React, { Component } from 'react';
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
						<Icon name="close" /> &nbsp;Close
					</Button>
					<Button bsStyle="primary" onClick={this.props.onSave}>
						<Icon name="floppy-o" /> &nbsp;Save
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default FormModalView;

