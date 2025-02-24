import { DgNavbar } from './dg-Navbar/dg-Navbar'
import './App.scss';
import { DgCarousel } from "./dg-Carousel/dg-Carousel";
import { DgToolsbar } from './dg-Toolsbar/dg-Toolsbar';
import { DgCardFramer } from './dg-Card/dg-CardsFramer';


//
const products = [
  {
    id: "1",
    title: "Alpha a7R III Full Frame Mirrorless Camera...",
    price: 174.99,
    originalPrice: 250.0,
    discountPercentage: 15,
    rating: 4.5,
    image: "Layer 2 2.svg",
    isNew: true,
  },
  {
    id: "2",
    title: "Alpha a7R III Full Frame Mirrorless Camera...",
    price: 174.99,
    originalPrice: 250.0,
    discountPercentage: 15,
    rating: 4.5,
    image: "Layer 2 2.svg",
    isNew: false,
  },
  {
    id: "3",
    title: "Alpha a7R III Full Frame Mirrorless Camera...",
    price: 174.99,
    originalPrice: 250.0,
    discountPercentage: 15,
    rating: 4.5,
    image: "Layer 2 2.svg",
    isNew: false,
  },
  {
    id: "4",
    title: "Alpha a7R III Full Frame Mirrorless Camera...",
    price: 174.99,
    originalPrice: 250.0,
    discountPercentage: 15,
    rating: 4.5,
    image: "Layer 2 2.svg",
    isNew: false,
  },
]
//


function App() {

  return (
    <div>
    <div className="App">
      <DgNavbar />
    <DgCarousel />
    <DgToolsbar />
    <DgCardFramer products={products} />
   
    </div>
    </div>
  
  )
}

export default App
