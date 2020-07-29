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
  ExtendedH4,
  ExtendedBody2,
  ExtendedSpan,
  AnimatedCard,
  Title,
  SliderNavigatorContainer,
  SliderButton,
  ExtendedButton,
} from './Portfolio.style'
import { ButtonText } from './typography'
import ArrowIcon from '../static/ArrowIcon.svg'
import logoOne from '../images/logo.svg'
import logoTwo from '../images/truefalse.png'
import logoThree from '../images/logo_3.svg'

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
          <ExtendedH4>{projects[index].title}</ExtendedH4>
          <TechsContainer>
            <ExtendedSpan>Techs: </ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
            <ExtendedSpan>JavaScript</ExtendedSpan>
          </TechsContainer>
          <ExtendedBody2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum, iaculis et, et. Aliquam nisl amet lorem quisque eu
            commodo leo.
          </ExtendedBody2>
          <ExtendedButton>
            <ButtonText>View</ButtonText>
          </ExtendedButton>
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
      <Title>Our Portfolio</Title>
      <SliderContainer>
        <AnimatedContainer distance={distance} projects={projects} />
      </SliderContainer>
      <SliderNavigatorContainer>
        <SliderButton onClick={() => handleSlide(100)} left aria-label="left">
          {!disableLeft && <ArrowIcon />}
        </SliderButton>
        <SliderButton onClick={() => handleSlide(-100)} right aria-label="right">
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
