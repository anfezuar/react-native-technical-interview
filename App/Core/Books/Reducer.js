import {createReducer} from '../Config';
import {GET_BOOKS} from './Types';

const initialState = {
  list: [],
};

/* const setBooks = (state = initialState, {payload}) => {
  return {
    ...state,
    list: payload,
  };
}; */

const getBooks = (state = initialState, {payload}) => {
  const {list} = payload;
  let data = [...list];

  return {
    ...state,
    list: data,
  }
}

/* const descriptor = {
  [SET_BOOKS]: setBooks,
}; */
const descriptor = {
  [GET_BOOKS]: getBooks,
};

export default createReducer(initialState, descriptor);
