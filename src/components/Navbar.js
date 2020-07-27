import { Link } from 'gatsby'
import React, { useState } from 'react'
import { Nav, MenuButton, MenuButtonBar, Overlay, MenuLink } from './Navbar.style'
import ZaatLogoSvg from '../static/ZaatLogo.svg'

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleScroll }) => {
  console.log(handleScroll)
  const [isMenuActive, setMenuActive] = useState(false)
  return (
    <Nav>
      <Link to="/">
        <ZaatLogoSvg />
      </Link>
      <MenuButton onClick={() => setMenuActive(!isMenuActive)}>
        <MenuButtonBar isActive={isMenuActive} />
        <MenuButtonBar shift isActive={isMenuActive} />
        <MenuButtonBar isActive={isMenuActive} />
      </MenuButton>
      <Overlay isActive={isMenuActive}>
        <MenuLink
          onClick={() => {
            handleScroll(0)
            setMenuActive(false)
          }}
        >
          Home
        </MenuLink>
        <MenuLink
          onClick={() => {
            handleScroll(1)
            setMenuActive(false)
          }}
        >
          Portfolio
        </MenuLink>
        <MenuLink
          onClick={() => {
            handleScroll(2)
            setMenuActive(false)
          }}
        >
          Our Team
        </MenuLink>

        <MenuLink
          onClick={() => {
            handleScroll(3)
            setMenuActive(false)
          }}
        >
          Contact
        </MenuLink>
      </Overlay>
    </Nav>
  )
}

export default Navbar
