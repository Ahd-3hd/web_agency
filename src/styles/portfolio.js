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
  overflow: hidden;
  width: 100%;
`
export const ParnetSlider = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`
export const PortofiloList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 10%;
  width: 100%;
  position: absolute;
`
// export const ProjectInList = styled.

export const CardWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90%;
  }
`
export const SliderWrapper = styled.div`
  position: abosule;
  cursor: pointer;
  position: absolute;
  width: 100%;
  display: flex;
`
export const Wrapper = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

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
