import { useDispatch } from "react-redux"
import uniqid from "uniqid";

// 1. Hämta dispatch funktion med useDispatch
// 2. Gör text fält med knapp i formulär
// 3. Lägg på eventhandler på submit event
// 4. Dispatcha en action { type: "CREATE_BOOK", payload: "Pippi Långstrump" }

const BooksInput = () => {
  const dispatch = useDispatch(); // 1

  // 3
  const submitHandler = event => {
    event.preventDefault();
    const book = event.target.book.value;
    dispatch({ type: "CREATE_BOOK", payload: { id: uniqid(), book } })
    // { id: 12yst3, book: "pippi" }
  }

  // 2 - 3
  return (
    <form onSubmit={submitHandler}>
      <input id="book" type="text" placeholder="Book name..." />
      <input type="submit" value="Save" />
    </form>
  )
}

export default BooksInput;