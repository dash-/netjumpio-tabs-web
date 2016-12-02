///
// Dependencies
///

import * as actions from './actions';


///
// Main
///

export default function buildFormSubmitter(dispatch, formName) {
	return (evt) => {
		dispatch(actions.submitForm(formName));
		evt.preventDefault();
		return false;
	};
}
