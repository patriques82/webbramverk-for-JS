import { useState, useEffect } from "react";
import {
  Routes, Route, Link,
  useParams,
  useNavigate
} from "react-router-dom";

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const Profile = () => {
  return (
    <h1>Profile</h1>
  )
}

const Friends = () => {
  return (
    <h1>Friends</h1>
  )
}

const Books = ({ books }) => {
  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map(book => <li>{book.name}</li>)}
      </ul>
    </>
  )
}

const Book = ({ books }) => {
  const id = Number(useParams().id);
  const book = books.find(book => book.id === id)
  if (book === undefined) {
    return (
      <div>Sorry, no book with id {id}</div>
    )
  } else {
    return (
      <>
        <h1>Book</h1>
        <p>Id: {book.id}</p>
        <p>Name: {book.name}</p>
      </>
    )
  }
}

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" "}
      <Link to="/profile">Profile</Link>
      {" "}
      <Link to="/friends">Friends</Link>
      {" "}
      <Link to="/books">Books</Link>
    </div>
  )
}

const App = () => {
  const books = [
    { id: 1, name: "pippi" },
    { id: 2, name: "emil" },
    { id: 3, name: "bullerbyn" },
    { id: 4, name: "tjorven" },
  ]
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/books" element={<Books books={books} />} />
        <Route path="/books/:id" element={<Book books={books} />} />
      </Routes>
    </div>
  )
}

/* Without react-router

const Navbar = ({ setPage }) => {
  return (
    <div>
      <button onClick={() => setPage("HOME")}>Home</button>
      <button onClick={() => setPage("PROFILE")}>Profile</button>
      <button onClick={() => setPage("FRIENDS")}>Friends</button>
    </div>
  )
}

function App() {
  const [page, setPage] = useState("HOME");

  const content = () => {
    switch (page) {
      case "HOME":
        return <Home />;
      case "PROFILE":
        return <Profile />;
      case "FRIENDS":
        return <Friends />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {content()}
    </div>
  );
}

*/

export default App;
