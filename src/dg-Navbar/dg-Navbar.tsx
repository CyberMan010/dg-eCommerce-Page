import "./dg-Navbar_style.scss"
import { useState } from "react"

export const DgNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__container">
          <div className="navbar__start">
            {/* Mobile Menu Button */}
            <button className="navbar__mobile-toggle" onClick={handleMenuToggle}>
              <img src="/category-2.svg" alt="Menu" />
            </button>

            <div className="navbar__logo">
              <img src="/Logo.svg" alt="Safeer Logo" />
            </div>

            <div className="navbar__location">
              <img src="/location.svg" alt="Location icon" />
              <div className="navbar__location-text">
                <span>Deliver To</span>
                <strong>Jordan</strong>
              </div>
            </div>
          </div>

          <div className="navbar__search">
            <div className="navbar__search-select">
              <span>All</span>
              <img src="/arrow-down.svg" alt="Arrow down" />
            </div>
            <input type="text" placeholder="What are you looking for ?" className="navbar__search-input" />
            <button className="navbar__search-button">
              <img src="/search-normal.svg" alt="Search" />
            </button>
          </div>

          <div className="navbar__end">
            <button className="navbar__language">
              <img src="/language-square.svg" alt="Language" />
              <span>العربية</span>
            </button>

            <div className="navbar__auth">
              <img src="/profile-circle.svg" alt="Profile" />
              <span>Login / Sign up</span>
            </div>

            <div className="navbar__actions">
              <button className="navbar__action-button">
                <div className="navbar__notification">
                  <img src="/Ellipse 1.svg" alt="" />
                  <span>2</span>
                </div>
                <img src="/arrange-circle-2.svg" alt="Trade" />
              </button>

              <button className="navbar__action-button">
                <div className="navbar__notification">
                  <img src="/Ellipse 1.svg" alt="" />
                  <span>2</span>
                </div>
                <img src="/heart.svg" alt="Wishlist" />
              </button>

              <button className="navbar__action-button">
                <div className="navbar__notification">
                  <img src="/Ellipse 1.svg" alt="" />
                  <span>2</span>
                </div>
                <img src="/bag.svg" alt="Cart" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar__bottom">
        <div className="navbar__container">
          <button className="navbar__categories">
            <img src="/category-2.svg" />
            <p>All Categories</p>
            <img src="/arrow-down (1).svg" alt="Arrow down" />
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
      </nav>

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
    </header>
  )
}
