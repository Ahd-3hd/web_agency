import styled from 'styled-components'

export const ServiceSection = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ServiceCards = styled.div`
  max-width: 80%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const FlipCardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    width: 45px;
    height: 45px;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 1000px) {
    > svg {
      width: 100px;
      height: 100px;
      margin-bottom: 0.5rem;
    }
  }
  @media (max-width: 900px) {
    backface-visibility: hidden;
    > svg {
      width: 80px;
      height: 80px;
      margin-bottom: 0.5rem;
    }
  }
`
export const FlipCardBack = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 900px) {
    left: 0%;
    top: 6%;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
`
export const Details = styled.div`
  @media (max-width: 900px) {
    margin-left: 0.5rem;
  }
`
