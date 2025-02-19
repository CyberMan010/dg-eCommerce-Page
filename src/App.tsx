import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DgNavbar } from './dg-Navbar/dg-Navbar'
import './App.scss';
import { DgCarousel } from "./dg-Carousel/dg-Carousel";

function App() {

  return (
    <Router>
    <div className="App">
      <DgNavbar />
    <DgCarousel />
    </div>
  </Router>
  )
}

export default App
