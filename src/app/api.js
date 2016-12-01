///
// Dependencies
///

import Loopback from 'loopback-promised';
import _ from 'lodash';

import apiConfig from './apiConfig';


///
// Default export
///

const instance = Loopback.createInstance(
	_.pick(apiConfig(), ['baseURL'])
);

export default instance;

