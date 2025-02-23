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
        {/* Existing top navbar code */}
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

        {/* New bottom navbar section */}
        <div className="navbar__bottom">
          <div className="navbar__category-button">
            <img src="/category-2.svg" alt="Categories" className="navbar__category-icon" />
            <span className="navbar__category-text">All Categories</span>
            <img src="/arrow-down (1).svg" alt="Expand" className="navbar__category-arrow" />
          </div>

          <div className="navbar__links-group">
            <a href="#" className="navbar__link">
              Today's Deals
            </a>
            <a href="#" className="navbar__link">
              Brand Store
            </a>
            <a href="#" className="navbar__link">
              Electronics
            </a>
            <a href="#" className="navbar__link">
              Home & Kitchen
            </a>
            <a href="#" className="navbar__link">
              Fashion
            </a>
            <a href="#" className="navbar__link">
              Baby & Toys
            </a>
            <a href="#" className="navbar__link">
              Beauty Care
            </a>
          </div>
        </div>
      </div>
    </nav>
    )
  }