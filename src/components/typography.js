import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  > svg {
    width: 1rem;
    min-width: 1rem;
    margin-right: 0.5rem;
    @media (min-width: 900px) {
      width: 2.5rem;
      min-width: 50px;
    }
  }
  color: ${({ color }) => color};
`
export const HeaderPhrases = styled.p`
  margin: 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  > svg {
    width: 1rem;
    min-width: 1rem;
    margin-right: 0.5rem;
    @media (min-width: 900px) {
      width: 2.5rem;
      min-width: 50px;
    }
  }
  color: ${({ color }) => color};
`
export const H2 = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 3rem;
  color: ${({ color }) => color};
  ${({ center }) => (center ? 'text-align: center' : null)}
`

export const H4 = styled.h4`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ color }) => color};
  margin: 0;
  margin-bottom: 0.5rem;
  ${({ center }) => (center ? 'text-align: center' : null)}
`
export const H5 = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ color }) => color};
  margin: 0;
  margin-bottom: 0.5rem;
  ${({ center }) => (center ? 'text-align: center' : null)}
`

export const Body1 = styled.p`
  font-size: 1.2rem;
  color: ${({ color }) => color};
  font-weight: 400;
`
export const Body2 = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  line-height: normal;
  margin: 0.7rem 0;
  color: ${({ color }) => color};
`

export const Span = styled.p`
  font-size: 0.85rem;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  text-align: center;
  margin: 0;
`
export const ButtonText = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color};
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  z-index: 2;
  position: relative;
`
export const Td = styled.td`
  font-size: 14px;
  background: #2ab640;
  color: #fff;
`
export const ListItem = styled.span`
  font-size: 1rem;
  font-weight: ${({ selected }) => (selected ? 800 : 400)};
`
