import React from 'react'
import { css } from 'styled-components'
import {
  ServiceSection,
  Details,
  ServiceCards,
  FlipCardFront,
  FlipCardBack,
} from './service.style'
import { H5, Body2, Span } from './typography'
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
const Service = () => (
  <ServiceSection>
    <H5
      css={css`
        text-align: center;
        margin: 0;
      `}
    >
      Our Services
    </H5>
    <Span
      css={css`
        text-align: center;
        margin: 0;
      `}
    >
      Design develop websites and webapps
    </Span>

    <ServiceCards>
      {data.map(({ name, summary, image }) => {
        const ServiceIcon = images[image]

        return (
          <ServiceCard>
            <FlipCardFront>
              <ServiceIcon />
              <Span
                css={css`
                  margin: 0;
                  text-align: center;
                `}
              >
                {name}
              </Span>
            </FlipCardFront>
            <FlipCardBack>
              <Details>
                <Body2
                  css={css`
                    font-weight: 400;
                    font-size: 14px;
                    line-height: normal;
                    margin: 0;
                  `}
                  color={colors.gray2}
                >
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

export default Service
