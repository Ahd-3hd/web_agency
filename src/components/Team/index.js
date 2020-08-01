import React from 'react'
import {
  Wrapper,
  TitleContainer,
  Title,
  TeamContainer,
  Member,
  MemberImage,
  MemberDetails,
  MemberName,
  MemberDesc,
  MemberLinksContainer,
  MemberLink,
} from './index.style'
import GithubIcon from '../../static/GithubIcon.svg'

const Team = () => (
  <Wrapper id="team">
    <TeamContainer>
      <Member>
        <MemberImage src="https://i.pravatar.cc/300" />
        <MemberDetails>
          <MemberName>Lorem Ipsum</MemberName>
          <MemberDesc>
            <span>Team Lead -</span>
            enjoys yelling at the computer for doing exactly what it was asked for. Hates bugs but can&apos;t seem to get rid of them.
            considers the keyboard a musical instrument
          </MemberDesc>
          <MemberLinksContainer>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
          </MemberLinksContainer>
        </MemberDetails>
      </Member>
      <Member reverse>
        <MemberImage src="https://i.pravatar.cc/300" />
        <MemberDetails reverse>
          <MemberName>Lorem Ipsum</MemberName>
          <MemberDesc>
            <span>Team Lead -</span>
            enjoys yelling at the computer for doing exactly what it was asked for. Hates bugs but can&apos;t seem to get rid of them.
            considers the keyboard a musical instrument
          </MemberDesc>
          <MemberLinksContainer>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
          </MemberLinksContainer>
        </MemberDetails>
      </Member>
      <Member>
        <MemberImage src="https://i.pravatar.cc/300" />
        <MemberDetails>
          <MemberName>Lorem Ipsum</MemberName>
          <MemberDesc>
            <span>Team Lead -</span>
            enjoys yelling at the computer for doing exactly what it was asked for. Hates bugs but can&apos;t seem to get rid of them.
            considers the keyboard a musical instrument
          </MemberDesc>
          <MemberLinksContainer>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
          </MemberLinksContainer>
        </MemberDetails>
      </Member>
      <Member reverse>
        <MemberImage src="https://i.pravatar.cc/300" />
        <MemberDetails reverse>
          <MemberName>Lorem Ipsum</MemberName>
          <MemberDesc>
            <span>Team Lead -</span>
            enjoys yelling at the computer for doing exactly what it was asked for. Hates bugs but can&apos;t seem to get rid of them.
            considers the keyboard a musical instrument
          </MemberDesc>
          <MemberLinksContainer>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
            <MemberLink href="#">
              <GithubIcon />
              @loremipsum
            </MemberLink>
          </MemberLinksContainer>
        </MemberDetails>
      </Member>
    </TeamContainer>
    <TitleContainer>
      <Title>Get to know us; We would love to hear from you..</Title>
    </TitleContainer>
  </Wrapper>
)

export default Team
