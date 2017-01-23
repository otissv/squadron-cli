import * as app from './app/action-app';
import * as auth from './auth/action-auth';
import holidayActions from './holiday/action-holiday';
import * as user from './user/action-user';


export default {
  ...app,
  ...auth,
  ...holidayActions,
  ...user
};
