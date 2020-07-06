import { Link } from 'gatsby'
import styled from 'styled-components'
import { Card } from './Card'
import { Subtitle, H2, Body2 } from './typography'
import contactBackground from '../images/contact_background2.png'
import { colors } from '../utils'

export const Wrapper = styled.div`
  padding: 1rem;
  @media (min-width: 1024px) {
    display: flex;
    min-height: 100vh;
    align-items: center;
    background: url(${contactBackground}) no-repeat;
    background-size: 55%;
    background-position-x: right;
    background-position-y: top;
  }
  @media (min-width: 1280px) {
    background-size: contain;
  }
`

export const InfoSection = styled.div`
  flex: 1;
  @media (min-width: 1024px) {
    flex: 2;
  }
`

export const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  max-width: 500px;
  @media (max-width: 360px) {
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`

export const ContactDetailsSection = styled.div``

export const Logo = styled.img`
  max-width: 150px;
  padding-bottom: 1rem;
  border-bottom: 4px solid ${colors.secondary};
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

export const DetailContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;
  text-decoration: none;
  > p {
    margin: 0;
    margin-left: 0.5rem;
  }
  > svg {
    width: 1.1rem;
    height: 1.1rem;
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
`

export const ExtendedH2 = styled(H2)``
export const ExtendedBody2 = styled(Body2)`
  @media (min-width: 1280px) {
    max-width: 500px;
  }
`
