///
// Dependencies
///

import Loopback from 'loopback-promised';


///
// Default export
///

const instance = Loopback.createInstance({
	baseURL: process.env.API_BASE_URL
});

export default instance;

