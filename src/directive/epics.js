const INCREMENT = 'INCREMENT';
const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

const increment = () => ({ type: INCREMENT });

const incrementIfOddEpic = function(action$, store) {
	return (action$
		.ofType(INCREMENT_IF_ODD)
		.filter(() => store.getState().counter % 2 === 0)
		.map(increment)
	);
}

export default incrementIfOddEpic;

