import React from 'react'
import { css } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import { TeamCard } from './Card'
import { TeamSection, JobTitle, SocialBox, CardsContainer, Title, TeamLink } from '../styles/team'
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
    github: 'ghassanmas',
    linkdin: 'Ghassan',
    fullname: 'Ghassan Maslamani',
  },
  {
    name: 'Yosef',
    img: 'yosefImage',
    title: 'Full-stack Developer',
    github: 'yosefanajjar',
    linkdin: 'yosefanajjar',
    fullname: 'Yousef Alnajjar',
  },
  {
    name: 'Aman Shawar',
    img: 'amanImage',
    title: 'Desinger & Fron-end Developer',
    github: 'amanshawar',
    linkdin: 'aman-shawar-27a15a168',
  },
  {
    name: 'Ahd',
    img: 'ahdImage',
    title: 'Mobile Developer',
    github: 'Zeus3hd',
    linkdin: 'ahdradwan',
    fullname: 'Ahd Radwan',
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
        {shuffleArray(members).map(({ name, img, title, github, linkdin, fullname }) => (
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
              <TeamLink target="_blank" rel="noopener noreferrer" href={`https:\\github.com/${github}`}>
                {`@${github}`}
              </TeamLink>
            </SocialBox>
            <SocialBox>
              <LinkedInIcon />
              <TeamLink target="_blank" rel="noopener noreferrer" href={`https://github.com/in/${linkdin}`}>
                {fullname}
              </TeamLink>
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
