import {
  REMOVE_[[[upperCaseName]]]_FROM_LIST,
  SELECT_[[[upperCaseName]]],
  SET_[[[upperCaseName]]]S,
  SET_[[[upperCaseName]]],
  UPDATE_[[[upperCaseName]]]
} from './constant-[[[lowerCaseName]]]';

import { [[[upperCaseName]]]_INITIAL_STATE } from './state-[[[lowerCaseName]]]';


export default function [[[lowerCaseName]]]Reducer (state = [[[upperCaseName]]]_INITIAL_STATE, action) {
  switch (action.type) {
    case REMOVE_[[[upperCaseName]]]_FROM_LIST:
      return { ...state, [[[lowerCaseName]]]sAll: action.payload };

    case SET_[[[upperCaseName]]]S:
      return { ...state, [[[lowerCaseName]]]sAll: action.payload };

    case SELECT_[[[upperCaseName]]]:
      return { ...state, selected[[[capitalName]]]: action.payload };

    case SET_[[[upperCaseName]]]:
      return { ...state, [[[lowerCaseName]]]: action.payload };

    case UPDATE_[[[upperCaseName]]]:
      return { ...state, [[[lowerCaseName]]]: action.payload };

    default:
      return state;
  }
}
