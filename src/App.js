import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "./Admin-Main-View/Index";
import IndexUser from "./User-Views/Index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/user" element={<IndexUser />} />
      </Routes>
    </Router>
  );
}

export default App;
