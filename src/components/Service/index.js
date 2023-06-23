import HeroImg from '../HeroImg'
import Footer from '../Footer'
import SpecialPackage from '../SpecialPackage'
import DestinationCard from '../DestinationCard'
import TourCard from '../TourCard'
import './index.css'

const indiaTour = [
  {
    id: 1,
    title: 'Kerala',
    text: 'Starts at 9500 per person',
    url:
      'https://img.freepik.com/free-photo/india-fog-tea-cool-tea-leaves_1376-20.jpg?w=1060&t=st=1687180111~exp=1687180711~hmac=e8ccd209fe005d453e4a2e8fecf63d0c705872cdba7c7973884ec0dbc8455726',
  },
  {
    id: 2,
    title: 'Goa',
    text: 'Starts at 10000 per person',
    url:
      'https://img.freepik.com/free-photo/umbrella-chair-beautiful-beach-sea-sunrise-time-travel-vacation_74190-7913.jpg?w=996&t=st=1687180327~exp=1687180927~hmac=816a647bd1be09239bac84b4e6a15b26f5702479c3e07c4f281c8f09363b9614',
  },
  {
    id: 3,
    title: 'Andaman Island',
    text: 'Starts at 12000 per person',
    url:
      'https://img.freepik.com/free-photo/beautiful-girl-sitting-rock-james-bond-island-phang-nga-thailand_335224-1224.jpg?w=996&t=st=1687180363~exp=1687180963~hmac=16bb70be70493d25156a9890f4b721edb409d526483816adac8de97b6d982d19',
  },
  {
    id: 4,
    title: 'Himachal Pradesh',
    text: 'Starts at 12000 per person',
    url:
      'https://img.freepik.com/free-photo/two-tourist-standing-road-near-snowy-mountain_23-2148153673.jpg?w=740&t=st=1687180403~exp=1687181003~hmac=8502f12a1621344f167ee31521e2ad34fd0acf5e89c748292efd95d288b72635',
  },
  {
    id: 5,
    title: 'Kashmir',
    text: 'Starts at 13000 per person',
    url:
      'https://img.freepik.com/free-photo/valley-glacier-mountain-summit-austria-sun_181624-52412.jpg?w=360&t=st=1687180432~exp=1687181032~hmac=f5f4d23b659d0657127b6b8ff900e0bb235e5e50bc1546fba95d3e43cad7e8e2',
  },
  {
    id: 6,
    title: 'Gujarat',
    text: 'Starts at 9000 per person',
    url:
      'https://img.freepik.com/free-photo/arab-people-with-camel-caravan_1004-19.jpg?w=996&t=st=1687180612~exp=1687181212~hmac=c057aed912b69dfb5aa44c7cbcef53e200336995778b309a06cc8403a2331159',
  },
  {
    id: 7,
    title: 'Sikkim',
    text: 'Starts at 15000 per person',
    url:
      'https://img.freepik.com/free-photo/shallow-stream-midst-alpine-trees-rolling-hills-mountain_181624-14513.jpg?w=996&t=st=1687180499~exp=1687181099~hmac=2a08b24632bf915ed67561c8f116a7c32e80774a0dbab9948c2942ff5784e2e4',
  },
  {
    id: 8,
    title: 'Assam',
    text: 'Starts at 20000 per person',
    url:
      'https://img.freepik.com/free-photo/hiker-stand-camping-front-orange-tent-backpack-mountains_1150-9163.jpg?w=996&t=st=1687180532~exp=1687181132~hmac=221960c900bbbcf9cb7574cd01fd44301fc860172878f2cef9000d835772d5ac',
  },
  {
    id: 9,
    title: 'Arunachal Pradesh',
    text: 'Starts at 20000 per person',
    url:
      'https://img.freepik.com/free-photo/tourist-taking-skaftafell-glacier-vatnajokull-national-park-iceland_335224-655.jpg?w=1060&t=st=1687180572~exp=1687181172~hmac=8b0d40641c29c85b6508ca2d2b8e871223c4e467dae5fe72eb5f7553ae6f8fc4',
  },
]

