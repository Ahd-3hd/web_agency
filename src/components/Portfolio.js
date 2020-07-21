import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { H3, Body2 } from './typography'
import { PolygonCard as Card } from './Card'
import { RectButton } from './Buttons'
import { PortfolioSection, Wrapper, Logo, Content, Span, CardWrapper } from '../styles/portfolio'

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
      {/* <H3
        css={css`
          text-align: center;
        `}
      >
        Our Portfolio
      </H3> */}
      <CardWrapper>
        <Card rotation="-20deg">
          <Wrapper rotation="20deg">
            <Logo>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </Logo>
            <Content>
              <H3>Big Site Name</H3>
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
        </Card>
      </CardWrapper>
      <CardWrapper>
        <Card>
          <Wrapper>
            <Logo>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </Logo>
            <Content>
              <H3>Big Site Name</H3>
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
        </Card>
      </CardWrapper>
    </PortfolioSection>
  )
}

export default Portfolio
