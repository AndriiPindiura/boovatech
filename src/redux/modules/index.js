import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import boovatech from './boovatech';
import userManager from './user';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  boovatech,
  userManager,
  routing,
});

export default rootReducer;
