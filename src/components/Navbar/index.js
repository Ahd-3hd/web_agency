import React, { useState, useEffect } from 'react'
import { Wrapper, MenuButton, LogoContainer, Overlay, MenuLink } from './index.style'
import MenuIcon from '../../static/MenuIcon.svg'

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() =>
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line no-unused-expressions
      window.pageYOffset >= 150 ? setIsScrolled(true) : setIsScrolled(false)
    }),
  )
  return (
    <Wrapper isScrolled={isScrolled}>
      <LogoContainer>AHDEV</LogoContainer>
      <MenuButton onClick={() => setIsMenuActive(!isMenuActive)}>
        <MenuIcon isMenuActive={isMenuActive} />
      </MenuButton>
      <Overlay isMenuActive={isMenuActive}>
        <MenuLink href="#home" isMenuActive={isMenuActive} order={1} onClick={() => setIsMenuActive(false)}>
          Home
        </MenuLink>
        <MenuLink href="#portfolio" isMenuActive={isMenuActive} order={2} onClick={() => setIsMenuActive(false)}>
          Portfolio
        </MenuLink>
        <MenuLink href="#services" isMenuActive={isMenuActive} order={3} onClick={() => setIsMenuActive(false)}>
          Services
        </MenuLink>
        <MenuLink href="#contact" isMenuActive={isMenuActive} order={4} onClick={() => setIsMenuActive(false)}>
          Contact
        </MenuLink>
        <MenuLink href="#team" isMenuActive={isMenuActive} order={5} onClick={() => setIsMenuActive(false)}>
          Team
        </MenuLink>
      </Overlay>
    </Wrapper>
  )
}

export default Navbar
