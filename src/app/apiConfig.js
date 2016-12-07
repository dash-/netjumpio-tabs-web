import assign from 'lodash/assign';
import omit from 'lodash/omit';


// TODO - All variables should be moved to server side ENV vars
//        and passed to client
const defaultConfig = {
	baseURL: 'http://localhost:4002/api',
	headers: {
		'x-ibm-client-id': 'default',
		'x-ibm-client-secret': 'SECRET',
	},
}

function apiConfig(config = {}) {
	const headers = assign(
		{}, defaultConfig.headers, config.headers
	);

	return assign(
		{headers},
		omit(defaultConfig, ['headers']), 
		omit(config, ['baseURL', 'headers'])
	);
};

export default apiConfig;

