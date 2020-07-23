/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import { colors } from '../utils'

export const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
`
export const ServiceCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  > svg {
    width: 100px;
    height: auto;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 900px) {
    height: 42vh;
    flex: 1 1 29%;
    flex-direction: column;
    > svg {
      width: 50px;
      height: auto;
      margin-bottom: 0.5rem;
    }

    ::after {
      z-index: 200;
      content: '';
      width: 25px;
      height: 25px;
      border-radius: 50%;
      position: absolute;
      bottom: 53px;
      left: -10px;
      background-color: ${colors.gray3};
    }
    &::before {
      z-index: 100;
      content: '';
      width: 25px;
      height: 25px;
      border-radius: 50%;
      position: absolute;
      bottom: 53px;
      right: -10px;
      background-color: ${colors.gray3};
    }
  }
`
