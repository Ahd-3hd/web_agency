import styled from 'styled-components'
import { animated } from 'react-spring'
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
`
export const TitlesContainer = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5vw;
  @media (min-width: 900px) {
    /* align-items: center; */
    padding: 0 0.5rem;
  }
`
export const SingleTitleContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  > svg {
    margin-right: 0.5rem;
    width: 1rem;
    min-width: 1rem;
    @media (min-width: 900px) {
      width: 2.5vw;
      min-width: 50px;
    }
  }
`
export const TitleText = styled(H4)`
  color: ${colors.primary};
  margin: 0;
  font-size: 2.6vw;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  > svg {
    width: 1rem;
    min-width: 1rem;
    margin-right: 0.5rem;
    @media (min-width: 900px) {
      width: 2.5vw;
      min-width: 50px;
    }
  }
`