const tour = [
  {
    id: 1,
    title: 'Thailand',
    text: 'Starts at 9500 per person',
    url:
      'https://img.freepik.com/free-photo/big-entrance-gate-bali-indonesia_335224-376.jpg?w=996&t=st=1687178487~exp=1687179087~hmac=b08a4af9dbf2dfae6b65b349fac31b01d1bbe4a05b8281e29699e32bbd5d06f3',
  },
  {
    id: 2,
    title: 'South Africa',
    text: 'Starts at 10000 per person',
    url:
      'https://img.freepik.com/free-photo/gorgeous-landscape-cliffs-moher-ireland_493961-578.jpg?w=996&t=st=1687178670~exp=1687179270~hmac=ca68184a7f38b7cf95855fcbe40a9e9013e63b0ee92d12e6efefb3567a144cca',
  },
  {
    id: 3,
    title: 'Singapore',
    text: 'Starts at 12000 per person',
    url:
      'https://img.freepik.com/free-photo/sculpture-city-long-exposure-complex-amazing_1122-1706.jpg?w=996&t=st=1687178757~exp=1687179357~hmac=0f60e8ebcaaa064d97f2019ef92d757b03ada45e34acd49d2f0afb10a5f72004',
  },
  {
    id: 4,
    title: 'New-Zealand',
    text: 'Starts at 12000 per person',
    url:
      'https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?w=996&t=st=1687178853~exp=1687179453~hmac=c642cca4adf149103cef92046e6a11524b141916509040524eb46f1d062fd694',
  },
  {
    id: 5,
    title: 'Australia',
    text: 'Starts at 13000 per person',
    url:
      'https://img.freepik.com/free-photo/high-angle-shot-tunnel-beach-dunedin-new-zealand_181624-44967.jpg?w=996&t=st=1687178924~exp=1687179524~hmac=f0318a391e40217130c046a8afa63690e15ff3845aa474f4c78b718b22483d69',
  },
  {
    id: 6,
    title: 'Japan',
    text: 'Starts at 9000 per person',
    url:
      'https://img.freepik.com/free-photo/asian-woman-wearing-japanese-traditional-kimono-yasaka-pagoda-sannen-zaka-street-kyoto-japan_335224-39.jpg?w=996&t=st=1687178988~exp=1687179588~hmac=f3b1d8f3ac9b2b8737558d17e1b4be82a15c9a8f99a311fb1b67211819c7b30c',
  },
  {
    id: 7,
    title: 'Canada',
    text: 'Starts at 15000 per person',
    url:
      'https://img.freepik.com/free-photo/wide-shot-building-where-workers-are-cleaning-walls-windows_181624-5433.jpg?w=996&t=st=1687179066~exp=1687179666~hmac=b81898ac8573328327893e75ccaf7b6b08baca50a5a9520b0985e4a520f6bdc1',
  },
  {
    id: 8,
    title: 'Europe',
    text: 'Starts at 20000 per person',
    url:
      'https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?t=st=1687179199~exp=1687179799~hmac=115652078e7563fecefed4c845cb00965854a060c148bcc3765d2e5441c39bb8',
  },
  {
    id: 9,
    title: 'Finland',
    text: 'Starts at 20000 per person',
    url:
      'https://img.freepik.com/free-photo/view-london-city-sunset_268835-1397.jpg?w=996&t=st=1687179237~exp=1687179837~hmac=2994501f9723bb60402f154f87092433c576f2c4cced532e161f4d072919d4b9',
  },
]

const Service = () => (
  <>
    <HeroImg
      heroClass="heroAbout"
      heroImg="https://img.freepik.com/free-vector/abstract-background-3d-luxury-gradient-design-green-wave-color_343694-2842.jpg?w=1060&t=st=1686926108~exp=1686926708~hmac=d330f64f00cbd609f4757e7bb18870336b53b37b3b9feec37cd17e873fe9c9f9"
      title="Travy's Services"
      text=""
      btnText=""
      url="/"
      btnClass=""
    />

    <h1>Explore New Deals for Un-Explored India</h1>

    <DestinationCard indiaTour={indiaTour} />

    <h1>Special Deals for International Destinations</h1>

    <TourCard tour={tour} />

    <h1>Special Packages...</h1>
    <SpecialPackage />

    <Footer />
  </>
)

export default Service
