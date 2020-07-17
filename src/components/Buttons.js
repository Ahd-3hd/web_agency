import styled from 'styled-components'

export const RectButton = styled.button`
  padding: 0.5rem 2rem;
  margin: 1rem;
  border: none;
  background: #2ab640;
  color: #ffffff;
  box-shadow: 0px 0px 8px rgba(81, 81, 81, 0.2);
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  overflow: hidden;
  outline: lightgreen;
  :hover {
    box-shadow: 0px 5px 15px rgba(81, 81, 81, 0.5);
  }
  position: relative;
  ::after {
    content: '';
    background: #54cf61;
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 200px;
    align-self: center;
    justify-self: center;
    left: 0;
    top: 0;
    transform: scale(0);
    transform-origin: center;
  }
  :active {
    ::after {
      animation: animate_button 0.3s ease 0s forwards;
    }
    box-shadow: 0px 1px 4px rgba(81, 81, 81, 0.5);
  }

  @keyframes animate_button {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(2);
      opacity: 1;
    }
  }
`

export const RoundButton = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: ${({ width }) => width}px;
  border: none;
  background: #2ab640;
  color: #ffffff;
  box-shadow: 0px 0px 8px rgba(81, 81, 81, 0.2);
  margin: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  overflow: hidden;
  outline: lightgreen;
  > svg {
    fill: ${({ iconColor }) => iconColor};
    z-index: 2;
    position: relative;
  }
  :hover {
    box-shadow: 0px 5px 15px rgba(81, 81, 81, 0.5);
  }
  position: relative;
  ::after {
    content: '';
    background: #54cf61;
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 200px;
    align-self: center;
    justify-self: center;
    left: 0;
    top: 0;
    transform: scale(0);
    transform-origin: center;
  }
  :active {
    ::after {
      animation: animate_button 0.3s ease 0s forwards;
    }
    box-shadow: 0px 1px 4px rgba(81, 81, 81, 0.5);
  }

  @keyframes animate_button {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(2);
      opacity: 1;
    }
  }
`

export const RoundAnchorButton = styled.a`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  border-radius: ${({ width }) => width}px;
  border: none;
  background: #2ab640;
  color: #ffffff;
  box-shadow: 0px 0px 8px rgba(81, 81, 81, 0.2);
  margin: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  overflow: hidden;
  outline: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${({ iconColor }) => iconColor};
    z-index: 2;
    position: relative;
  }
  :hover {
    box-shadow: 0px 5px 15px rgba(81, 81, 81, 0.5);
  }
  position: relative;
  ::after {
    content: '';
    background: #54cf61;
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 200px;
    align-self: center;
    justify-self: center;
    left: 0;
    top: 0;
    transform: scale(0);
    transform-origin: center;
  }
  :active {
    ::after {
      animation: animate_button 0.3s ease 0s forwards;
    }
    box-shadow: 0px 1px 4px rgba(81, 81, 81, 0.5);
  }

  @keyframes animate_button {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(2);
      opacity: 1;
    }
  }
`
