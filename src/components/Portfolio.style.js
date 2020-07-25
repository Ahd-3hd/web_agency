import styled from 'styled-components'
import { animated } from 'react-spring'
import { Card } from './Card'
import { H4, Body2, Span } from './typography'

export const ExtendedH4 = styled(H4)`
  font-size: 1.5rem;
`
export const ExtendedBody2 = styled(Body2)`
  font-size: 1rem;
  font-weight: 400;
`
export const ExtendedSpan = styled(Span)`
  font-size: 0.9rem;
  font-weight: 400;
  color: #555555;
  margin: 0;
  line-height: 2rem;
`

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`
export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
`
export const AnimatedCard = styled(animated.div)`
  width: 100%;
  min-width: 100%;
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
    width: 100%;
    max-width: 270px;
    margin: 0;
  }
  @media (min-width: 768px) {
    flex: 2;
    margin-right: 1.6rem;
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
`
