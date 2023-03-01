import { useState } from 'react'
import "./main.css";

// Hemläxa till onsdag

// 1. En App containaer
// 2. En InputComponent för input (namn och ålder)
//    Spara knapp (när knappen trycks ska det sparas)
// 3. En OutputComponent för visa namn och ålder

// BONUS
// 4. Visa lista av personer som ska visas med ålder och namn istället för bara en

const InputComponent = ({ age, setAge, name, setName }) => {
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <input type="number" value={age} onChange={e => setAge(e.target.value)}></input>
    </div>
  )
}

const OutputComponent = ({ age, name }) => {
  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}

const App = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  return (
    <>
      <InputComponent name={name} setName={setName} age={age} setAge={setAge} />
      <OutputComponent name={name} age={age} />
    </>
  )
}



/* Toilet example
const Enter = ({ setActivePage }) => {
  return (
    <div className="enter">
      <p>Welcome</p>
      <button onClick={() => setActivePage("CODE")}>Code</button>
    </div>
  )
}

const Disallow = ({ setActivePage }) => {
  return (
    <div className="disallow">
      <p>Sorry, only for guests</p>
      <button onClick={() => setActivePage("CODE")}>Try again</button>
    </div>
  )
}

const Code = ({ code, codeHandler }) => {
  return (
    <div>
      <button onClick={() => codeHandler(code + "1")}>1</button>
      <button onClick={() => codeHandler(code + "2")}>2</button>
      <button onClick={() => codeHandler(code + "3")}>3</button>
      <button onClick={() => codeHandler(code + "4")}>4</button>
    </div>
  )
}

// Container
const Container = () => {
  const secretCode = "2341"
  const [activePage, setActivePage] = useState("CODE")
  const [code, setCode] = useState("")

  const codeHandler = (currentCode) => {
    if (currentCode.length > 3) {
      if (currentCode === secretCode) {
        setActivePage("ENTER")
      } else {
        setActivePage("DISALLOW")
      }
      setCode(""); // Blank för ny input
    } else {
      setCode(currentCode) // Uppdatera bara
    }
  }

  if (activePage === "CODE") {
    return <Code code={code} codeHandler={codeHandler} />
  } else if (activePage === "ENTER") {
    return <Enter setActivePage={setActivePage} />
  } else {
    return <Disallow setActivePage={setActivePage} />
  }
}
*/

/* Name display
const Home = ({ setActivePage, persons, setUser }) => {

  const clickHandler = (person) => {
    setActivePage("USER");
    setUser(person);
  }

  return (
    <div>
      <ul>
        {persons.map(person => (
          <li>
            <a href="#" onClick={() => clickHandler(person)}>{person}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setActivePage("EDIT")}>Edit</button>
    </div>
  )
}

const Edit = ({ setActivePage, setPersons }) => {
  const [name, setName] = useState("");
  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const saveHandler = () => {
    setActivePage("HOME");
    setPersons(prev => [...prev, name])
  }

  return (
    <div>
      <input type="text" value={name} onChange={nameHandler}></input>
      <button onClick={saveHandler}>Save</button>
    </div>
  )
}

const User = ({ setActivePage, user }) => {
  return (
    <div>
      <p>{user}</p>
      <button onClick={() => setActivePage("HOME")}>Home</button>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [activePage, setActivePage] = useState("HOME");
  const [user, setUser] = useState("");

  console.log("rerender")

  switch (activePage) {
    case "HOME":
      return <Home setActivePage={setActivePage} setUser={setUser} persons={persons} />;
    case "EDIT":
      return <Edit setActivePage={setActivePage} setPersons={setPersons} />
    default:
      return <User setActivePage={setActivePage} user={user} />
  }

}
*/

/* Conditional rendering
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

*/

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
