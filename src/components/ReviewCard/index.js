import {Component} from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const initialReview = [
  {
    title: 'Viraj Modi',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    img:
      'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=900&t=st=1687255383~exp=1687255983~hmac=9ba06c4be76fc940125464f5a02c651be8df3d62ce8abc4a96d93d91dc8e7ac5',
  },
  {
    title: 'Mrs Jennifier',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    img:
      'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=900&t=st=1687273604~exp=1687274204~hmac=96fdae7052149e4d13f607579c7c14c541cb188e0ece0e034479251e0791a036',
  },
  {
    title: 'Anant Mahajan',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    img:
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1687273818~exp=1687274418~hmac=99156daaeb182ecb97436823c508e8b7d3e001d7efe11b8f80095d7cb36d21ac',
  },
  {
    title: 'Shreya Jain',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
    img:
      'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1687273860~exp=1687274460~hmac=3f1eda89f9a95b14e1417893a1738fbcfa3082aa908e2a9593f05f7377ec0101',
  },
]

class ReviewCard extends Component {
  state = {
    review: initialReview,
    title: '',
    text: '',
    img: '',
    display: false,
  }

  onAddTitle = event => {
    this.setState({title: event.target.value})
  }

  onAddReviewText = event => {
    this.setState({text: event.target.value})
  }

  onAddUrl = event => {
    this.setState({img: event.target.value})
  }

  onAddClick = () => {
    this.setState(prevState => ({
      display: !prevState.display,
    }))
  }

  onAddReview = event => {
    event.preventDefault()
    const {title, text, img} = this.state
    const newReview = {
      title,
      text,
      img,
    }
    this.setState(prevState => ({
      review: [...prevState.review, newReview],
      title: '',
      text: '',
      img: '',
      display: false,
    }))
  }

  render() {
    const {review, display} = this.state
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <>
        <div className="review-slider">
          <Slider {...settings}>
            {review.map(each => (
              <div className="review-card">
                <div className="review-left">
                  <img src={each.img} alt="review" className="review" />
                </div>
                <div className="review-right">
                  <h4>{each.title}</h4>
                  <p>{each.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button type="button" className="add-btn" onClick={this.onAddClick}>
          Add Review
        </button>
        {display ? (
          <form onSubmit={this.onAddReview} className="form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={this.onAddTitle} />
            <label htmlFor="url">ImageUrl:</label>
            <input type="url" id="url" onChange={this.onAddUrl} />
            <label htmlFor="msg">Review:</label>
            <textarea
              rows="6"
              cols="10"
              placeholder="Enter Your Review...."
              onChange={this.onAddReviewText}
            />
            <button type="submit" className="review-submit">
              Submit Review
            </button>
          </form>
        ) : null}
      </>
    )
  }
}

export default ReviewCard
