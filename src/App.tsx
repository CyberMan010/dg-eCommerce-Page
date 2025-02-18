import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DgNavbar } from './dg-Navbar/dg-Navbar'
import './App.scss';
import { Testing } from "./testing";

function App() {

  return (
    <Router>
    <div className="App">
      <DgNavbar />
      <Routes>
        <Route path="/" element={<Testing />} />
        <Route path="/about" element={<Testing />} />
        <Route path="/portfolio" element={<Testing />} />
        <Route path="/contact" element={<Testing />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
