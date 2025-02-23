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
          <div className="navbar__container">
            <button className="navbar__mobile-toggle" onClick={handleMenuToggle}>
              <img src="/category-2.svg" alt="Menu" />
            </button>

            <button className="navbar__categories">
              <img src="/category-2.svg" alt="Categories" />
              <span>All Categories</span>
              <img src="/arrow-down (1).svg" alt="Expand categories" />
            </button>

            <div className="navbar__links">
              <a href="#">Today's Deals</a>
              <a href="#">Brand Store</a>
              <a href="#">Electronics</a>
              <a href="#">Home & Kitchen</a>
              <a href="#">Fashion</a>
              <a href="#">Baby & Toys</a>
              <a href="#">Beauty Care</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`navbar__mobile-menu ${menuOpen ? "active" : ""}`}>
          <button className="navbar__mobile-close" onClick={handleMenuToggle}>
            ✖ Close
          </button>
          <div className="navbar__mobile-links">
            <a href="#">Today's Deals</a>
            <a href="#">Brand Store</a>
            <a href="#">Electronics</a>
            <a href="#">Home & Kitchen</a>
            <a href="#">Fashion</a>
            <a href="#">Baby & Toys</a>
            <a href="#">Beauty Care</a>
          </div>
        </div>
      </div>
    </nav>
    )
  }