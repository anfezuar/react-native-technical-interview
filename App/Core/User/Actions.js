import {SET_USER} from './Types';

export const setUser = (state) => (dispatch) => {
  dispatch({type: SET_USER, payload: state});
};
