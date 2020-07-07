import { Link } from 'gatsby'
import React, { useState } from 'react'
import {
  Nav,
  MenuButton,
  MenuButtonBar,
  Logo,
  Overlay,
  MenuLink,
} from './Navbar.style'
import logo from '../images/logo_zaat_orignal.png'

const Navbar = () => {
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
        <MenuLink to="/">Link 1</MenuLink>
        <MenuLink to="/">Link 2</MenuLink>
        <MenuLink to="/">Link 3</MenuLink>
        <MenuLink to="/">Link 4</MenuLink>
      </Overlay>
    </Nav>
  )
}

export default Navbar
