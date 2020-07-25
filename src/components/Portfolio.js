import React, { useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useTransition, animated } from 'react-spring'
import { H3, Body2, ListItem } from './typography'
import { Card } from './Card'
import { RectButton } from './Buttons'
import { PortfolioSection, PortofiloList, Wrapper, Logo, Content, Span, ParnetSlider, SliderWrapper } from '../styles/portfolio'

const Portfolio = () => {
  const projects = [{ name: 'masgaz.com' }, { name: 'gsgapp.io' }]

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "example.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [index, setIndex] = useState(0)
  const onClick = useCallback(i => setIndex(i, []))
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(50%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  // eslint-disable-next-line no-console
  console.log(transitions.length, 'how many are there deearling')
  return (
    <PortfolioSection>
      <ParnetSlider>
        <SliderWrapper>
          {transitions.map(({ item, props, key }, i) => {
            // eslint-disable-next-line no-console
            console.log(item, 'the hell is this')
            // eslint-disable-next-line no-console
            console.log('i', i)
            return (
              <animated.div onClick={() => onClick(i)} key={key} style={props}>
                <Card>
                  <Wrapper>
                    <Logo>
                      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    </Logo>
                    <Content>
                      <H3>{projects[item].name}</H3>
                      <Body2>
                        <Span color="rgba(36, 36, 36, 0.6)">Technlogies:</Span>
                        <Span>JavaScript</Span>
                        <Span>JavaScript</Span>
                        <Span>JavaScript</Span>
                        <Span>JavaScript</Span>
                      </Body2>
                      <Body2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum, iaculis et, et. Aliquam nisl amet lorem
                        quisque eu commodo leo. Neque curabitur scelerisque dignissim ornare. Pellentesque turpis sed magna tempor lorem.
                      </Body2>
                      <RectButton margin="0">Visit Website</RectButton>
                    </Content>
                  </Wrapper>
                </Card>
              </animated.div>
            )
          })}
        </SliderWrapper>
      </ParnetSlider>
      <PortofiloList>
        {projects.map(({ name }, i) => (
          <ListItem selected={index === i} onClick={() => onClick(i)}>
            {name}
          </ListItem>
        ))}
      </PortofiloList>
    </PortfolioSection>
  )
}

export default Portfolio
