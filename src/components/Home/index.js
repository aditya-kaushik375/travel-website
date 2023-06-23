import HeroImg from '../HeroImg'
import Footer from '../Footer'
import Destination from '../Destination'
import RecentTrip from '../RecentTrip'
import './index.css'

const Home = () => (
  <>
    <HeroImg
      heroClass="hero"
      heroImg="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
      title="Your Journey Your Story"
      text="Travel With Us"
      btnText="Travel Plan"
      url="/service"
      btnClass="show"
    />

    <Destination />
    <RecentTrip />
    <Footer />
  </>
)

export default Home
