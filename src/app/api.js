///
// Dependencies
///

import Loopback from 'loopback-promised';


///
// Configuration
///

const baseURL = process.env.API_BASE_URL;

///
// Exports
///

export {baseURL};

const instance = Loopback.createInstance({baseURL});

export default instance;

