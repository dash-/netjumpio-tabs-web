
import React, { Component } from 'react';

class DirectiveListView extends Component {
	handleClick(e) {
		console.log('e', e);
	}

	render() {
		return (
			<div>
				<div>Directive List</div>
				<button onClick={this.handleClick}>Click</button>
			</div>
		);
	}
}

export default DirectiveListView;

