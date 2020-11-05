/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/Loading/Actions';
import {getBooks} from '../../Core/Books/Actions';
import {setUser} from '../../Core/User/Actions';
import {setModal} from '../../Core/Modal/Actions';

const mapStateToProps = ({books, load, usr, mdal}) => {
  const {list} = books;
  const {loading} = load;
  const {user} = usr;
  const {modal} = mdal;
  return {
    list,
    loading,
    user,
    modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks: state => dispatch(getBooks(state)),
    setLoading: state => dispatch(setLoading(state)),
    setUser: state => dispatch(setUser(state)),
    setModal: state => dispatch(setModal(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
