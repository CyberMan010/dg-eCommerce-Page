import "./dg-Carousel_style.scss"

export const DgCarousel = () => {
  return (
    <section className="carousel">
      <div className="carousel__container">
        <button className="carousel__arrow carousel__arrow--left">
          <img src="/arrow-left.svg" alt="Previous slide" />
        </button>

        <div className="carousel__content">
          <div className="carousel__text">
            <h1>
              <span className="primary-text">Discover</span> A Range Of Products
              <br />
              For <span className="primary-text">Gaming Professionals</span>
            </h1>
            <p>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
              Industry's Standard Dummy Text Ever Since The 1500s
            </p>
            <button className="carousel__button">Discover Now</button>
          </div>
        </div>

        <button className="carousel__arrow carousel__arrow--right">
          <img src="/arrow-right.svg" alt="Next slide" />
        </button>
      </div>
    </section>
  )
}

