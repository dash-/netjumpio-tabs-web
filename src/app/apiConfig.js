
import _ from 'lodash';


// TODO - All variables should be moved to server side ENV vars
//        and passed to client
const defaultConfig = {
	baseURL: 'http://localhost:4002/api/',
	headers: {
		'x-ibm-client-id': 'default',
		'x-ibm-client-secret': 'SECRET',
	},
}

function apiConfig(config = {}) {
	const headers = _.assign(
		{}, defaultConfig.headers, config.headers
	);

	return _.assign(
		{headers},
		_.omit(defaultConfig, ['headers']), 
		_.omit(config, ['baseUrl', 'headers'])
	);
};

export default apiConfig;

