import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ServiceSection, Details, ServiceCards, FlipCardFront, FlipCardBack } from './service.style'
import { H2, Body2, Span } from './typography'
import { ServiceCard } from './Card'
import { colors } from '../utils'
import Fast from '../static/Fast.svg'
import SEO from '../static/SEO.svg'
import Conunsltation from '../static/Conunsltation.svg'
import SML from '../static/SML.svg'
import TA from '../static/TA.svg'
import Responsives from '../static/Responsives.svg'
import data from '../data'

const images = { Responsives, Conunsltation, TA, SML, SEO, Fast }
const Service = ({ refs }) => {
  const [styles, setStyle] = useState(new Array(6).fill({ flipped: false, style: {} }))
  const handleClick = i => {
    if (window.innerWidth < 900) {
      setStyle(prevStyle => {
        const newStyles = [...prevStyle]
        if (!newStyles[i].flipped) {
          newStyles[i] = {
            style: {
              transform: 'rotateY(180deg)',
            },
            flipped: true,
          }
          return newStyles
        }
        newStyles[i] = {
          flipped: false,
          style: {
            transform: 'rotateY(360deg)',
          },
        }
        return newStyles
      })
    }
  }
  return (
    <ServiceSection ref={refs}>
      <H2 color={colors.gray} center>
        Our Services
      </H2>
      <ServiceCards style>
        {data.map(({ name, summary, image }, i) => {
          const ServiceIcon = images[image]

          return (
            <ServiceCard style={styles[i].style} onClick={() => handleClick(i)}>
              <FlipCardFront>
                <ServiceIcon />
                <Span bold>{name}</Span>
              </FlipCardFront>
              <FlipCardBack>
                <Details>
                  <Body2 color={colors.gray2} center>
                    {summary}
                  </Body2>
                </Details>
              </FlipCardBack>
            </ServiceCard>
          )
        })}
      </ServiceCards>
    </ServiceSection>
  )
}

Service.propTypes = {
  refs: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
}

export default Service
