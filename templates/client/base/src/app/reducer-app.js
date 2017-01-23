import {
  LOGGEDIN,
  DELETE_STORAGE,
  GET_STORAGE,
  SET_STORAGE
} from './constant-app';

const INITIAL_STATE = {
  appIsLoggedIn: false,
  appStorage : null
};

export default function appReducer (state = INITIAL_STATE, action) {
  const prevState = {...state};

  switch (action.type) {
    case DELETE_STORAGE:
      return {...state, appStorage: action.payload};

    case GET_STORAGE:
      return {...state, appStorage: action.payload};

    case LOGGEDIN:
      return {...state, appIsLoggedIn: action.payload};

    case SET_STORAGE:
      return {...state, appStorage: {...prevState.appStorage, ...action.payload}};

    default:
      return state;
  }
}
