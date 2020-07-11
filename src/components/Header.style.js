import styled from 'styled-components'
import { animated } from 'react-spring'

export const Wrapper = styled(animated.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: 2s;
  background: ${({ bg }) =>
    bg
      ? ' radial-gradient(50% 98.88% at 50% 50%, rgba(84, 207, 97, 0.56) 0%, #2AB640 100%);'
      : '#ffffff'};
`

export const AnimatedSVG = styled(animated.svg)`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  mix-blend-mode: soft-light;
  transition: 1s ease-out;
  width: 100%;
  height: 100vh;
  fill: rgba(255, 255, 255, 0.3);
  z-index: 0;
`

export const AnimatedCircle1 = styled.div`
  position: absolute;
  width: 20vw;
  height: 20vw;
  border-radius: 20vw;
  background: rgba(79, 204, 93, 0.15);
  animation: animCircle1 30s ease-in infinite alternate-reverse;
  transform-origin: top;

  @keyframes animCircle1 {
    from {
      top: 0%;
      left: 0;
    }
    to {
      top: 60vh;
      left: 70%;
    }
  }
`

export const AnimatedCircle2 = styled.div`
  position: absolute;
  width: 10vw;
  height: 10vw;
  border-radius: 10vw;
  background: rgba(79, 204, 93, 0.15);
  animation: animCircle2 30s ease-in infinite alternate-reverse;
  transform-origin: top;

  @keyframes animCircle2 {
    from {
      top: 100%;
      left: 70%;
      border-radius: 40% 90%;
    }
    to {
      top: 0%;
      left: 0%;
      border-radius: 30% 30%;
    }
  }
  ::after {
    content: '';
    position: absolute;
    width: 10vw;
    height: 10vw;
    border-radius: 10vw;
    background: rgba(79, 204, 93, 0.15);
    animation: animCircle2after 70s ease-in infinite alternate-reverse;
    transform-origin: top;

    @keyframes animCircle2after {
      from {
        top: 100vw;
        left: 70vh;
        border-radius: 90vh 50vw;
      }
      to {
        top: 0vh;
        left: 50vw;
        border-radius: 50% 90%;
      }
    }
  }
`

export const AnimatedCircle3 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  background: rgba(79, 204, 93, 0.15);
  animation: animCircle3 70s ease-in infinite alternate-reverse;
  transform-origin: top left;
  top: 50%;
  left: 50%;
  position: absolute;
  @keyframes animCircle3 {
    from {
      transform: rotateZ(-180deg);
    }
    top {
      transform: rotateZ(180deg);
    }
  }
`
export const AnimatedCircle4 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  background: rgba(79, 204, 93, 0.15);
  animation: animCircle4 120s ease-in infinite alternate-reverse;
  transform-origin: top left;
  top: 80%;
  left: 70%;
  position: absolute;
  @keyframes animCircle4 {
    from {
      transform: rotateZ(180deg);
    }
    top {
      transform: rotateZ(-180deg);
    }
  }
`

export const AnimatedCircle5 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  background: rgba(79, 204, 93, 0.15);
  animation: animCircle5 120s ease-in infinite alternate-reverse;
  transform-origin: top left;
  top: 10%;
  left: 40%;
  position: absolute;
  @keyframes animCircle5 {
    from {
      transform: rotateZ(180deg);
    }
    top {
      transform: rotateZ(-180deg);
    }
  }
`
