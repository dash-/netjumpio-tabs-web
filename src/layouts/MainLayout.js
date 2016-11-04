// Core dependencies
import React, { Component } from 'react';
import Header from './Header';

class MainLayout extends Component {
  render() {
    return (
    	<div>
    		<Header />
				{this.props.children}
			</div>
    );
  }
}

export default MainLayout;

