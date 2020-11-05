import {createReducer} from '../Config';
import {SET_USER} from './Types';

const initialState = {
  user: null,
};

const setUser = (state = initialState, {payload}) => {
  return {
    ...state,
    user: payload,
  };
};

const descriptor = {
  [SET_USER]: setUser,
};

export default createReducer(initialState, descriptor);
