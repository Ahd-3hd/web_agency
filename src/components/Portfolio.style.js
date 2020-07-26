import styled from 'styled-components'
import { animated } from 'react-spring'
import { Card } from './Card'
import { H4, Body2, Span, H2 } from './typography'
import { colors } from '../utils'
import backgroundImage from '../images/background.png'

export const ExtendedH4 = styled(H4)`
  font-size: 1.5rem;
  color: ${colors.gray};
`
export const ExtendedBody2 = styled(Body2)`
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.gray};
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
export const ExtendedSpan = styled(Span)`
  font-size: 0.9rem;
  font-weight: 400;
  color: #555555;
  margin: 0;
  line-height: 2rem;
  color: ${colors.gray};
`

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
`
export const Title = styled(H2)`
  text-align: center;
  font-size: 5vw;
  color: ${colors.gray};
  /* margin: 0; */
`
export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  /* max-width: 90vw;
  margin: 0 auto;

  @media (min-width: 1366px) {
    max-width: 70vw;
    margin: 0 auto;
  } */
`
export const AnimatedCard = styled(animated.div)`
  width: 100%;
  min-width: 100%;
  padding: 0 1rem;
  @media (min-width: 1366px) {
    padding: 0 10vw;
  }
`
export const ExtendedCard = styled(Card)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const CardImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > img {
    width: 70%;
    max-width: 270px;
    margin: 0;
  }
  @media (min-width: 768px) {
    flex: 2;
    margin-right: 1.6rem;
    > img {
      width: 100%;
    }
  }
`
export const CardContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
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
