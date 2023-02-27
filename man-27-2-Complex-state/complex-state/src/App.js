import { useState } from 'react'
import "./main.css";

// Conditional rendering
const NewBook = ({ newBook, setNewBook, setBooks }) => {
  return (
    <div className="new-book">
      <label for="bookname">Book</label>
      <input
        id="bookname"
        type="text"
        value={newBook.name}
        onChange={(event) => setNewBook({ ...newBook, name: event.target.value })}
      ></input>
      <label for="authorname">Author</label>
      <input
        id="authorname"
        type="text"
        value={newBook.author}
        onChange={(event) => setNewBook({ ...newBook, author: event.target.value })}
      ></input>
      <button onClick={() => setBooks(prev => [...prev, newBook])}>Save</button>
    </div>
  )
}

const BookList = ({ books }) => {
  return (
    <div className="books">
      <ul>
        {books.map(book => <li>{book.name}<br />{book.author}</li>)}
      </ul>
    </div>
  )
}

const App = () => {
  const [newBook, setNewBook] = useState({ name: "", author: "" })
  const [books, setBooks] = useState([]);

  return (
    <div className="container">
      <NewBook newBook={newBook} setNewBook={setNewBook} setBooks={setBooks} />
      <BookList books={books} />
    </div>
  )
}

/* Repetition
function App() {
  const [clickInfo, setClickInfo] = useState({
    left: 0,
    right: 0,
    all: []
  });

  const leftClickHandler = () => {
    setClickInfo(({ right, left, all }) => ({
      right,
      left: left + 1,
      all: all.concat('L')
    }));
  }

  const rightClickHandler = () => {
    setClickInfo(({ right, left, all }) => ({
      left,
      right: right + 1,
      all: all.concat('R')
    }));
  }

  return (
    <div>
      {clickInfo.left}
      <button onClick={leftClickHandler}>left</button>
      <button onClick={rightClickHandler}>right</button>
      {clickInfo.right}
      <p>{clickInfo.all}</p>
    </div>
  );
}

*/

export default App;
