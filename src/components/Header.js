/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { config, useSprings } from 'react-spring'
import PropTypes from 'prop-types'
import { Wrapper, TitlesContainer, SingleTitleContainer } from './Header.style'
import { RectButton } from './Buttons'
import { ButtonText, H3 } from './typography'
import { colors } from '../utils'
import GearsEmoji from '../static/GearsEmoji.svg'
import RocketEmoji from '../static/RocketEmoji.svg'
import ZaatSquareLogo from '../static/ZaatSquareLogo.svg'
import LeafEmoji from '../static/LeafEmoji.svg'

const emojis = [RocketEmoji, GearsEmoji, LeafEmoji]

// eslint-disable-next-line react/prop-types
const Header = ({ handleScroll, refs }) => {
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
        transform: 'translateX(300%)',
      },
      to: {
        transform: 'translateX(0%)',
      },
      config: config.gentle,
      delay: 1000 * i + 1,
    })),
  )
  return (
    <Wrapper ref={refs} id="header">
      <TitlesContainer>
        <SingleTitleContainer>
          <H3 color={colors.primary}>
            <ZaatSquareLogo />
            is for Zaat and Zaat is for:
          </H3>
        </SingleTitleContainer>
        {springs.map((props, i) => (
          <SingleTitleContainer style={props} key={i}>
            {React.createElement(emojis[i])}
            <H3 color={colors.primary}>{titles[i]}</H3>
          </SingleTitleContainer>
        ))}
      </TitlesContainer>
      <RectButton onClick={() => handleScroll(4)}>
        <ButtonText>Contact</ButtonText>
      </RectButton>
    </Wrapper>
  )
}

Header.propTypes = {
  refs: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
  handleScroll: PropTypes.func.isRequired,
}

export default Header
