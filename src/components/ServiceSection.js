import React from 'react'
import { css } from 'styled-components'
import { ServiceSection, Details } from './service'
import { H4, H5, Body2 } from './typography'
import { ServiceCard } from './Card'
import Conunsltation from '../icons/Conunsltation.svg'
// import { fonts, colors } from '../../utils'
const Service = () => (
  <ServiceSection>
    <H4
      css={css`
        text-align: center;
      `}
    >
      Our Services
    </H4>
    <H5
      css={css`
        text-align: center;
      `}
    >
      Design develop websites and webapps
    </H5>
    <ServiceCard>
      <Conunsltation />
      <Details>
        <H5>Conunsltation</H5>
        <Body2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Massa elementum, iaculis et, et. Aliquam nisl amet lorem
          quisque eu commodo leo. Neque
        </Body2>
      </Details>
    </ServiceCard>
  </ServiceSection>
)

export default Service
