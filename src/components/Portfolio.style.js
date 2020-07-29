import styled from 'styled-components'
import { animated } from 'react-spring'
import { Card } from './Card'
import { colors } from '../utils'

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
`
export const AnimatedCard = styled(animated.div)`
  width: 100%;
  min-width: 100%;
  padding: 0 1rem;
  @media (min-width: 1024px) {
    padding: 0 10rem;
  }
  @media (min-width: 1440px) {
    padding: 0 17rem;
  }
`
export const ExtendedCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`
export const CardImageContainer = styled.div`
  > img {
    max-width: 260px;
    min-width: 160px;
    margin: 0;
  }
`
export const CardContentContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`
export const TechsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-right: 0.5rem;
  }
  > p:first-child {
    font-weight: bolder;
  }
`

export const SliderNavigatorContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-evenly;
  width: 250px;
`
export const SliderButton = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  > svg {
    fill: ${colors.primary};
    width: 15px;
    ${({ right }) => (right ? 'transform:rotateZ(180deg)' : null)}
  }
  @media (min-width: 1024px) {
    margin-top: 2rem;
    > svg {
      width: 25px;
    }
  }
`
