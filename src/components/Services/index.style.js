import styled from 'styled-components'
import { colors } from '../../utils'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`
export const TitleContainer = styled.div``
export const Title = styled.h2`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  text-align: center;
  max-width: 20ch;
`
export const ServicesContainer = styled.div``
export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.5rem;
  margin: 1rem 0;
`
export const ServiceImage = styled.div`
  background: ${colors.purple} url(${({ bg }) => bg}) no-repeat;
  background-size: 80%;
  background-position: center;
  width: 40vw;
  height: 40vw;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
`
export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > p {
    margin: 0.7rem 0;
  }
`
export const ServiceTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.black};
`
export const ServiceDescription = styled.p`
  color: ${colors.grey};
`
export const ServiceLink = styled.a`
  color: ${colors.purple};
  text-decoration: none;
  padding-bottom: 0.2rem;
  border-bottom: 3px solid ${colors.purple};
  font-weight: 500;
`
