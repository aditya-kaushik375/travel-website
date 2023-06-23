import './index.css'

const destinationData = [
  {
    id: 1,
    title: 'Mount Fujiyama, Japan',
    text: ` Mount Fuji is one of Japan "Three Holy Mountains" (三霊山,
          Sanreizan) along with Mount Tate and Mount Haku. It is a Special Place
          of Scenic Beauty and one of Japan Historic Sites. It was added to
          the World Heritage List as a Cultural Site on June 22, 2013.`,
    img1:
      'https://images.unsplash.com/photo-1605206809417-31eed948187f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    img2:
      'https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: 2,
    reverse: true,
    title: 'Milford Sound , New-Zealand',
    text:
      'Milford Sound is a fiord in the southwest of New Zealand’s South Island. It’s known for towering Mitre Peak, plus rainforests and waterfalls like Stirling and Bowen falls, which plummet down its sheer sides.',
    img1:
      'https://images.unsplash.com/photo-1591640040362-f55d95a6b2bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    img2:
      'https://images.unsplash.com/photo-1495072667656-424d680e6299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
  },
  {
    id: 3,
    title: 'Cape Town, South Africa',
    text:
      'Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island.',
    img1:
      'https://images.unsplash.com/photo-1600255821058-c4f89958d700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=842&q=80',
    img2:
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
]

const Destination = () => (
  <div className="destination">
    <h2>Popular Destinations</h2>
    <p>
      Man is a traveler by nature. He does not like to keep static at a place
      for a long time. Travelling is an incredibly vital part of life. It is the
      best way to break your monotonous routine and experience life in different
      ways.
    </p>
    <ul>
      {destinationData.map(each => (
        <li key={each.id}>
          <div className={each.reverse ? 'first-des reverse' : 'first-des'}>
            <div className="description-detail">
              <h2>{each.title}</h2>
              <p>{each.text}</p>
            </div>
            <div className="image">
              <img src={each.img1} alt="fuji" />
              <img src={each.img2} alt="fuji" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default Destination
