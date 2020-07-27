import React, { useState } from 'react'
import { Nav, MenuButton, MenuButtonBar, Overlay, MenuLink, LogoButton } from './Navbar.style'
import ZaatLogoSvg from '../static/ZaatLogo.svg'

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleScroll }) => {
  const [isMenuActive, setMenuActive] = useState(false)
  const renderChildren = () => (
    <>
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
    </>
  )
  return (
    <Nav>
      <LogoButton onClick={() => handleScroll(0)}>
        <ZaatLogoSvg />
      </LogoButton>
      <MenuButton onClick={() => setMenuActive(!isMenuActive)}>
        <MenuButtonBar isActive={isMenuActive} />
        <MenuButtonBar shift isActive={isMenuActive} />
        <MenuButtonBar isActive={isMenuActive} />
      </MenuButton>
      <Overlay isActive={isMenuActive}>{renderChildren()}</Overlay>
    </Nav>
  )
}

export default Navbar
