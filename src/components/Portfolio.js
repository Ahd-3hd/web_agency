/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react'
import { useTrail, config } from 'react-spring'
import PropTypes from 'prop-types'

import {
  Wrapper,
  SliderContainer,
  CardImageContainer,
  CardContentContainer,
  ExtendedCard,
  TechsContainer,
  AnimatedCard,
  SliderNavigatorContainer,
  SliderButton,
} from './Portfolio.style'
import { ButtonText, H4, Span, Body2, H5 } from './typography'
import { RectButton } from './Buttons'
import ArrowIcon from '../static/ArrowIcon.svg'
import logoOne from '../images/logo.svg'
import logoTwo from '../images/logo2.svg'
import logoThree from '../images/logo_3.svg'
import { colors } from '../utils'

const AnimatedContainer = ({ distance, projects }) => {
  const trail = useTrail(projects.length, {
    config,
    x: distance,
    from: { x: 0 },
  })
  return trail.map(({ x, ...rest }, index) => (
    <AnimatedCard style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }} key={index}>
      <ExtendedCard>
        <CardImageContainer>
          <img src={projects[index].logo} alt="thumbnail" />
        </CardImageContainer>
        <CardContentContainer>
          <H4 color={colors.gray}>{projects[index].title}</H4>
          <TechsContainer>
            <Span color={colors.gray}>Techs: </Span>
            <Span color={colors.gray2}>JavaScript</Span>
            <Span color={colors.gray2}>JavaScript</Span>
            <Span color={colors.gray2}>JavaScript</Span>
            <Span color={colors.gray2}>JavaScript</Span>
            <Span color={colors.gray2}>JavaScript</Span>
            <Span color={colors.gray2}>JavaScript</Span>
          </TechsContainer>
          <Body2 color={colors.gray}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum, iaculis et, et. Aliquam nisl amet lorem quisque eu
            commodo leo.
          </Body2>
          <RectButton margin="0">
            <ButtonText>View</ButtonText>
          </RectButton>
        </CardContentContainer>
      </ExtendedCard>
    </AnimatedCard>
  ))
}

const Portfolio = ({ refs }) => {
  const [distance, setDistance] = useState(0)
  const [disableLeft, setDisableLeft] = useState(false)
  const [disableRight, setDisableRight] = useState(false)
  const [projects] = useState([
    {
      logo: logoOne,
      title: 'Masgaz',
    },
    {
      logo: logoTwo,
      title: 'Quiz App',
    },
    {
      logo: logoThree,
      title: 'GSG App',
    },
  ])
  const handleSlide = d => {
    if (d > 0 && distance < 0) {
      setDistance(distance + d)
    } else if (d < 0 && distance >= -100) {
      setDistance(distance + d)
    }
  }

  useEffect(() => {
    if (distance === -200) {
      setDisableRight(true)
    } else {
      setDisableRight(false)
    }

    if (distance === 0) {
      setDisableLeft(true)
    } else {
      setDisableLeft(false)
    }
  }, [distance, handleSlide])

  return (
    <Wrapper ref={refs} id="portfolio">
      <H5 color={colors.gray}>Our Portfolio</H5>
      <SliderContainer>
        <AnimatedContainer distance={distance} projects={projects} />
      </SliderContainer>
      <SliderNavigatorContainer>
        <SliderButton onClick={() => handleSlide(100)} left>
          {!disableLeft && <ArrowIcon />}
        </SliderButton>
        <SliderButton onClick={() => handleSlide(-100)} right>
          {!disableRight && <ArrowIcon />}
        </SliderButton>
      </SliderNavigatorContainer>
    </Wrapper>
  )
}
Portfolio.propTypes = {
  refs: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
}

export default Portfolio
