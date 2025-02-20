import { useState } from "react"
import "./dg-Navbar_style.scss"

export const DgNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }


    return (
      <nav className="navbar">
        <div className="navbar__container">
          <img src="/Logo.svg" alt="Safeer" className="navbar__logo" />
  
          <div className="navbar__location">
            <img src="/location.svg" alt="Location icon" />
            <div className="navbar__location-text">
              <span>Deliver To</span>
              <strong>Jordan</strong>
            </div>
          </div>
  
          <div className="navbar__search">
            <div className="navbar__search-select">
              <span>All</span>
              <img src="/arrow-down.svg" alt="Select category" />
            </div>
            <input type="text" placeholder="What are you looking for?" className="navbar__search-input" />
            <button className="navbar__search-button">
              <img src="/search-normal.svg" alt="Search" />
            </button>
          </div>
  
          <button className="navbar__language">
            <img src="/language-square.svg" alt="Language" />
            <span>العربية</span>
          </button>
  
          <button className="navbar__auth">
            <img src="/profile-circle.svg" alt="Profile" />
            <span>Login / Sign up</span>
          </button>
  
          <div className="navbar__actions">
            <button className="navbar__action-button">
              <div className="navbar__notification">2</div>
              <img src="/arrange-circle-2.svg" alt="Trade" />
            </button>
  
            <button className="navbar__action-button">
              <div className="navbar__notification">2</div>
              <img src="/heart.svg" alt="Wishlist" />
            </button>
  
            <button className="navbar__action-button">
              <div className="navbar__notification">2</div>
              <img src="/bag.svg" alt="Cart" />
            </button>
          </div>
        </div>
      </nav>
    )
  }