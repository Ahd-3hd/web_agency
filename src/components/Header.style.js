import styled from 'styled-components'
import { animated } from 'react-spring'

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const TitlesContainer = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
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
      width: 2.5rem;
      min-width: 50px;
    }
  }
`
