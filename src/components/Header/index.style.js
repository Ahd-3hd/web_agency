import styled from 'styled-components'
import { colors } from '../../utils'
import headerRightImage from '../../images/header_right_image.png'

export const Wrapper = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1280px) {
    flex: 1;
    align-items: flex-start;
    padding: 0 2rem;
  }
  @media (min-width: 1366px) {
    padding-left: 10vw;
  }
`
export const Logo = styled.div`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`
export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  width: 90%;
  margin: 2rem 0;
  padding: 0.5rem;
  position: relative;
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 3px #32cca1;
    border-radius: 1rem;
    z-index: -1;
  }
  @media (min-width: 1280px) {
    font-size: 3rem;
    width: 20ch;
    padding: 0;
    margin: 2rem 0;
    text-align: left;
    ::after {
      width: 50%;
      height: 125%;
      left: auto;
      right: 0;
      /* transform: translateY(-10%); */
      z-index: -1;
      transition: transform 0.5s;
      transform: ${({ shouldAnimate }) =>
        shouldAnimate
          ? 'translateY(-10%) rotate(0deg) translateX(0) scale(1)'
          : 'translateY(-10%) rotate(-90deg) translateX(-100%) scale(1.5)'};
    }
  }
`
export const Button = styled.a`
  border: none;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  background: #32cca1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  padding: 0.7rem 1rem;
  text-decoration: none;
  cursor: pointer;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  align-items: center;
  color: ${colors.grey};
`
export const SocialLinksContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
`
export const SocialLink = styled.a`
  margin: 0 0.6rem;
  svg {
    height: 25px;
    fill: ${colors.grey};
  }
`
export const SocialText = styled.p`
  margin: 0;
  font-weight: bold;
  padding-left: 0.5rem;
  border-left: 3px solid ${colors.grey};
`

export const RightContainer = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
  }
`

export const RightInnerContainer = styled.div``
export const RightCard = styled.div`
  background: #ffffff url(${headerRightImage}) no-repeat;
  background-size: contain;
  background-position: center;
  width: 25vw;
  height: 20vw;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: transform 1s;
  transform: translateX(${({ shouldAnimate }) => (shouldAnimate ? '0' : '100%')});
`
