import styled from 'styled-components'
import { colors } from '../../utils'
import portfolioBlob from '../../images/portfolio_blob.png'

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1366px) {
    background: url(${portfolioBlob}) no-repeat;
    background-size: contain;
    background-position-x: -30vw;
    background-position-y: center;
  }
`

export const Title = styled.h2`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  text-align: center;
  max-width: 20ch;
  margin: 1rem auto;
  text-align: center;
  @media (min-width: 1280px) {
    font-size: 4rem;
    margin: 4rem auto;
  }
`

export const SliderContainer = styled.div`
  overflow: hidden;
`
export const SliderInnerContainer = styled.div`
  display: flex;
  transform: translateX(${({ distance }) => distance}%);
  transition: transform 0.3s;
`
export const Project = styled.div`
  min-width: 100%;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 0 3vw;
  }
  @media (min-width: 1280px) {
    padding: 0 13vw;
  }
`
export const LogoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex: 1;
    text-align: center;
  }
`
export const ProjectLogo = styled.img`
  width: 100%;
  max-width: 150px;
`
export const ProjectDetails = styled.div`
  background: #ffffff;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.6rem;
  color: ${colors.black};
  @media (min-width: 768px) {
    flex: 3;
  }
`
export const ProjectTitle = styled.p`
  color: ${colors.black};
  font-weight: 500;
  font-size: 1.4rem;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  margin-bottom: 0;
`
export const ProjectTechs = styled.p`
  font-size: 0.9rem;
  line-height: 1.5rem;
  > span {
    font-weight: 600;
  }
`
export const ProjectDesc = styled.p`
  line-height: 1.5rem;
`
export const ProjectLink = styled.a`
  color: ${colors.purple};
  text-decoration: none;
  font-weight: 500;
`
export const SliderNavigatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`
export const Indicator = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background: ${({ isActive }) => (isActive ? colors.green : colors.grey)};
  overflow: hidden;
  box-shadow: 0px 0px 15px ${colors.grey.concat('55')};
  margin: 0 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.3s;
  :hover {
    background: ${colors.green};
  }
`
