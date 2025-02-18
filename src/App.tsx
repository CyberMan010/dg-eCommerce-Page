import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DgNavbar } from './dg-Navbar/dg-Navbar'
import './App.scss';
import { Testing } from "./testing";

function App() {

  return (
    <Router>
    <div className="App">
      <DgNavbar />
    </div>
  </Router>
  )
}

export default App
