import styled from 'styled-components'
import { colors } from '../../utils'

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  z-index: 999;
`

export const MenuButton = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 999;
  > svg {
    height: 1rem;
    fill: ${colors.grey};
    path:nth-child(2) {
      transform: translateX(-20%);
    }
  }
`

export const LogoContainer = styled.div`
  font-size: 1rem;
  color: ${colors.grey};
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: ${({ isMenuActive }) => (isMenuActive ? '0' : '-100%')};
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.green};
  transition: left 0.3s ease-in-out;
`
export const MenuLink = styled.a`
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 500;
  text-decoration: none;
  margin: 1rem 0;
  transform: ${({ isMenuActive }) => (isMenuActive ? 'translateX(0)' : 'translateX(-100vw)')};
  transition: transform 0.3s ease-in-out;
  transition-delay: ${({ order }) => order * 0.1}s;
`
