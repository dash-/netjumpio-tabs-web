
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
    	<div className="app-header-container">
				<div className="app-header">
					<Link to="/directive">App List</Link>
				</div>
				<div className="app-header-spacer"></div>
			</div>
    );
  }
}

export default Header;

