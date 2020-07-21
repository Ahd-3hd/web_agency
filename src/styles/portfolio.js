import styled from 'styled-components'
import backgroundImage from '../images/background.png'

export const PortfolioSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
`

export const CardWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 90%;
  }
`

export const Wrapper = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: skew(${({ rotation = '-20deg' }) => rotation});

  @media (max-width: 900px) {
    transform: skew(0);
    flex-direction: column;
    text-align: center;
  }
`

export const Logo = styled.div`
  width: 30%;
  max-width: 300px;
  position: relative;
  justify-self: flex-end;

  .icon {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 20%;
  }

  @media (max-width: 900px) {
    width: 80%;
    order: 2;
    margin-top: 2rem;
  }
`

export const Content = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Span = styled.span`
  margin-right: 11px;
  color: ${({ color }) => color};
`
