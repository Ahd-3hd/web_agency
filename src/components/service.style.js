import styled from 'styled-components'
import { colors } from '../utils'

export const ServiceSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: ${colors.gray3};
`
export const ServiceCards = styled.div`
  @media (min-width: 900px) {
    max-width: 80%;
    margin: 0rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`
export const Details = styled.div`
  @media (max-width: 900px) {
    margin-left: 0.5rem;
  }
`
export const Line = styled.hr`
  @media (min-width: 900px) {
    border-bottom: 4px dashed ${colors.lightGray};
    margin: 0.5rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
`
export const CircleNumber = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 900px) {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding-top: 0.01rem;
    background-color: ${colors.primary};
    color: ${colors.white};
    text-align: center;
  }
`
