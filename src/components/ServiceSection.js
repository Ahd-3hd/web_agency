import React from 'react'
import { css } from 'styled-components'
import {
  ServiceSection,
  Details,
  ServiceCards,
  CircleNumber,
  Line,
} from './service.style'
import { H4, H5, Body2,Span } from './typography'
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
    <H4
      css={css`
        text-align: center;
        margin:0;
      `}
    >
      Our Services
    </H4>
    <H5
      css={css`
        text-align: center;
        margin:0;
      `}
    >
      Design develop websites and webapps
    </H5>

    <ServiceCards>
      {data.map(({ name, summary, image }, i) => {
        const ServiceIcon = images[image]

        return (
          <ServiceCard>
            <ServiceIcon />
            <Details>
              <Span
                css={css`
                  margin:0;
                `}
              >
                {name}
              </Span>
              <Body2
                css={css`
                  font-weight: 400;
                  font-size:14px;
                  line-height: normal;
                  margin:0;
                `}
                color={colors.gray2}
              >
                {summary}
              </Body2>
            </Details>
            <Line />
            <CircleNumber>{i + 1}</CircleNumber>
          </ServiceCard>
        )
      })}
    </ServiceCards>
  </ServiceSection>
)

export default Service
