import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import appReducer from './app/reducer-app';
import holidayReducers from './holiday/reducer-holiday';
import userReducer from './user/reducer-user';

const rootReducer = combineReducers({
  app               : appReducer,
  form              : formReducer,
  ...holidayReducers,
  users             : userReducer
});

export default rootReducer;
