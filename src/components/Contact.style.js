import styled from 'styled-components'
import { animated } from 'react-spring'
import { Card } from './Card'
import { Subtitle, H2, Body2 } from './typography'
import backgroundImage from '../images/background.png'
import { colors } from '../utils'

export const Wrapper = styled(animated.div)`
  padding: 1rem;
  padding-bottom: 0;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  min-height: 100vh;
  @media (min-width: 1024px) {
    display: flex;
    min-height: 100vh;
    align-items: center;
  }
`

export const InfoSection = styled.div`
  flex: 1;
  @media (min-width: 1024px) {
    flex: 2;
  }
  @media (min-width: 1366px) {
    margin-left: 7vw;
  }
`

export const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  max-width: 500px;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`

export const ContactDetailsSection = styled.div`
  flex: 2;
`
export const SocialButtonsSection = styled.div`
  flex: 1;
`
export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Logo = styled.img`
  display: none;
  max-width: 150px;
  padding-bottom: 1rem;
  border-bottom: 4px solid ${colors.secondary};
  @media (min-height: 900px) {
    display: block;
  }
`

export const DividerContainer = styled.div`
  display: none;

  @media (min-width: 400px) {
    display: flex;
  }
`

export const Divider = styled.div`
  border: 1px solid ${colors.gray2};
  height: 100%;
  max-height: 90px;
  margin: 0 0.1rem;
  transform: translateY(${({ shift }) => (shift ? '10px' : '-10px')});
`

export const DetailContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  text-decoration: none;
  cursor: pointer;
  > p {
    margin: 0;
    margin-left: 0.5rem;
    transition: color 0.3s;
  }
  > svg {
    width: 1.1rem;
    height: 1.1rem;
    fill: ${colors.gray};
  }
  :hover p {
    color: ${colors.primary};
  }
`

export const ExtendedCard = styled(Card)`
  position: relative;
  @media (min-width: 1280px) {
    left: -6rem;
  }
`
export const Form = styled.form`
  margin: 0;
  display: flex;
  flex-direction: column;
`

export const ExtendedSubtitle = styled(Subtitle)`
  padding-left: 1rem;
  font-size: 1.5rem;
  margin: 0;
`
export const FormSection = styled.div`
  flex: 1;
  @media (min-width: 1024px) {
    flex: 3;
  }
  @media (min-width: 1280px) {
    flex: 2;
    max-width: 500px;
  }
  @media (max-width: 1366px) {
    margin-right: 7vw;
  }
`

export const ExtendedH2 = styled(H2)`
  display: none;
  @media (min-height: 700px) and (min-width: 500px) {
    display: block;
  }
`
export const ExtendedBody2 = styled(Body2)`
  display: none;
  @media (min-height: 700px) and (min-width: 500px) {
    display: block;
  }
  @media (min-width: 1280px) {
    max-width: 500px;
  }
`
