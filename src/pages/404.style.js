import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../utils'
import bg from '../images/background.png'

export const Wrapper = styled.main`
  background: url(${bg}) no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  width: 25vw;
  @media (max-width: 700px) {
    width: 35vw;
  }
`
export const TextContainer = styled.div`
  color: ${colors.gray};
`
export const Text = styled.h1`
  font-size: 3vw;
  > span {
    padding-right: 0.7rem;
    margin-right: 0.7rem;
    border-right: 3px solid ${colors.gray};
  }
  @media (max-width: 700px) {
    font-size: 4vw;
  }
`
export const BackLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  font-size: 2.5vw;
  padding: 1.5vw 1vw;
  border: 2px solid ${colors.primary};
  transition: 0.3s;
  font-family: 'poppins';
  &:hover {
    color: #ffffff;
    background: ${colors.primary};
  }
  @media (max-width: 700px) {
    font-size: 3vw;
  }
`
