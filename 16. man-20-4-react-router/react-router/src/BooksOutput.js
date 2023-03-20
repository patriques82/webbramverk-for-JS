import { useSelector, useDispatch } from "react-redux"; // 1

// 1. Importera useSelector för att hämta state från react-redux
// 2. Hämta state med useSelector från redux
// 3. Visa böckerna i state i <li>

const BooksOutput = () => {
  const books = useSelector(state => state); // 2
  const dispatch = useDispatch();

  const deleteHandler = id => {
    dispatch({ type: "REMOVE_BOOK", payload: id })
  }

  return (
    <ul>
      {books.map(({ id, book }) => (
        <li key={id}>
          {book}
          <button onClick={() => deleteHandler(id)}>x</button>
        </li>
      )) /* 3 */}
    </ul>
  )
}

export default BooksOutput;