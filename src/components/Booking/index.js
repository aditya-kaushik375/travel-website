import {Component} from 'react'

import TabItem from '../TabItem'

import HeroImg from '../HeroImg'

import BookingItem from '../BookingItem'

import Footer from '../Footer'

import './index.css'

const booking = [
  {
    id: 'FLIGHT',
    title: 'Qatar Airways',
    text: 'Incredible Offer by Qatar Airways:Upto 10% OFF',
    offer: 'on flights from India to USA,Europe and Africa',
    img:
      'https://img.freepik.com/free-photo/view-air-plane-wing-during-take-off-landing_1359-372.jpg?w=900&t=st=1687321954~exp=1687322554~hmac=09cca31523740bb2d728c4a6d6008fc8a7630cb2a112166caccbf9d31494be3f',
  },
  {
    id: 'FLIGHT',
    title: 'LAUNCHED: New Direct Flights by IndiGo',
    text: 'between India and Europe',
    offer: 'Early Birds get 10% Discount',
    img:
      'https://img.freepik.com/free-photo/big-passenger-airplane-drives-along-runway-airport_93675-133600.jpg?w=900&t=st=1687322113~exp=1687322713~hmac=77d27d4c6baaf2990419e38314dc8cf9f661537875c524faaf018b33c0c3a4b9',
  },
  {
    id: 'FLIGHT',
    title: 'DISCOUNT VOUCHER: Vistras Airways',
    text: 'Get a Discount Voucher Worth ₹1500',
    offer: 'Book international flights using HSBC/YES Bank Credit Card.',
    img:
      'https://img.freepik.com/free-photo/online-booking-traveling-plane-flight-concept_53876-133675.jpg?w=826&t=st=1687322310~exp=1687322910~hmac=76dbac568dbb0564cab4c6d28ab642baad81cb68f3b37f69d0ee8c03c3bd30ef',
  },
  {
    id: 'FLIGHT',
    title: 'EXTRA BAGGAGE: Indian Airways',
    text: 'Carry extra Baggage @ 20% Lower Prices!',
    offer: 'Limited Offer book using HDFC CREDIT CARD ',
    img:
      'https://img.freepik.com/free-photo/plane-airport-sunset_268835-3075.jpg?w=900&t=st=1687322469~exp=1687323069~hmac=8a332bf3c3f49877d4ce62e1079c34de5d5fea7b56c1bb00d40d49f2b577d231',
  },
  {
    id: 'FLIGHT',
    title: 'ZERO CANCELLATION: DOMESTIC FLIGHTS ',
    text:
      'Get 100% refund in case you cancel your flight upto 24hrs before journey.',
    offer: 'No questions asked',
    img:
      'https://img.freepik.com/free-photo/airport-terminal_1417-1461.jpg?w=900&t=st=1687322959~exp=1687323559~hmac=4d2c4b9d1cb1cd350dacc4dce3e9037a186abd9674aaf42d0bddff965b8233af',
  },
  {
    id: 'FLIGHT',
    title: 'ZERO CANCELLATION: DOMESTIC FLIGHTS ',
    text:
      'Get 100% refund in case you cancel your flight upto 24hrs before journey.',
    offer: 'No questions asked',
    img:
      'https://img.freepik.com/free-photo/airport-terminal_1417-1461.jpg?w=900&t=st=1687322959~exp=1687323559~hmac=4d2c4b9d1cb1cd350dacc4dce3e9037a186abd9674aaf42d0bddff965b8233af',
  },
  {
    id: 'HOTEL',
    title: 'Taj Hotels',
    text: 'Get FLAT 20% Savings + EXTRA 5% on Select Cards',
    offer: 'Enjoy Memorable Stays at the Taj',
    img:
      'https://img.freepik.com/free-photo/night-view-skyscraper-port-olimpic_1398-428.jpg?w=360&t=st=1687323194~exp=1687323794~hmac=22a6f20f801c54a51e0181f6a9ba1cdabfafcedc3a2a5d6797db6cf9cbe5f261',
  },
  {
    id: 'HOTEL',
    title: 'DOUBLE TREAT: CGH EARTH',
    text: 'Grab upto 20% OFF on your Stay',
    offer: 'Meal Upgrade on Booking 3 Nights.',
    img:
      'https://img.freepik.com/free-photo/hotel-entrance-sign_1101-845.jpg?w=900&t=st=1687323384~exp=1687323984~hmac=ae6f8c7beb9a74724a5b41b34411e0cead86a240b8a4e34c0673c1a3bd9782f1',
  },
  {
    id: 'HOTEL',
    title: 'ENJOY Upto 40% OFF',
    text: 'on WelcomHeritage Hotels',
    offer: 'Valid from 1st to 30th June.',
    img:
      'https://img.freepik.com/free-photo/old-residential-building-sunny-day-barcelona-spain_1268-18021.jpg?w=360&t=st=1687323564~exp=1687324164~hmac=6fb9ad5efbd7b0a9fc8172f6a2588e530e53a23c1cb653f322f6f1338882a480',
  },
  {
    id: 'HOTEL',
    title: 'Grab FLAT 14% OFF',
    text: 'on 3,4 and 5 Star Stays in India.',
    offer: 'Treat yourself to a refreshing , luxurious break.',
    img:
      'https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?w=740&t=st=1687323707~exp=1687324307~hmac=20c35e082e954826b0671c6016cf7850e6a7e7e74d18f8807d7ac8f3996bd039',
  },
  {
    id: 'HOTEL',
    title: 'Travel Plans Can Change.',
    text: 'Book Hotels now and Pay Later',
    offer: 'Terms and Condition Apply',
    img:
      'https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394953.jpg?w=900&t=st=1687323821~exp=1687324421~hmac=9302c1f3847d9312892c3366eb9c4cbcfffba4f6e62f0d9f45e80699b60e5f8e',
  },
  {
    id: 'HOTEL',
    title: 'Travel Plans Can Change.',
    text: 'Book Hotels now and Pay Later',
    offer: 'Terms and Condition Apply',
    img:
      'https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394953.jpg?w=900&t=st=1687323821~exp=1687324421~hmac=9302c1f3847d9312892c3366eb9c4cbcfffba4f6e62f0d9f45e80699b60e5f8e',
  },
  {
    id: 'TRAIN',
    title: 'Trip Guarantee on Trains',
    text: 'Waitlisted tickets no more',
    offer: 'Get a confirmed ticket or full return',
    img:
      'https://img.freepik.com/free-photo/people-watching-as-train-approaches_1353-227.jpg?w=900&t=st=1687323987~exp=1687324587~hmac=9fe6aeafb6570bb54f586983828fe910b0cff49ecfa5ab0a067dbfb35631d218',
  },
  {
    id: 'TRAIN',
    title: 'Free Cancellation on Train Booking',
    text: 'Make your train travel easier',
    offer: 'Travel free Penalty Free',
    img:
      'https://img.freepik.com/free-photo/train-stopped-railway_1112-138.jpg?w=900&t=st=1687324104~exp=1687324704~hmac=435e5ad02d00f2495ce96eed5d1767c92f39d64ce3f68c39247a60c5941f13c7',
  },
  {
    id: 'TRAIN',
    title: 'Exciting News: Vande Bharat',
    text: 'Book Tickets for Vande Bharat Express.',
    offer: 'Hassle free and get set for a train journey.',
    img:
      'https://img.freepik.com/free-photo/high-speed-train-station-blurred-cityscape-night-background-generative-ai_191095-1992.jpg?w=900&t=st=1687324232~exp=1687324832~hmac=ce9204d06edc8b2f8861457cd776103625a4ca0682f01bb67501e71ccf07b4aa',
  },
  {
    id: 'TRAIN',
    title: 'Cashback Offer: Upto ₹500',
    text: 'Minimum transaction of ₹1500 for your travel',
    offer: 'Limited Cards Only',
    img:
      'https://img.freepik.com/free-photo/transportation-speed-blurred-railroad-track-generative-ai_188544-9134.jpg?w=1060&t=st=1687324415~exp=1687325015~hmac=9dc6fa0a3cdc21a248878397ac0d1c60aa33c09bfd27b7a261d3a69c6123651a',
  },
  {
    id: 'TRAIN',
    title: '#DealsOnWheels:Discount Offer',
    text: 'Get Upto 15% Discount on train travel.',
    offer: 'Get set for a fun filled journey',
    img:
      'https://img.freepik.com/free-photo/side-view-people-traveling-by-train_23-2150520156.jpg?w=900&t=st=1687324579~exp=1687325179~hmac=4462a21b36decc072d5e0203d209c1a4b4af85d2b07fc98b22267872c7254937',
  },
  {
    id: 'TRAIN',
    title: '#DealsOnWheels:Discount Offer',
    text: 'Get Upto 15% Discount on train travel.',
    offer: 'Get set for a fun filled journey',
    img:
      'https://img.freepik.com/free-photo/side-view-people-traveling-by-train_23-2150520156.jpg?w=900&t=st=1687324579~exp=1687325179~hmac=4462a21b36decc072d5e0203d209c1a4b4af85d2b07fc98b22267872c7254937',
  },
  {
    id: 'CAB',
    title: 'ONLY IN HYDERABAD:BOOK CAB',
    text: 'starting @ ₹699/-',
    offer: 'Offer Valid Till 12 August',
    img:
      'https://img.freepik.com/free-photo/navigator-car-road-forest-area-closeup_169016-22253.jpg?w=996&t=st=1687324729~exp=1687325329~hmac=1930d22ce2db6c9bd43f05991922220bb1ef5e5d3f6de3670a41a3fca377b878',
  },
  {
    id: 'CAB',
    title: 'Now Grab FLAT 10% OFF',
    text: 'On Long Route Cab',
    offer: 'Limited Offer',
    img:
      'https://img.freepik.com/free-photo/businesswoman-looking-through-window-while-traveling-by-car_23-2147943876.jpg?w=900&t=st=1687324856~exp=1687325456~hmac=2cb71a54b9b08e0786651aec932815ba36f2850609f099cf832853c9894aa276',
  },
  {
    id: 'CAB',
    title: 'MASSIVE PRICE DROP:Airport Cab',
    text: 'Valid for selected cities only',
    offer: 'On selected credit cards only',
    img:
      'https://img.freepik.com/free-photo/close-up-finger-pointing-phone-screen_23-2148264018.jpg?w=900&t=st=1687324975~exp=1687325575~hmac=0f45525c52b7d61c3bb21264d5b0831ede1c29659f02ac00f36ab10f8d64ee25',
  },
  {
    id: 'CAB',
    title: 'SUV CABS: TRAVEL',
    text: 'Suv Cabs for group airport travel',
    offer: 'Book @ FLAT 5% OFF',
    img:
      'https://img.freepik.com/free-photo/portrait-young-female-taxi-driver-with-businessman-passenger-back-seat-transport-concept_58466-14411.jpg?w=900&t=st=1687325148~exp=1687325748~hmac=38ff2bd89091c0975c8ef77b17ef281b35af8991e2f77ce14bdad0226d47711b',
  },
  {
    id: 'CAB',
    title: 'DISCOUNT WORTH : ₹500',
    text: 'Get Discount worth ₹500 on airports cabs',
    offer: 'Available on selected credit cards only ',
    img:
      'https://img.freepik.com/free-photo/smart-car-navigation-screen-with-speedometer_53876-102042.jpg?w=900&t=st=1687325294~exp=1687325894~hmac=016acca80b4b752813b21c377efb51893e32a71039c59a4efeecd9e713b08030',
  },
  {
    id: 'CAB',
    title: 'DISCOUNT WORTH : ₹500',
    text: 'Get Discount worth ₹500 on airports cabs',
    offer: 'Available on selected credit cards only ',
    img:
      'https://img.freepik.com/free-photo/smart-car-navigation-screen-with-speedometer_53876-102042.jpg?w=900&t=st=1687325294~exp=1687325894~hmac=016acca80b4b752813b21c377efb51893e32a71039c59a4efeecd9e713b08030',
  },
]

