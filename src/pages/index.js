import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
// import SEO from '../components/seo'
import { H3, H1, Body2, Body1 } from '../components/typography'
import { Card } from '../components/Card'
import { RectButton } from '../components/Buttons'
import { Wrapper, Logo, Content, Span } from '../styles/portfolio'
import Play from '../icons/play.svg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "example.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 547) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <H3>Our Portfolio</H3>
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
              <Span color="rgba(36, 36, 36, 0.6)">Technlogies:</Span>
              <Span>JavaScript</Span>
              <Span>JavaScript</Span>
              <Span>JavaScript</Span>
              <Span>JavaScript</Span>
            </Body2>
            <Body1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Massa elementum, iaculis et, et. Aliquam nisl amet lorem
              quisque eu commodo leo. Neque curabitur scelerisque
              dignissim ornare. Pellentesque turpis sed magna tempor
              lorem.
            </Body1>
            <RectButton>Visit Website</RectButton>
          </Content>
        </Wrapper>
      </Card>
    </Layout>
  )
}

export default IndexPage
