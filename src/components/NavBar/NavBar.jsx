import logo from './../../assets/img/logo.svg'
import './NavBar.css'
import menu from './../../assets/img/menu-burger.svg'
import close from './../../assets/img/close.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
const NavBar = () => {
  const [menuItem, setmenuItem] = useState(false);
  const [y, sety] = useState(0);
  document.addEventListener("scroll", (event) => {
    sety(window.scrollY);
  })
  return (
    <nav className={(y>100)? "active" : ""}>
      <img src={logo} alt="" className='logo' />
      <div className="items">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><a href="#">Products</a></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
        <button className='logIn'>Log in</button>
      </div>
      <div className={(menuItem) ? "active mobileItems": "mobileItems"} style={{transform: (menuItem) ? "translateX(100%)" : "translateX(0)" , transition: "1s all"}}>
        <div className="top">
        <img src={logo} alt="" className='logo' />
        <img src={close} alt="" onClick={() => setmenuItem(!menuItem)} />
        </div>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setmenuItem(!menuItem)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setmenuItem(!menuItem)}>About</NavLink></li>
          <li><a href="#" onClick={() => setmenuItem(!menuItem)}>Products</a></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setmenuItem(!menuItem)}>Contact</NavLink></li>
        </ul>
      </div>
      <button className='menu' onClick={() => setmenuItem(!menuItem)}><img src={menu} alt="" /></button>
    </nav>
  )
}

export default NavBar