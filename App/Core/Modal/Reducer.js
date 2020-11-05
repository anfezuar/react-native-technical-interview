import {createReducer} from '../Config';
import {SET_MODAL} from './Types';

const initialState = {
  modal: false,
};

const setModal = (state = initialState, {payload}) => {
  return {
    ...state,
    modal: payload,
  };
};

const descriptor = {
  [SET_MODAL]: setModal,
};

export default createReducer(initialState, descriptor);
