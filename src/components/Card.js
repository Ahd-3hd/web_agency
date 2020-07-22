/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Card = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
`

export const PolygonCard = styled.div`
  margin: 1rem;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 0.4rem;
  transform: skew(${({ rotation = '20deg' }) => rotation});
  width: 100%;

  @media (max-width: 900px) {
    transform: skew(0);
  }
`

export const TeamCard = styled.div`
  width: 300px;
  padding: 50px 60px;
  margin-right: 2rem;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`
