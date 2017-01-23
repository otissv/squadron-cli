import app from './app/state-app';
import holidayStates, { holidayInitialStates } from './holiday/state-holiday';
import user, { USER_INITIAL_STATE } from './user/state-user';

export const initialState = {
  ...USER_INITIAL_STATE,
  ...holidayInitialStates
};

export default function mapStateToProps (state) {
  return {
    ...app(state),
    ...holidayStates(state),
    ...user(state)
  };
}
