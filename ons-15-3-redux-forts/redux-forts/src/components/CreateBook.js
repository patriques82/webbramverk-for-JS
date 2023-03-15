import { useDispatch } from "react-redux";
import { createBook } from "../reducers/booksReducer";
import { goToListBooks } from "../reducers/viewReducer";


const CreateBook = () => {
  const dispatch = useDispatch();

  const saveBook = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const author = event.target.author.value;
    dispatch(createBook(name, author))
    dispatch(goToListBooks())
  }

  return (
    <form onSubmit={saveBook}>
      Name: <input id="name" type="text"></input>
      <br />
      Author: <input id="author" type="text"></input>
      <br />
      <button type="submit">Save Todo</button>
    </form>
  )
}

export default CreateBook;