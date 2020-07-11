// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import {
  Wrapper,
  AnimatedCircle1,
  AnimatedCircle2,
  AnimatedCircle3,
  AnimatedCircle4,
  AnimatedCircle5,
} from './Header.style'
import { RectButton } from './Buttons'
import { ButtonText, H2 } from './typography'
import { colors } from '../utils'

import HeartsEmoji from '../static/HeartsEmoji.svg'
import WowEmoji from '../static/WowEmoji.svg'
import StarEmoji from '../static/StarEmoji.svg'

const TitlesContainer = styled.div`
  z-index: 99;
`
const SingleTitleContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  > svg {
    margin: 0 1rem;
    width: 50px;
    #hearts {
      animation: heartsAnim 1s infinite alternate-reverse;
      transform-origin: top left;
      @keyframes heartsAnim {
        from {
          transform: scale(0.5);
        }
        to {
          transform: scale(1.3);
        }
      }
    }
    #mouth {
      animation: mouthAnim 3s infinite alternate-reverse;
      transform-origin: center;
      @keyframes mouthAnim {
        from {
          transform: scale(0.5);
        }
        to {
          transform: scale(1.3);
        }
      }
    }
    #stars {
      animation: starAnim 1s infinite alternate-reverse;
      transform-origin: 50% 50%;
      @keyframes starAnim {
        from {
          transform: scale(0.5);
          fill: #dd2e44;
        }
        to {
          transform: scale(1);
          fill: #ff8859;
        }
      }
    }
  }
`
const TitleText = styled(H2)`
  color: ${colors.primary};
  margin: 0;
`

const Header = () => {
  const titleOneAnimation = useSpring({
    from: {
      transform: 'translateX(110vw)',
    },
    to: {
      transform: 'translateX(0vw)',
    },
    delay: 1000,
    config: config.gentle,
  })
  const titleTwoAnimation = useSpring({
    from: {
      transform: 'translateX(110vw)',
    },
    to: {
      transform: 'translateX(0vw)',
    },
    delay: 1500,
    config: config.gentle,
  })
  const titleThreeAnimation = useSpring({
    from: {
      transform: 'translateX(110vw)',
    },
    to: {
      transform: 'translateX(0vw)',
    },
    delay: 2000,
    config: config.gentle,
  })
  return (
    <Wrapper>
      <TitlesContainer>
        <SingleTitleContainer style={titleOneAnimation}>
          <TitleText>This is a text</TitleText>
          <HeartsEmoji />
        </SingleTitleContainer>
        <SingleTitleContainer style={titleTwoAnimation}>
          <WowEmoji />
          <TitleText>This is a text</TitleText>
        </SingleTitleContainer>
        <SingleTitleContainer style={titleThreeAnimation}>
          <TitleText>This is a text</TitleText>
          <StarEmoji />
        </SingleTitleContainer>
      </TitlesContainer>
      <RectButton>
        <ButtonText>Contact</ButtonText>
      </RectButton>
      <AnimatedCircle1 />
      <AnimatedCircle2 />
      <AnimatedCircle3 />
      <AnimatedCircle4 />
      <AnimatedCircle5 />
    </Wrapper>
  )
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
