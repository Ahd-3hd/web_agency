import styled from 'styled-components'
import { H2 } from '../components/typography'
import { colors } from '../utils'

export const TeamSection = styled.section`
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding: 2rem 0;
`

export const Title = styled(H2)`
  color: ${colors.gray};
`

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  padding: 0 6vw;
`
export const CardWrapper = styled.div`
  width: 100%;
`

export const JobTitle = styled.div`
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  color: rgba(36, 36, 36, 0.8);
  margin-bottom: 1.5rem;
`

export const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  margin: 1rem auto;
`

export const Link = styled.a`
  font-size: 14px;
  color: #0077b5;
  text-decoration: none;
`
