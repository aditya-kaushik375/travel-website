import './index.css'

const tour = [
  {
    id: 1,
    title: 'HONEYMOON',
    b1: 'Beaches',
    b2: 'Hill Vacays',
    b3: 'Adventure',
    b4: 'City Escapes',
    url:
      'https://img.freepik.com/free-photo/young-couple-winter-snow-falling-from-tree_1303-19212.jpg?w=996&t=st=1687181982~exp=1687182582~hmac=3a0bf061ffd18e70bbda1151f746d0a70974d07b82b491461035389f0f9e688b',
  },
  {
    id: 2,
    title: 'WILDESCAPE',
    b1: 'Ranthambore',
    b2: 'Corbett',
    b3: 'Bandhavgarh',
    b4: 'Kanha',
    url:
      'https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?w=996&t=st=1687182011~exp=1687182611~hmac=fae46b16404428575e0585e90f0d456003918cb2fd8728f2f3379a50f61723c4',
  },
  {
    id: 3,
    title: 'PILGRIMAGE',
    b1: 'Varanasi',
    b2: 'Mathura',
    b3: 'Gujarat',
    b4: 'Vaishno Devi',
    url:
      'https://img.freepik.com/free-photo/fishing-boats-water-sea-with-beautiful-clear-blue-sky_181624-1795.jpg?w=740&t=st=1687182130~exp=1687182730~hmac=79bf7e181bcc8c127b8c0b3ebfd79ba8f0d0f993cab5ecd8bcd87b7ec5737476',
  },
]

const SpecialPackage = () => (
  <div className="special-package">
    {tour.map(each => (
      <div className="special-box">
        <div className="top">
          <img src={each.url} alt="tour" className="special-image" />
        </div>
        <h4 className="head">{each.title}</h4>
        <div className="bottom">
          <button type="button">{each.b1}</button>
          <button type="button">{each.b2}</button>
          <button type="button">{each.b3}</button>
          <button type="button">{each.b4}</button>
        </div>
      </div>
    ))}
  </div>
)
export default SpecialPackage
