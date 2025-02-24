import { DgCard } from "./dg-card"
import './dg-CardsFramer_style.scss';

interface DgCardFramerProps {
    products: Array<{
        id: string
        title: string
        price: number
        originalPrice: number
        discountPercentage: number
        rating: number
        image: string
        isNew?: boolean
      }>
  }
  
  export const DgCardFramer = ({ products }: DgCardFramerProps) => {
    return (
        <div className="product-grid">
          <div className="product-grid__container">
            {products.map((product) => (
              <DgCard
                key={product.id}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                image={product.image}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      
    )
  }
  
  