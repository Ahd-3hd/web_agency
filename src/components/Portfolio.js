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
import logoTwo from '../images/truefalse.png'
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
            {projects[index].techs.map(tech => (
              <Span color={colors.gray2}>{tech}</Span>
            ))}
          </TechsContainer>
          <Body2 color={colors.gray}>{projects[index].description}</Body2>
          {projects[index].link && (
            <a target="_blank" rel="noopener noreferrer" href={projects[index].link}>
              <RectButton margin="0">
                <ButtonText>View</ButtonText>
              </RectButton>
            </a>
          )}
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
      title: 'Masgaz.com',
      description:
        'A multi language fast website, we created a CRM solution for the client, so they can easily add new content/items using (mobile), then automatically a new page that is fast, SEO optimized and multilingual will be generated!',
      techs: ['nginx', 'ReactJS', 'GatsyJS', 'AWS'],
      link: 'https:\\masgaz.com',
    },
    {
      logo: logoTwo,
      title: 'TrueOrFalse',
      description:
        "This project is an intitivate developed by Zaat's for responding COVID-19 crisis, Our soultion tackles the issue of false news or rumors spreading around. By creating a machine learning model that recognize similar texts and extartc entites.",
      techs: ['TensorFlow', 'ReactJS', 'AWS', 'Flask'],
      link: '',
    },
    {
      logo: logoThree,
      title: 'gsgapp.io',
      description:
        'We created a platform for hosting apps that are developed by Code Academy students. Code Academy is a program of Gaza Sky Geeks where students learn by developing MVP product to simulate real working environments.',
      techs: ['Nginx', 'AWS', 'NodeJS', 'DevOps'],
      link: 'https://www.gsgapp.io/',
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
      <H5 color={colors.gray} center>
        Our Portfolio
      </H5>
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
