
import React, { Component } from 'react';

class AppList extends Component {
	handleClick(e) {
		console.log('e', e);
	}

	render() {
		return (
			<div>
				<div>App List</div>
				<button onClick={this.handleClick}>Click</button>
			</div>
		);
	}
}

export default AppList;

