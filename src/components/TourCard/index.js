import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const DestinationCard = props => {
  const {tour} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="tour-slider">
      <Slider {...settings}>
        {tour.map(each => (
          <div>
            <div
              style={{
                backgroundImage: `url(${each.url})`,
              }}
              className="tour-card"
            >
              <div className="description">
                <h2>{each.title}</h2>
                <h4>{each.text}</h4>
                <button type="button">
                  <a href="/contact">Book Now</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default DestinationCard
