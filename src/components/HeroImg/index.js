import {Link} from 'react-router-dom'

import './index.css'

const HeroImg = props => {
  const {heroClass, heroImg, title, text, url, btnClass, btnText, video} = props
  return (
    <div className={heroClass}>
      {video === 'true' ? (
        <video
          src={heroImg}
          muted
          loop
          autoPlay
          style={({height: '100vh'}, {width: '100vw'})}
        />
      ) : (
        <img src={heroImg} alt="travel" />
      )}
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={url}>
          <button className={btnClass} type="button">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  )
}
export default HeroImg
