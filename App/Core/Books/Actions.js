import {GET_BOOKS} from './Types';
import Server from '../../Config/Server';

/* export const setBooks = (state) => (dispatch) => {
  dispatch({type: SET_PUBLICACIONES, payload: state});
}; */

export const getBooks = (name) => async dispatch => {
  console.log("Nombre del libro", name)
  const listBooks = await fetch('http://'+Server.servidor+':'+Server.puerto+'/books')
      .then((response) => response.json())
      .then((books) => {
        
        if(name !== ''){
          //console.log("Buscando", name)
          const filterBooks = []
          books.forEach(element => {
            //console.log("elemento", element);
            //console.log("titulo", String(element.title).toLowerCase());
            //console.log("Nombre", String(name).toLowerCase())
            /* if(String(element.title).toLowerCase() >= String(name).toLowerCase()){
              console.log("elemento filtrado", element);
              filterBooks.push(element);
            } */
            if(String(element.title).toLowerCase().includes(String(name).toLowerCase())){
              console.log("elemento filtrado", element);
              filterBooks.push(element);
            }
          });
          return filterBooks;
        }
        else {
          return books;
        }
      })
      .catch((error) => {
        console.error(error);
      });
    
  Promise.all(listBooks)
  .then(list => {
    return dispatch({type: GET_BOOKS, payload: {list}})
  })  
}
