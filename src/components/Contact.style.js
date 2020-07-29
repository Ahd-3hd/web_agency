import styled from 'styled-components'
import { Card } from './Card'
import { Body2 } from './typography'
import { colors } from '../utils'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1440px) {
    padding: 10rem 5rem;
  }
  color: ${colors.gray};
  @media (max-width: 500px) {
    padding-bottom: 7rem;
  }
`
export const InfoSection = styled.div`
  padding: 0 0.8rem;
  @media (min-width: 1280px) {
    max-width: 60ch;
  }
`

export const ContactParagraph = styled(Body2)`
  font-size: 0.9rem;
  margin: 0;
  display: none;
  @media (min-width: 1024px) {
    font-size: 1rem;
    margin: 1rem 0;
  }
  @media (min-height: 700px) {
    display: block;
  }
`
export const DesktopOnlyContactParagraph = styled(Body2)`
  font-size: 0.9rem;
  margin: 0;
  display: none;
  @media (min-width: 1024px) {
    font-size: 1rem;
    margin: 1rem 0;
    display: block;
  }
  @media (max-height: 568px) {
    display: none;
  }
`

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  @media (min-width: 1024px) {
    flex: 1;
    margin: 0;
  }
`
export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  > svg {
    margin: 0 1rem;
  }
  padding-bottom: 0.6rem;
  border-bottom: 2px solid ${colors.primary};
`
export const NonSocialContactContainer = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
`
export const SingleContactInfo = styled.a`
  display: flex;
  font-size: 0.75rem;
  text-decoration: none;
  color: ${colors.gray};
  transition: 0.3s;
  align-items: center;
  > svg {
    margin-right: 0.5rem;
    fill: ${colors.gray};
    min-width: 15px;
    width: 0.75rem;
  }

  :hover {
    color: ${colors.primary};
    > svg {
      fill: ${colors.primary};
    }
  }
  @media (min-width: 768px) {
    padding: 0.6rem 0;
  }
`
export const SocialLink = styled.a`
  margin: 0 1rem;
  > svg {
    height: 25px;
  }
`
export const SocialText = styled.p`
  margin: 0;
`
export const FormSection = styled.div`
  @media (min-width: 1280px) {
    padding: 0 5vw;
  }
`
export const FormContainer = styled(Card)`
  background: ${colors.white};
  padding: 0.5rem;
  margin: 0;
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (min-width: 1280px) {
    min-width: 400px;
  }
`
export const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const FormTitle = styled(Body2)`
  margin: 0 0.3rem;
  color: ${colors.primary};
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`
