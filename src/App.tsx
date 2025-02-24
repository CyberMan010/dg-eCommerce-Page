import { DgNavbar } from './dg-Navbar/dg-Navbar'
import './App.scss';
import { DgCarousel } from "./dg-Carousel/dg-Carousel";
import { DgToolsbar } from './dg-Toolsbar/dg-Toolsbar';

function App() {

  return (
    <div>
    <div className="App">
      <DgNavbar />
    <DgCarousel />
    <DgToolsbar />
    </div>
    </div>
  
  )
}

export default App
