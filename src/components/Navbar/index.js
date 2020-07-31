import React, { useState } from 'react'
import { Wrapper, MenuButton, LogoContainer, Overlay, MenuLink } from './index.style'
import MenuIcon from '../../static/MenuIcon.svg'

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  return (
    <Wrapper>
      <LogoContainer>ZAAT.DEV</LogoContainer>
      <MenuButton onClick={() => setIsMenuActive(!isMenuActive)}>
        <MenuIcon isMenuActive={isMenuActive} />
      </MenuButton>
      <Overlay isMenuActive={isMenuActive}>
        <MenuLink href="#" isMenuActive={isMenuActive} order={1}>
          Home
        </MenuLink>
        <MenuLink href="#" isMenuActive={isMenuActive} order={2}>
          Portfolio
        </MenuLink>
        <MenuLink href="#" isMenuActive={isMenuActive} order={3}>
          Services
        </MenuLink>
        <MenuLink href="#" isMenuActive={isMenuActive} order={4}>
          Contact
        </MenuLink>
        <MenuLink href="#" isMenuActive={isMenuActive} order={5}>
          Team
        </MenuLink>
      </Overlay>
    </Wrapper>
  )
}

export default Navbar
