import styled from 'styled-components'
import { colors } from '../utils'

export const ServiceSection = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  padding-top: 1rem;

  background-color: ${colors.gray3};
  @media (min-width: 900px) {
    padding-top: 3rem;
  }
`
export const ServiceCards = styled.div`
  max-width: 80%;
  margin: 0rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
export const FlipCardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    width: 45px;
    height: 45px;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 900px) {
    backface-visibility: hidden;
    > svg {
      width: 80px;
      height: 80px;
      margin-bottom: 0.5rem;
    }
  }
`
export const FlipCardBack = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    left: 0%;
    top: 6%;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
`
export const Details = styled.div`
  @media (max-width: 900px) {
    margin-left: 0.5rem;
  }
`
