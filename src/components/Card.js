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
`
