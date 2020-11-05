/* eslint-disable prettier/prettier */
import {connect} from 'react-redux';
import Content from './Content';

import {setLoading} from '../../Core/Loading/Actions';
import {getBooks} from '../../Core/Books/Actions';
import {setUser} from '../../Core/User/Actions';

const mapStateToProps = ({books, load, usr}) => {
  const {list} = books;
  const {loading} = load;
  const {user} = usr;
  return {
    list,
    loading,
    user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBooks: state => dispatch(getBooks(state)),
    setLoading: state => dispatch(setLoading(state)),
    setUser: state => dispatch(setUser(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
