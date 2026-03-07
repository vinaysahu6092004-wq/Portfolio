import './navbar.css'
import React, { useRef, useState } from 'react'
import logo from '../assets/logo3.png'
import nav_underline from '../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();
const handleMenuClick = (item) => {
  setmenu(item);
  menuRef.current.style.right = "-100%";
  document.body.style.overflow = "auto";
};
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
  };

  return (
    <nav className='navbar'>

      <div className="nav-left">
         <AnchorLink className="anchor-link" offset={50} href="#home">
  <img src={logo} alt="logo" className='nav-logo' />
</AnchorLink>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />

      {["home","about","service","portfolio","connect"].map((item)=>(
  <li key={item}>
    <AnchorLink
      className="anchor-link"
      offset={50}
      href={`#${item}`}
      onClick={() => handleMenuClick(item)}
    >
      <p>{item.charAt(0).toUpperCase()+item.slice(1)}</p>
    </AnchorLink>

    {menu === item && <img src={nav_underline} alt=''/>}
  </li>
))}

      </ul>

      <div className="nav-right">
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#connect">
            Connect with me
          </AnchorLink>
        </div>

        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      </div>

    </nav>
  )
}

export default Navbar