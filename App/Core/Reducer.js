import {combineReducers} from 'redux';

import Loading from './Loading/Reducer';
import Books from './Books/Reducer';
import User from './User/Reducer';
import Modal from './Modal/Reducer';

export default () =>
  combineReducers({
    load: Loading,
    books: Books,
    usr: User,
    mdal: Modal,
  });
