
import axios from 'axios';
import { Observable } from 'rxjs';
import * as actions from './actions';

const retrieveDirsList = (action$, store) => (
	action$.ofType(actions.FETCH_DIRS_START)
		.debounceTime(500)
		.switchMap(action => (
			Observable.fromPromise(axios.get('/data/dirs.json'))
				.map(payload => ({
					type: actions.FETCH_DIRS_FULFILLED,
					payload
				}))
		))
);

export default retrieveDirsList;

