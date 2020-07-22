/* eslint-disable camelcase */
import React from 'react'
import { Wrapper, LogoImg, TextContainer, Text, BackLink } from './404.style'
import logoImg from '../images/logo_zaat_orignal.png'

const Page_404 = () => (
  <Wrapper>
    <LogoImg src={logoImg} alt="zaat" />
    <TextContainer>
      <Text>
        <span>404</span>
        Page Not Found
      </Text>
    </TextContainer>
    <BackLink to="/">Go Back To Home Page</BackLink>
  </Wrapper>
)

export default Page_404
