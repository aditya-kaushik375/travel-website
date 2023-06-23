import './index.css'

const BookingItem = props => {
  const {bookingDetails} = props
  const {text, title, offer, img} = bookingDetails
  return (
    <>
      <li className="booking-item">
        <img src={img} alt="booking" className="booking-img" />
        <div>
          <h3>{title}</h3>
          <h4>{text}</h4>
          <p>{offer}</p>
          <button className="booking-btn" type="button">
            Book Now
          </button>
        </div>
      </li>
    </>
  )
}

export default BookingItem
