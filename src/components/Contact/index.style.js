import styled from 'styled-components'
import { colors } from '../../utils'
import portfolioBlob from '../../images/portfolio_blob.png'

export const Wrapper = styled.section`
  padding-bottom: 1rem;
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
`

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    flex: 1;
  }
`

export const Form = styled.form`
  padding: 1rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  @media (min-width: 1366px) {
    max-width: 450px;
  }
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
`
export const InputLabel = styled.label`
  color: ${colors.purple};
  font-weight: 500;
  font-size: 0.9rem;
`
export const InputField = styled.input`
  padding: 0.4rem 0.7rem;
  margin-top: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid ${colors.purple};
  color: ${colors.purple};
  font-weight: 600;
  ::placeholder {
    color: ${colors.purple.concat('99')};
    font-weight: 600;
  }
`
export const Button = styled.button`
  background: ${colors.purple};
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 10px ${colors.purple.concat('77')};
  margin: auto;
  @media (min-width: 1366px) {
    font-size: 1.5rem;
    padding: 0.7rem 2rem;
  }
`
export const TextArea = styled.textarea`
  padding: 0.4rem 0.7rem;
  border-radius: 0.2rem;
  border: 1px solid ${colors.purple};
  color: ${colors.purple};
  font-weight: 600;
  resize: none;
  height: 4em;
  margin-top: 0.5rem;

  ::placeholder {
    color: ${colors.purple.concat('99')};
    font-weight: 600;
  }
`
export const ContentContainer = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
`
export const TextContainer = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`
export const Paragraph = styled.p`
  padding: 0 1rem;
  max-width: 50ch;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  @media (min-width: 1366px) {
    font-size: 1.7rem;
  }
`
export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: center;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`
export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  text-decoration: none;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  color: ${colors.black};
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
