///
// Dependencies
///

import Loopback from 'loopback-promised';
import pick from 'lodash/pick';

import apiConfig from './apiConfig';


///
// Default export
///

const instance = Loopback.createInstance(
	pick(apiConfig(), ['baseURL'])
);

export default instance;

