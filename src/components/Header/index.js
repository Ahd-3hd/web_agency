/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
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

const Header = () => {
  const [performance, setPerformance] = useState(0)
  const [seo, setSeo] = useState(0)
  const [quality, setQuality] = useState(0)
  const [isBig, setIsBig] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      performance > 100 ? setPerformance(0) : setPerformance(performance + 1)
    }, 50)
    return () => clearTimeout(timer)
  }, [performance])
  useEffect(() => {
    const timer = setTimeout(() => {
      seo > 100 ? setSeo(0) : setSeo(seo + 1)
    }, 150)
    return () => clearTimeout(timer)
  }, [seo])
  useEffect(() => {
    const timer = setTimeout(() => {
      quality > 100 ? setQuality(0) : setQuality(quality + 1)
    }, 10)
    return () => clearTimeout(timer)
  }, [quality])
  useEffect(() => (window.innerWidth >= 1280 ? setIsBig(true) : setIsBig(false)))
  return (
    <Wrapper id="home">
      <LeftContainer>
        <Logo>ZAAT.DEV</Logo>
        <Title>Keeping your customers engaged and happier than ever!</Title>
        <Button href="#contact">CONTACT</Button>
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
          {isBig && <Gauge value={performance} label="PERFORMANCE" top="-60%" left="15%" />}
          {isBig && <Gauge value={seo} label="SEO" top="-70%" left="60%" />}
          {isBig && <Gauge value={quality} label="QUALITY" top="110%" left="25%" />}
        </RightInnerContainer>
      </RightContainer>
    </Wrapper>
  )
}

export default Header
