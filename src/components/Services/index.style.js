import styled from 'styled-components'
import { colors } from '../../utils'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 1360px) {
    flex-direction: row;
  }
`
export const TitleContainer = styled.div`
  @media (min-width: 1360px) {
    flex: 2;
  }
`
export const Title = styled.h2`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  text-align: center;
  max-width: 20ch;
  @media (min-width: 1360px) {
    font-size: 5vw;
    text-align: left;
    margin-right: 2rem;
  }
`
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1360px) {
    flex: 2;
    padding-left: 5vw;
  }
`
export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0.5rem;
  margin: 1rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  /* @media (min-width: 1360px) {
    max-width: 90ch;
  } */
  max-width: 600px;
`
export const ServiceImage = styled.div`
  background: ${colors.purple} url(${({ bg }) => bg}) no-repeat;
  background-size: 60%;
  background-position: center;
  width: 30vw;
  height: 30vw;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  min-width: 100px;
  min-height: 100px;
  max-width: 200px;
  max-height: 200px;
  @media (min-width: 768px) {
    width: 200px;
    height: 100px;
  }
`
export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > p {
    margin: 0.7rem 0;
  }
  @media (min-width: 768px) {
    align-items: flex-start;
    margin-left: 1rem;
    text-align: left;
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
