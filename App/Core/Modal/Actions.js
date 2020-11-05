import {SET_MODAL} from './Types';

export const setModal = (state) => (dispatch) => {
  dispatch({type: SET_MODAL, payload: state});
};
