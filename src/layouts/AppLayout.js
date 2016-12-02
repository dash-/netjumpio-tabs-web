// Core dependencies
import React, { Component } from 'react';

import Col from 'react-bootstrap/lib/Col';

import Header from './Header';
import SidePanel from './SidePanel';

class AppLayout extends Component {
  render() {
    return (
    	<div className="app-layout">
    		<Header />
    		<Col md={8} className="main-panel">
					{this.props.children}
				</Col>
				<Col md={4} className="side-panel">
					<SidePanel />
				</Col>
			</div>
    );
  }
}

export default AppLayout;

