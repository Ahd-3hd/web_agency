import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { TeamCard } from './Card'
import { TeamSection, SocialBox, Link, CardsContainer } from '../styles/team'
import { H5, H4, Span } from './typography'
import GitHubIcon from '../static/GitHub.svg'
import LinkedInIcon from '../static/LinkedIn.svg'
import { colors } from '../utils'

const Team = ({ refs }) => {
  const data = useStaticQuery(graphql`
    query {
      ghassanImage: file(relativePath: { eq: "ghassan.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yosefImage: file(relativePath: { eq: "yosef.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ahdImage: file(relativePath: { eq: "ahd.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amanImage: file(relativePath: { eq: "aman.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <TeamSection ref={refs} id="team">
      <H5 color={colors.gray}>Our Team</H5>
      <CardsContainer>
        <TeamCard>
          <Img fluid={data.ghassanImage.childImageSharp.fluid} />
          <H4 color={colors.gray} center>
            Ghassan
          </H4>
          <Span color={colors.gray}>Team Lead</Span>
          <SocialBox>
            <GitHubIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
          <SocialBox>
            <LinkedInIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
        </TeamCard>
        <TeamCard>
          <Img fluid={data.yosefImage.childImageSharp.fluid} />
          <H4 color={colors.gray} center>
            Yosef
          </H4>
          <Span color={colors.gray}>Team Lead</Span>
          <SocialBox>
            <GitHubIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
          <SocialBox>
            <LinkedInIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
        </TeamCard>
        <TeamCard>
          <Img fluid={data.amanImage.childImageSharp.fluid} />
          <H4 color={colors.gray} center>
            Aman
          </H4>
          <Span color={colors.gray}>Team Lead</Span>
          <SocialBox>
            <GitHubIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
          <SocialBox>
            <LinkedInIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
        </TeamCard>
        <TeamCard>
          <Img fluid={data.ahdImage.childImageSharp.fluid} />
          <H4 color={colors.gray} center>
            Ahd
          </H4>
          <Span color={colors.gray}>Team Lead</Span>
          <SocialBox>
            <GitHubIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
          <SocialBox>
            <LinkedInIcon />
            <Link href="github.com">@ghassan</Link>
          </SocialBox>
        </TeamCard>
      </CardsContainer>
    </TeamSection>
  )
}
Team.propTypes = {
  refs: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
}

export default Team
