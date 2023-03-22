import { Routes, Route } from "react-router-dom"

import Search from "./Search";
import Result from "./Result";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
