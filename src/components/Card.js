/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
`
export const ServiceCard = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  align-items: center;
  position: relative;
  width: 100%;
  flex: 1 1 29%;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 27%;
    flex: 1 1 20%;
    height: 25vh;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
`
