import styled from 'styled-components'
import { colors } from '../utils'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 0.3rem 1rem;
`
export const MenuButtonBar = styled.div`
  width: 100%;
  border: 1px solid ${({ isActive }) => (isActive ? colors.white : colors.gray)};
  transition: 0.3s;
  transform: ${({ isActive, shift }) =>
    // eslint-disable-next-line no-nested-ternary
    isActive ? (shift ? 'translateX(-20%)' : 'translateX(20%)') : shift ? 'translateX(20%)' : 'translateX(-20%)'};
`
export const MenuButton = styled.button`
  width: 25px;
  height: 17px;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  background: transparent;
  border: none;
  outline: none;
  margin: 0.5rem 1rem;
  z-index: 98;
  cursor: pointer;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(150.62deg, ${colors.primary} 5.76%, ${colors.secondary} 71.26%);
  transition: 0.4s ease;
  transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0)')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transform-origin: top left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MenuLink = styled.button`
  padding: 0;
  background: transparent;
  border: none;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${colors.white};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    width: 100%;
    height: 2px;
    border: 2px solid ${colors.white};
    position: absolute;
    bottom: -2px;
    left: -70%;
    transition: left 0.4s;
    z-index: -1;
  }
  :hover ::after {
    left: 0;
  }
`

export const MenuLinkMobile = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0;
  background: transparent;
  border: none;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${colors.white};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    width: 100%;
    height: 2px;
    border: 2px solid ${colors.white};
    position: absolute;
    bottom: -2px;
    left: -70%;
    transition: left 0.4s;
    z-index: -1;
  }
  :hover ::after {
    left: 0;
  }
`
export const LogoButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
