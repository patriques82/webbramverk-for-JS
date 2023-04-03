import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import ChatRoom from "./ChatRoom"
import "./main.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:roomid" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;