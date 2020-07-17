/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import { config, useSprings } from 'react-spring'
import {
  Wrapper,
  TitlesContainer,
  SingleTitleContainer,
  TitleText,
} from './Header.style'
import { RectButton } from './Buttons'
import { ButtonText } from './typography'

import GearsEmoji from '../static/GearsEmoji.svg'
import RocketEmoji from '../static/RocketEmoji.svg'
import PlaceholderEmoji from '../static/PlaceholderEmoji.svg'

const emojis = [RocketEmoji, GearsEmoji, PlaceholderEmoji]

// eslint-disable-next-line react/prop-types
const Header = ({ scrollFunc }) => {
  const titles = [
    'Building blazingly fast, smart apps',
    'Task automation so you focus on what matters',
    'Keeping your customers engaged and happier than they ever been',
  ]

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
            {React.createElement(emojis[i])}
            <TitleText>{titles[i]}</TitleText>
          </SingleTitleContainer>
        ))}
      </TitlesContainer>
      <RectButton>
        <ButtonText onClick={scrollFunc}>Contact</ButtonText>
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
