///
// Dependencies
///

import React, { Component } from 'react';


///
// View
///

class GlobalLayout extends Component {
  render() {
    return (
    	<div className="global-layout">
				{this.props.children}
			</div>
    );
  }
}

export default GlobalLayout;
