import './index.css'

const whyUs = [
  {
    id: 1,
    title: 'Over Two Decade of Expertise',
    text: 'With 2M+ Happy Trvellers',
    logo:
      'https://cdn-icons-png.flaticon.com/512/780/780293.png?w=740&t=st=1687243404~exp=1687244004~hmac=6f445179802dda83a324bfe87ebc32d630539acff6436a86d3624acd17e3ad7b',
  },
  {
    id: 2,
    title: 'Assurance with MySafety',
    text: 'Safe holidays with assured stays.',
    logo:
      'https://cdn-icons-png.flaticon.com/512/761/761505.png?w=740&t=st=1687243527~exp=1687244127~hmac=f350d7bf1a9cb05561dc94f3bc0570da572a9b09f88aba741438cc64d26c431f',
  },
  {
    id: 3,
    title: 'Reliability with Flexible Cancellation',
    text: 'Cancel or reschedule your holiday to suit your needs.',
    logo:
      'https://cdn-icons-png.flaticon.com/512/1245/1245001.png?w=740&t=st=1687243456~exp=1687244056~hmac=17ce3aa1200d5ef2a11008e2fdbfa902e6a37911fb4addf45e181821bc0621fd',
  },
  {
    id: 4,
    title: 'Unmatched Pricing',
    text: 'Best deals and offer in the industry',
    logo:
      'https://cdn-icons-png.flaticon.com/512/312/312065.png?w=740&t=st=1687243496~exp=1687244096~hmac=40d1d3f828a59b426d8e6a383c5358158f2122538ead46738002181bcbdb8a1d',
  },
]

const WhyUs = () => (
  <div className="whyus-container">
    {whyUs.map(each => (
      <div className="why-container">
        <div className="left">
          <img src={each.logo} alt="logo" />
        </div>
        <div className="right">
          <h4>{each.title}</h4>
          <p>{each.text}</p>
        </div>
      </div>
    ))}
  </div>
)

export default WhyUs
