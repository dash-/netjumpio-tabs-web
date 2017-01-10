import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../Root.dev';

it('renders without crashing', () => {
	const props = {};

	ReactDOM.render(
		React.createElement(Root, props),
		document.createElement('div')
	);
});
