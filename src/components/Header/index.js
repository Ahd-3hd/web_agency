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
  RightInnerContainer,
  RightCard,
} from './index.style'
import FacebookIcon from '../../static/FacebookIcon.svg'
import TwitterIcon from '../../static/TwitterIcon.svg'
import InstagramIcon from '../../static/InstagramIcon.svg'
import Gauge from '../Gauge'

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
    <RightContainer>
      <RightInnerContainer>
        <RightCard />
        <Gauge value="70" label="PERFORMANCE" top="-60%" left="15%" />
        <Gauge value="70" label="SEO" top="-70%" left="60%" />
        <Gauge value="70" label="Quality" top="110%" left="25%" />
      </RightInnerContainer>
    </RightContainer>
  </Wrapper>
)

export default Header
