
import React, { Component } from 'react';

class TabsetListView extends Component {
	handleClick(e) {
		console.log('e', e);
	}

	render() {
		return (
			<div>
				<div>Tabset List</div>
				<button onClick={this.handleClick}>Click</button>
			</div>
		);
	}
}

export default TabsetListView;

