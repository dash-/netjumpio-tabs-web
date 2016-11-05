
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
			<div>
				<Link to="/directive">App List</Link>
			</div>
    );
  }
}

export default Header;

