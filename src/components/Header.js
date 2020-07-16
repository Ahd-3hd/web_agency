/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import { useSpring, animated, config, useSprings } from 'react-spring'
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

const emojis = [HeartsEmoji, WowEmoji, StarEmoji]

const TitlesContainer = styled.div`
  z-index: 4;
`
const SingleTitleContainer = styled(animated.div)`
  display: flex;
  align-items: center;
  flex-direction: ${({ odd }) =>
    odd === 'true' ? 'row' : 'row-reverse'};
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
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Header = () => {
  const titles = [
    'This is First Text',
    'This is Second Text',
    'This is Third Text',
  ]
  // animating each title individually. leaving it a comment just in case we decided to go back
  // const titleOneAnimation = useSpring({
  //   from: {
  //     transform: 'translateX(110vw)',
  //   },
  //   to: {
  //     transform: 'translateX(0vw)',
  //   },
  //   config: config.gentle,
  // })
  // const titleTwoAnimation = useSpring({
  //   from: {
  //     transform: 'translateX(110vw)',
  //   },
  //   to: {
  //     transform: 'translateX(0vw)',
  //   },
  //   config: config.gentle,
  // })
  // const titleThreeAnimation = useSpring({
  //   from: {
  //     transform: 'translateX(110vw)',
  //   },
  //   to: {
  //     transform: 'translateX(0vw)',
  //   },
  //   config: config.gentle,
  // })

  // remove the delay if you want a better score
  const springs = useSprings(
    titles.length,
    titles.map((item, i) => ({
      from: {
        transform: 'translateX(110vw)',
      },
      to: {
        transform: 'translateX(0vw)',
      },
      config: config.gentle,
      delay: 1000 * i + 1,
    })),
  )
  return (
    <Wrapper>
      <TitlesContainer>
        {springs.map((props, i) => (
          <SingleTitleContainer
            style={props}
            // the reason i turned boolean to string is to stop reacts warning for passing boolean values as props..
            odd={(i % 2 !== 0).toString()}
            key={i}
          >
            <TitleText>{titles[i]}</TitleText>
            {React.createElement(emojis[i])}
          </SingleTitleContainer>
        ))}
      </TitlesContainer>
      {/* <AnimatedCircle1 />
      <AnimatedCircle2 />
      <AnimatedCircle3 />
      <AnimatedCircle4 />
      <AnimatedCircle5 /> */}
      <RectButton>
        <ButtonText>Contact</ButtonText>
      </RectButton>
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
