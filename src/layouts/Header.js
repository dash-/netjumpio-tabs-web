
import React, { Component } from 'react';
import { Link } from 'react-router';

import TabSetsLogo from '../elements/TabSetsLogo';

class Header extends Component {
  render() {
    return (
    	<div className="app-header-container">
				<div className="app-header">
					<TabSetsLogo />
					<h3 className="title">TabSets</h3>
					<div className="links">
						<Link to="/tabsets/">Example Link</Link>
					</div>
				</div>
				<div className="app-header-spacer"></div>
			</div>
    );
  }
}

export default Header;

