import './dg-card_style.scss';

import { useState } from "react"

interface DgCardProps {
  title: string
  price: number
  originalPrice: number
  discountPercentage: number
  rating: number
  image: string
  isNew?: boolean
}

export const DgCard = ({
  title,
  price,
  originalPrice,
  discountPercentage,
  rating,
  image,
  isNew = false,
}: DgCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="product-card">
      <div className="product-card__image-section">
        {isNew && <span className="product-card__badge">New</span>}
        <button
          className={`product-card__wishlist ${isFavorite ? "is-active" : ""}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <img src="/heart (1).svg" alt="Add to wishlist" />
        </button>
        <img src={image || "/placeholder.svg"} alt={title} className="product-card__image" />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>

        <div className="product-card__price-section">
          <span className="product-card__current-price">{price.toFixed(2)} JD</span>
          <div className="product-card__discount-section">
            <span className="product-card__original-price">{originalPrice.toFixed(2)}</span>
            <span className="product-card__discount">{discountPercentage}% Off</span>
          </div>
        </div>

        <div className="product-card__footer">
          <div className="product-card__actions">
            <button className="product-card__action-btn">
              <img src="/arrange-circle-2 (1).svg" alt="Compare" />
            </button>
            <button className="product-card__action-btn">
              <img src="/bag (1).svg" alt="Add to cart" />
            </button>
          </div>
          <div className="product-card__rating">
            <img src="/star.svg" alt="" className="product-card__star" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  )
  }