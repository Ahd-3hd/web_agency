import { Link } from 'gatsby'
import React, { useState } from 'react'
import { isMobile, MobileView } from 'react-device-detect'
import { Nav, MenuButton, MenuButtonBar, Overlay, MenuLink, MenuLinkMobile } from './Navbar.style'
import ZaatLogoSvg from '../static/ZaatLogo.svg'

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleScroll }) => {
  const [isMenuActive, setMenuActive] = useState(false)
  const renderChildren = () => {
    if (isMobile) {
      return (
        <MobileView>
          <MenuLinkMobile
            href="#header"
            onClick={() => {
              setMenuActive(false)
            }}
          >
            Home
          </MenuLinkMobile>
          <MenuLinkMobile
            href="#portfolio"
            onClick={() => {
              setMenuActive(false)
            }}
          >
            Portfolio
          </MenuLinkMobile>
          <MenuLinkMobile
            href="#team"
            onClick={() => {
              setMenuActive(false)
            }}
          >
            Our Team
          </MenuLinkMobile>

          <MenuLinkMobile
            href="#contact"
            onClick={() => {
              setMenuActive(false)
            }}
          >
            Contact
          </MenuLinkMobile>
        </MobileView>
      )
    }
    return (
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
  }
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
      <Overlay isActive={isMenuActive}>{renderChildren()}</Overlay>
    </Nav>
  )
}

export default Navbar
