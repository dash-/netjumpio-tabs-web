///
// Dependencies
///

import forEach from 'lodash/forEach';


///
// Exports
///

export function toFormData(data) {
	const formData = new FormData();

	forEach(data, (value, key) => {
		formData.append(key, value);
	});

	return formData;
}

