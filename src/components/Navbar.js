import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Nav, MenuButton, MenuButtonBar, Logo, Overlay, MenuLink } from './Navbar.style'
import logo from '../images/logo_zaat_orignal.png'

// eslint-disable-next-line react/prop-types
const Navbar = ({ scrollFunc }) => {
  const [isMenuActive, setMenuActive] = useState(false)
  return (
    <Nav>
      <Link to="/">
        <Logo src={logo} alt="Zaat" />
      </Link>
      <MenuButton onClick={() => setMenuActive(!isMenuActive)}>
        <MenuButtonBar isActive={isMenuActive} />
        <MenuButtonBar shift isActive={isMenuActive} />
        <MenuButtonBar isActive={isMenuActive} />
      </MenuButton>
      <Overlay isActive={isMenuActive}>
        <MenuLink
          onClick={() => {
            scrollFunc(0)
            setMenuActive(false)
          }}
        >
          Home
        </MenuLink>
        <MenuLink
          onClick={() => {
            scrollFunc(1)
            setMenuActive(false)
          }}
        >
          Contact
        </MenuLink>
        <MenuLink>Link 3</MenuLink>
        <MenuLink>Link 4</MenuLink>
      </Overlay>
    </Nav>
  )
}

export default Navbar
