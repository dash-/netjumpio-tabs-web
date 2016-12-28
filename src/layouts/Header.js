///
// Dependencies
///

import React, { Component } from 'react';

import TabSetsLogo from '../elements/TabSetsLogo';
import ProfilePanelButton from '../profile/ProfilePanelButton';


///
// View
///

class Header extends Component {
  render() {
    return (
    	<div className="app-header-container dark-theme">
				<div className="app-header">
					<TabSetsLogo />
					<h3 className="title">TabSets</h3>

					<div className="extras">
						<ProfilePanelButton />
					</div>
				</div>
				<div className="app-header-spacer"></div>
			</div>
    );
  }
}

export default Header;

