import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from 'styled-components'

import { H3, H1, Body2, Body1 } from './typography'
import { Card } from './Card'
import { RectButton } from './Buttons'
import {
  PortfolioSection,
  Wrapper,
  Logo,
  Content,
  Span,
  CardWrapper,
} from '../styles/portfolio'
import Play from '../icons/play.svg'

const Portfolio = () => {
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

  return (
    <PortfolioSection>
      <H3
        css={css`
          text-align: center;
        `}
      >
        Our Portfolio
      </H3>
      <CardWrapper>
        <Card>
          <Wrapper>
            <Logo>
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
              <Play className="icon" />
            </Logo>
            <Content>
              <H1>Big Site Name</H1>
              <Body2>
                <Span color="rgba(36, 36, 36, 0.6)">
                  Technlogies:
                </Span>
                <Span>JavaScript</Span>
                <Span>JavaScript</Span>
                <Span>JavaScript</Span>
                <Span>JavaScript</Span>
              </Body2>
              <Body1>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Massa elementum, iaculis et, et. Aliquam nisl
                amet lorem quisque eu commodo leo. Neque curabitur
                scelerisque dignissim ornare. Pellentesque turpis sed
                magna tempor lorem.
              </Body1>
              <RectButton>Visit Website</RectButton>
            </Content>
          </Wrapper>
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card>
          <Wrapper>
            <Content>
              <H1>Big Site Name</H1>
              <Body2>
                <Span color="rgba(36, 36, 36, 0.6)">
                  Technlogies:
                </Span>
                <Span>JavaScript</Span>
                <Span>JavaScript</Span>
                <Span>JavaScript</Span>
                <Span>JavaScript</Span>
              </Body2>
              <Body1>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Massa elementum, iaculis et, et. Aliquam nisl
                amet lorem quisque eu commodo leo. Neque curabitur
                scelerisque dignissim ornare. Pellentesque turpis sed
                magna tempor lorem.
              </Body1>
              <RectButton>Visit Website</RectButton>
            </Content>
            <Logo>
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
              <Play className="icon" />
            </Logo>
          </Wrapper>
        </Card>
      </CardWrapper>
    </PortfolioSection>
  )
}

export default Portfolio