const tabList = [
  {tabId: 'HOTEL', displayText: 'Hotels'},
  {tabId: 'CAB', displayText: 'Cab'},
  {tabId: 'TRAIN', displayText: 'Trains'},
  {tabId: 'FLIGHT', displayText: 'Flights'},
]

class Booking extends Component {
  state = {activeTabId: tabList[0].tabId}

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredData = booking.filter(each => each.id === activeTabId)
    return filteredData
  }

  render() {
    const {activeTabId} = this.state
    const filteredData = this.getFilteredProjects()
    console.log(filteredData)
    return (
      <div>
        <HeroImg
          heroClass="heroAbout"
          heroImg="https://img.freepik.com/free-photo/abstract-green-grunge-background_24972-283.jpg?w=826&t=st=1686925413~exp=1686926013~hmac=13e7ea4354c64fd3af357553694e455471ce7ae141659092239e535149d18b6d"
          title="Booking Travy"
          text=""
          btnText=""
          url="/"
          btnClass=""
        />
        <ul className="tab-list-container">
          {tabList.map(eachTab => (
            <TabItem
              key={eachTab.tabId}
              tabDetails={eachTab}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === eachTab.tabId}
            />
          ))}
        </ul>
        <ul className="booking-items-container">
          {filteredData.map(eachBooking => (
            <BookingItem bookingDetails={eachBooking} />
          ))}
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Booking
