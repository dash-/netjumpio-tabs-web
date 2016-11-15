import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

function run() {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	);
}

const app = {run: run};

export default app;
