import { useState } from "react";
import {
  Routes, Route, Link
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

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {" "}
      <Link to="/profile">Profile</Link>
      {" "}
      <Link to="/friends">Friends</Link>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
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
