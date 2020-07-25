/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useCallback } from 'react'
import { useTrail, config } from 'react-spring'

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
} from './Portfolio.style'
import { RectButton } from './Buttons'
import exampleImage from '../images/example.jpg'
import { ButtonText } from './typography'

const AnimatedContainer = ({ distance }) => {
  const trail = useTrail(3, {
    config,
    x: distance,
    from: { x: 0 },
  })
  return trail.map(({ x, height, ...rest }, index) => (
    <AnimatedCard style={{ ...rest, transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}>
      <ExtendedCard>
        <CardImageContainer>
          <img src={exampleImage} alt="thumbnail" />
        </CardImageContainer>
        <CardContentContainer>
          <ExtendedH4>Project Title</ExtendedH4>
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
            commodo leo. Neque curabitur scelerisque dignissim ornare. Pellentesque turpis sed magna tempor lorem.
          </ExtendedBody2>
          <RectButton>
            <ButtonText>View</ButtonText>
          </RectButton>
        </CardContentContainer>
      </ExtendedCard>
    </AnimatedCard>
  ))
}

const Portfolio = () => {
  const [distance, setDistance] = useState(0)

  const handleSlide = d => {
    if (d > 0 && distance < 0) {
      setDistance(distance + d)
    } else if (d < 0 && distance >= -100) {
      setDistance(distance + d)
    }
    console.log(distance, d)
  }

  return (
    <Wrapper>
      <SliderContainer>
        <AnimatedContainer distance={distance} />
      </SliderContainer>
      <div
        style={{
          position: 'absolute',
        }}
      >
        <button onClick={() => handleSlide(100)}>Left</button>
        <button onClick={() => handleSlide(-100)}>right</button>
      </div>
    </Wrapper>
  )
}

export default Portfolio

{
  /* <Card>
<Wrapper>
  <Logo>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </Logo>
  <Content>
    <H3>This is Title</H3>
    <Body2>
      <Span color="rgba(36, 36, 36, 0.6)">Technlogies:</Span>
      <Span>JavaScript</Span>
      <Span>JavaScript</Span>
      <Span>JavaScript</Span>
      <Span>JavaScript</Span>
    </Body2>
    <Body2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum, iaculis et, et. Aliquam nisl amet lorem quisque eu
      commodo leo. Neque curabitur scelerisque dignissim ornare. Pellentesque turpis sed magna tempor lorem.
    </Body2>
    <RectButton margin="0">Visit Website</RectButton>
  </Content>
</Wrapper>
</Card> */
}

{
  /* <ExtendedCard>
<CardImageContainer>
  <img src={exampleImage} />
</CardImageContainer>
<CardContentContainer>
  <ExtendedH4>Project Title</ExtendedH4>
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
    commodo leo. Neque curabitur scelerisque dignissim ornare. Pellentesque turpis sed magna tempor lorem.
  </ExtendedBody2>
  <RectButton>
    <ButtonText>View</ButtonText>
  </RectButton>
</CardContentContainer>
</ExtendedCard>
<ExtendedCard>
<CardImageContainer>
  <img src={exampleImage} />
</CardImageContainer>
<CardContentContainer>
  <ExtendedH4>Project Title</ExtendedH4>
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
    commodo leo. Neque curabitur scelerisque dignissim ornare. Pellentesque turpis sed magna tempor lorem.
  </ExtendedBody2>
  <RectButton>
    <ButtonText>View</ButtonText>
  </RectButton>
</CardContentContainer>
</ExtendedCard>
<ExtendedCard>
<CardImageContainer>
  <img src={exampleImage} />
</CardImageContainer>
<CardContentContainer>
  <ExtendedH4>Project Title</ExtendedH4>
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
    commodo leo. Neque curabitur scelerisque dignissim ornare. Pellentesque turpis sed magna tempor lorem.
  </ExtendedBody2>
  <RectButton>
    <ButtonText>View</ButtonText>
  </RectButton>
</CardContentContainer>
</ExtendedCard> */
}
