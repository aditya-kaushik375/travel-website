import {useState} from 'react'
import {Link} from 'react-router-dom'

import {FaBars, FaTimes, FaHome, FaInfoCircle} from 'react-icons/fa'
import {
  MdHomeRepairService,
  MdContactPage,
  MdOutlineTravelExplore,
} from 'react-icons/md'

import './index.css'

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img
            alt="logo"
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png?w=740&t=st=1686907175~exp=1686907775~hmac=b5b79fa0162b5713e88347443411fbbcc6d72a1629a1fc23b952e1a348154ed5"
          />
          <h1>Travy</h1>
        </div>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-links">
          <Link to="/">
            <FaHome size={20} style={{marginRight: '7px'}} />
            Home
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/about">
            <FaInfoCircle size={20} style={{marginRight: '7px'}} />
            About
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/service">
            <MdHomeRepairService size={22} style={{marginRight: '7px'}} />
            Services
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/booking">
            <MdOutlineTravelExplore size={22} style={{marginRight: '7px'}} />
            Booking
          </Link>
        </li>
        <li className="nav-links">
          <Link to="/contact">
            <MdContactPage size={23} style={{marginRight: '7px'}} />
            Contact
          </Link>
        </li>
        <li>
          <button className="sign-btn" type="button">
            Sign Up
          </button>
        </li>
      </ul>

      <button type="button" className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes
            size={20}
            style={({color: '#fff'}, {backgroundColor: 'transparent'})}
          />
        ) : (
          <FaBars
            size={20}
            style={({color: '#fff'}, {backgroundColor: 'transparent'})}
          />
        )}
      </button>
    </div>
  )
}

export default Header
