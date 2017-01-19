///
// Dependencies
///

import Loopback from 'loopback-promised';


///
// Configuration
///

const baseURL = 'http://mock.example.com';


///
// Default export
///

export {baseURL};

const instance = Loopback.createInstance({baseURL});

export default instance;

