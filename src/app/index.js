///
// Dependencies
///

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';


///
// Methods
///

function run() {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	);
}

export default {run};
