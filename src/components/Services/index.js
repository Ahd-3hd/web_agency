import React from 'react'
import {
  Wrapper,
  TitleContainer,
  Title,
  ServicesContainer,
  Service,
  ServiceImage,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  ServiceLink,
} from './index.style'
import seoIcon from '../../images/seo_icon.png'
import rocketIcon from '../../images/rocket_icon.png'
import aiIcon from '../../images/ai_icon.png'
import langIcon from '../../images/ml_icon.png'

const Services = () => (
  <Wrapper id="services">
    <ServicesContainer>
      <Service>
        <ServiceImage bg={seoIcon} />
        <ServiceContent>
          <ServiceTitle>Search Engine Optimization</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
          </ServiceDescription>
          <ServiceLink>Read More..</ServiceLink>
        </ServiceContent>
      </Service>
      <Service>
        <ServiceImage bg={rocketIcon} />
        <ServiceContent>
          <ServiceTitle>Speed & Performance</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
          </ServiceDescription>
          <ServiceLink>Read More..</ServiceLink>
        </ServiceContent>
      </Service>
      <Service>
        <ServiceImage bg={aiIcon} />
        <ServiceContent>
          <ServiceTitle>Speed & Performance</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
          </ServiceDescription>
          <ServiceLink>Read More..</ServiceLink>
        </ServiceContent>
      </Service>
      <Service>
        <ServiceImage bg={langIcon} />
        <ServiceContent>
          <ServiceTitle>Localization & Language</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
          </ServiceDescription>
          <ServiceLink>Read More..</ServiceLink>
        </ServiceContent>
      </Service>
    </ServicesContainer>
    <TitleContainer>
      <Title>We can help your business grow</Title>
    </TitleContainer>
  </Wrapper>
)

export default Services
