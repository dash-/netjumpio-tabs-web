///
// Dependencies
///

import React, { Component, PropTypes } from 'react';


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

GlobalLayout.propTypes = {
	children: PropTypes.node,
};

export default GlobalLayout;
