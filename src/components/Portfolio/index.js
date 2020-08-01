import React, { useState } from 'react'
import {
  Wrapper,
  Title,
  SliderContainer,
  SliderInnerContainer,
  Project,
  ProjectLogo,
  ProjectDetails,
  ProjectTitle,
  ProjectTechs,
  ProjectDesc,
  ProjectLink,
  LogoTitleContainer,
  SliderNavigatorContainer,
  Indicator,
} from './index.style'

import masgazLogo from '../../images/masgaz_logo.svg'

const Portfolio = () => {
  const [distance, setDistance] = useState(0)
  return (
    <Wrapper>
      <Title>Explore Our Work - We strive for perfection</Title>
      <SliderContainer>
        <SliderInnerContainer distance={distance}>
          <Project>
            <LogoTitleContainer>
              <ProjectLogo src={masgazLogo} />
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
            </LogoTitleContainer>
            <ProjectDetails>
              <ProjectTechs>
                <span>Techs: </span>
                JavaScript, NodeJS, GatsbyJS, CSS, Python, Ngnix, JavaScript, NodeJS
              </ProjectTechs>
              <ProjectDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
              </ProjectDesc>
              <ProjectLink href="#">View Project</ProjectLink>
            </ProjectDetails>
          </Project>
          <Project>
            <LogoTitleContainer>
              <ProjectLogo src={masgazLogo} />
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
            </LogoTitleContainer>
            <ProjectDetails>
              <ProjectTechs>
                <span>Techs: </span>
                JavaScript, NodeJS, GatsbyJS, CSS, Python, Ngnix, JavaScript, NodeJS
              </ProjectTechs>
              <ProjectDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
              </ProjectDesc>
              <ProjectLink href="#">View Project</ProjectLink>
            </ProjectDetails>
          </Project>
          <Project>
            <LogoTitleContainer>
              <ProjectLogo src={masgazLogo} />
              <ProjectTitle>Lorem Ipsum</ProjectTitle>
            </LogoTitleContainer>
            <ProjectDetails>
              <ProjectTechs>
                <span>Techs: </span>
                JavaScript, NodeJS, GatsbyJS, CSS, Python, Ngnix, JavaScript, NodeJS
              </ProjectTechs>
              <ProjectDesc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper sem nec justo vehicula, sit amet fermentum ante ornare.
              </ProjectDesc>
              <ProjectLink href="#">View Project</ProjectLink>
            </ProjectDetails>
          </Project>
        </SliderInnerContainer>
        <SliderNavigatorContainer>
          <Indicator onClick={() => setDistance(0)} isActive={distance === 0} />
          <Indicator onClick={() => setDistance(-100)} isActive={distance === -100} />
          <Indicator onClick={() => setDistance(-200)} isActive={distance === -200} />
        </SliderNavigatorContainer>
      </SliderContainer>
    </Wrapper>
  )
}

export default Portfolio
