import styled from 'styled-components'

export const RectButton = styled.button`
  padding: 0.5rem 2rem;
  margin: 2rem;
  border: none;
  background: #2ab640;
  color: #ffffff;
  box-shadow: 0px 0px 8px rgba(81, 81, 81, 0.2);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  :hover {
    box-shadow: 0px 5px 15px rgba(81, 81, 81, 0.5);
  }
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: #26c0b722;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease;
    mix-blend-mode: screen;
    transform: scale(0);
    border-radius: 100%;
    transform-origin: center;
  }
  &:hover ::after {
    transform: scale(2);
  }
`

export const RoundButton = styled.button``
