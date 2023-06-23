import ReviewCard from '../ReviewCard'
import HeroImg from '../HeroImg'
import WhyUs from '../WhyUs'
import Footer from '../Footer'
import './index.css'

const About = () => (
  <>
    <HeroImg
      heroClass="heroAbout"
      heroImg="https://img.freepik.com/free-photo/abstract-green-grunge-background_24972-283.jpg?w=826&t=st=1686925413~exp=1686926013~hmac=13e7ea4354c64fd3af357553694e455471ce7ae141659092239e535149d18b6d"
      title="About Travy"
      text=""
      btnText=""
      url="/"
      btnClass=""
    />
    <div>
      <h2 style={{textAlign: 'center'}}>Why Travy</h2>
      <WhyUs />
    </div>
    <ReviewCard />

    <Footer />
  </>
)

export default About
