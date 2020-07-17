import styled from 'styled-components'
import { animated } from 'react-spring'
import backgroundImage from '../images/background.png'
import { H4 } from './typography'
import { colors } from '../utils'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
`
export const TitlesContainer = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.5rem;
  @media (min-width: 700px) {
    align-items: center;
  }
`
export const SingleTitleContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`
export const TitleText = styled(H4)`
  color: ${colors.primary};
  margin: 0;
  font-size: 2.5rem;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`
