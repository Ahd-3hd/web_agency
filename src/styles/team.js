import styled from 'styled-components'
import backgroundImage from '../images/background.png'

export const TeamSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
`

export const CardWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`
