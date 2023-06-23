import {
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer">
    <div className="top">
      <div>
        <div className="heading">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png?w=740&t=st=1686907175~exp=1686907775~hmac=b5b79fa0162b5713e88347443411fbbcc6d72a1629a1fc23b952e1a348154ed5"
            alt="logo"
            className="logo"
          />
          <h2>Travy</h2>
        </div>

        <p>Travel With Us</p>
      </div>
      <div>
        <FaFacebook size={30} className="icon" />

        <FaTwitter size={30} className="icon" />
        <FaInstagramSquare size={30} className="icon" />
        <FaMailBulk size={30} className="icon" />
      </div>
    </div>
    <div className="bottom">
      <div>
        <h4>Projects</h4>
        <a href="/">ChangeLog</a>
        <a href="/">Status</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>
      </div>
      <div>
        <h4>Community</h4>
        <a href="/">GitHub</a>
        <a href="/">Issues</a>
        <a href="/">Project</a>
        <a href="/">Twitter</a>
      </div>
      <div>
        <h4>Help</h4>
        <a href="/">Support</a>
        <a href="/">TroubleShooting</a>
        <a href="/">ContactUs</a>
      </div>
      <div>
        <h4>Others</h4>
        <a href="/">Terms Of Services</a>
        <a href="/">Privacy Policy</a>
        <a href="/">License</a>
        <a href="/">All Versions</a>
      </div>
    </div>
  </div>
)

export default Footer
