import { useSelector, useDispatch } from "react-redux"
import { goToCreateBook, goToListTodos } from "../reducers/viewReducer";

const ListBooks = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {books.map(book => <li key={book.id}>
          <p>Name: {book.name}</p>
          <p>Author: {book.author}</p>
        </li>)}
      </ul>
      <button onClick={() => dispatch(goToListTodos())}>List Todos View</button>
      <button onClick={() => dispatch(goToCreateBook())}>Create Book View</button>
    </div>
  )
}

export default ListBooks;