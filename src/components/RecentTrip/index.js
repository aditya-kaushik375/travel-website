import './index.css'

const TripData = [
  {
    id: '1',
    title: 'Trip To Phillipnes',
    text:
      'The Philippines is known for its exotic beaches, expansive forests, and abundance of volcanoes. Despite the common theme of nature, there are many islands that all differ from each other vastly.',
    img:
      'https://img.freepik.com/free-photo/lagoon-white-ocean-summer-sand_1203-5354.jpg?w=900&t=st=1687104917~exp=1687105517~hmac=70fc1e3539c612af37074f73dcdb6197a66f9a9f1f41b4ba0a66383ceb67742d',
  },
  {
    id: '2',
    title: 'Trip To Singapore',
    text:
      'Singapore is global center, being among the most populated places in world, having a world-class city airport with a waterfall, and a Botanic Garden that is a World Heritage Site',
    img:
      'https://img.freepik.com/free-photo/singapore-cityscape-twilight_335224-686.jpg?w=900&t=st=1687105001~exp=1687105601~hmac=c6dc624239cb5836c930f5a31491e10f38f0e29ce0c7c926e9a88271ef351f3a',
  },
  {
    id: '3',
    title: 'Trip To New-Zealand',
    text:
      'A small island nation home to around 4.5 million people located in the Pacific Ocean, New Zealand is famous for its national rugby team, its indigenous Maori culture and its picturesque landscape',
    img:
      'https://img.freepik.com/free-photo/lookout-point-remarkables-mountain-range-queenstown-new-zealand_181624-41063.jpg?w=900&t=st=1687105191~exp=1687105791~hmac=0b86ed437fa44dc4d0c7bae913bff2c5dc856ccb0685b2c9a7525ade6129abf4',
  },
  {
    id: '4',
    title: 'Trip to South Africa',
    text:
      'Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route.',
    img:
      'https://img.freepik.com/free-photo/field-covered-grass-trees-surrounded-by-zebras-sunlight-during-sunset_181624-18641.jpg?w=900&t=st=1687105319~exp=1687105919~hmac=a0fc4a5769f482fd616f94ea7dceb73710649106e92412e6fd006b9a990797ed',
  },
  {
    id: '5',
    title: 'Trip To Canada',
    text:
      'Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean',
    img:
      'https://img.freepik.com/free-photo/toronto-skyline-from-park_649448-3496.jpg?w=900&t=st=1687105645~exp=1687106245~hmac=512612bd24831ef41929d00da665600548b30812ba98c5aa480c0a72b146683c',
  },
  {
    id: '6',
    title: 'Trip To Indonesia',
    text:
      'Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea',
    img:
      'https://img.freepik.com/free-photo/woman-walking-big-entrance-gate-bali-indonesia_335224-378.jpg?w=900&t=st=1687107522~exp=1687108122~hmac=ed01f1526706ff8a2c473b6ecdbed050181ecfe8b8d132eb6850e12f64a3096b',
  },
]

const RecentTrip = () => (
  <div className="trip">
    <h2>Recent Trips</h2>
    <p>Explore our New Packages to these exotic places.</p>
    <ul>
      {TripData.map(each => (
        <li key={each.id}>
          <div className="trip-card">
            <div className="trip-image">
              <img src={each.img} alt="trip" />
            </div>
            <h3>{each.title}</h3>
            <p>{each.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default RecentTrip
