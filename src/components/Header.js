/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
// import { Link } from 'gatsby'
// import PropTypes from 'prop-types'
import React from 'react'
import { config, useSprings } from 'react-spring'
import { Wrapper, TitlesContainer, SingleTitleContainer, TitleText, LogoFirstSentence } from './Header.style'
import { RectButton } from './Buttons'
import { ButtonText } from './typography'
import Navbar from './Navbar'

import GearsEmoji from '../static/GearsEmoji.svg'
import RocketEmoji from '../static/RocketEmoji.svg'
import PlaceholderEmoji from '../static/PlaceholderEmoji.svg'
import LogoLetter from '../images/zaat_logo_square.png'
import ZaatSquareLogo from '../static/ZaatSquareLogo.svg'
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
      <Navbar scrollFunc={scrollFunc} />
      <TitlesContainer>
        <SingleTitleContainer>
          <TitleText>
            <ZaatSquareLogo src={LogoLetter} alt="Z" />
            is for Zaat and Zaat is for:
          </TitleText>
        </SingleTitleContainer>
        {springs.map((props, i) => (
          <SingleTitleContainer style={props} key={i}>
            {React.createElement(emojis[i])}
            <TitleText>{titles[i]}</TitleText>
          </SingleTitleContainer>
        ))}
      </TitlesContainer>
      <RectButton onClick={() => scrollFunc(1)}>
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
