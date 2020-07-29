import React from 'react'
import { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import { TeamCard } from './Card'
import { TeamSection, JobTitle, SocialBox, Link, CardsContainer, Title } from '../styles/team'
import { H5 } from './typography'
import GitHubIcon from '../static/GitHub.svg'
import LinkedInIcon from '../static/LinkedIn.svg'

function shuffleArray(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // eslint-disable-next-line no-param-reassign
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const members = [
  {
    name: 'Ghassan',
    img: 'ghassanImage',
    title: 'Team Lead',
    github: 'Ghassan',
    linkdin: 'Ghassan',
  },
  {
    name: 'Yosef',
    img: 'yosefImage',
    title: 'Team Lead',
    github: 'Yosef',
    linkdin: 'Yosef',
  },
  {
    name: 'Aman',
    img: 'amanImage',
    title: 'Team Lead',
    github: 'Aman',
    linkdin: 'Aman',
  },
  {
    name: 'Ahd',
    img: 'ahdImage',
    title: 'Team Lead',
    github: 'Ahd',
    linkdin: 'Ahd',
  },
]

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
      <Title>Our Team</Title>
      <CardsContainer>
        {shuffleArray(members).map(({ name, img, title, github, linkdin }) => (
          <TeamCard>
            <Img fluid={data[img].childImageSharp.fluid} />
            <H5
              css={css`
                text-align: center;
                margin-top: 1rem;
                margin-bottom: 0.5rem;
              `}
            >
              {name}
            </H5>
            <JobTitle>{title}</JobTitle>
            <SocialBox>
              <GitHubIcon />
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <Link href={`https://github.com/${github}`}>@{github}</Link>
            </SocialBox>
            <SocialBox>
              <LinkedInIcon />
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <Link href={`https://github.com/${linkdin}`}>@{linkdin}</Link>
            </SocialBox>
          </TeamCard>
        ))}
      </CardsContainer>
    </TeamSection>
  )
}

Team.propTypes = {
  refs: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
}

export default Team
