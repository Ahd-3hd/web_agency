import React from 'react'
import { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { TeamCard } from './Card'
import { TeamSection, JobTitle, SocialBox, Link, CardsContainer, Title } from '../styles/team'
import { H5 } from './typography'
import GitHubIcon from '../static/GitHub.svg'
import LinkedInIcon from '../static/LinkedIn.svg'

const Team = () => {
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
    }
  `)

  return (
    <TeamSection>
      <Title>Our Team</Title>
      <CardsContainer>
        <TeamCard>
          <Img fluid={data.ghassanImage.childImageSharp.fluid} />
          <H5
            css={css`
              text-align: center;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
            `}
          >
            Ghassan
          </H5>
          <JobTitle>Team Lead</JobTitle>
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
          <Img fluid={data.ghassanImage.childImageSharp.fluid} />
          <H5
            css={css`
              text-align: center;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
            `}
          >
            Ghassan
          </H5>
          <JobTitle>Team Lead</JobTitle>
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
          <Img fluid={data.ghassanImage.childImageSharp.fluid} />
          <H5
            css={css`
              text-align: center;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
            `}
          >
            Ghassan
          </H5>
          <JobTitle>Team Lead</JobTitle>
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
          <Img fluid={data.ghassanImage.childImageSharp.fluid} />
          <H5
            css={css`
              text-align: center;
              margin-top: 1rem;
              margin-bottom: 0.5rem;
            `}
          >
            Ghassan
          </H5>
          <JobTitle>Team Lead</JobTitle>
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

export default Team
