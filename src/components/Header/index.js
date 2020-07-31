import React from 'react'
import {
  Wrapper,
  LeftContainer,
  RightContainer,
  Logo,
  Title,
  Button,
  SocialContainer,
  SocialLinksContainer,
  SocialLink,
  SocialText,
} from './index.style'
import FacebookIcon from '../../static/FacebookIcon.svg'
import TwitterIcon from '../../static/TwitterIcon.svg'
import InstagramIcon from '../../static/InstagramIcon.svg'

const Header = () => (
  <Wrapper>
    <LeftContainer>
      <Logo>ZAAT.DEV</Logo>
      <Title>Keeping your customers engaged and happier than ever!</Title>
      <Button>CONTACT</Button>
      <SocialContainer>
        <SocialLinksContainer>
          <SocialLink href="#">
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="#">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="#">
            <InstagramIcon />
          </SocialLink>
        </SocialLinksContainer>
        <SocialText>@zaatdev</SocialText>
      </SocialContainer>
    </LeftContainer>
    <RightContainer />
  </Wrapper>
)

export default Header
