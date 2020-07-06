import React, { useState } from 'react'
import {
  Wrapper,
  InfoSection,
  FormSection,
  Logo,
  ContactDetails,
  DetailContainer,
  ContactDetailsSection,
  DividerContainer,
  Divider,
  ExtendedCard,
  Form,
  ExtendedSubtitle,
  ExtendedH2,
  ExtendedBody2,
} from './Contact.style'
import { Span, ButtonText } from './typography'
import {
  InputContainer,
  InputLabel,
  Input,
  TextField,
} from './InputFields'
import { RectButton } from './Buttons'
import logo from '../images/logo_zaat_orignal.png'
import { colors } from '../utils'

import MapMarker from '../static/MapMarker.svg'
import EmailSVG from '../static/EmailIcon.svg'
import CallSVG from '../static/CallIcon.svg'
import FacebookIcon from '../static/FacebookIcon.svg'
import TwitterIcon from '../static/TwitterIcon.svg'
import InstagramIcon from '../static/InstagramIcon.svg'
import UserIcon from '../static/UserIcon.svg'

const Contact = () => {
  // keep track of whether a field is focused or not
  const [isNameFocused, setIsNameFocused] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isInterestFocused, setIsInterestFocused] = useState(false)
  const [isMessageFocused, setIsMessageFocused] = useState(false)
  return (
    <Wrapper>
      <InfoSection>
        <ExtendedH2 color={colors.gray}>Let&apos;s Talk</ExtendedH2>
        <ExtendedBody2 color={colors.gray}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras a condimentum risus. Vivamus maximus tellus
          sollicitudin luctus pellentesque.
        </ExtendedBody2>
        <Logo src={logo} alt="logo" />

        <ContactDetails>
          <ContactDetailsSection>
            <DetailContainer to="/">
              <MapMarker />
              <Span color={colors.gray}>
                Palestine - Westbank 1234st.
              </Span>
            </DetailContainer>

            <DetailContainer to="/">
              <EmailSVG />
              <Span color={colors.gray}>Example@example.com</Span>
            </DetailContainer>

            <DetailContainer to="/">
              <CallSVG />
              <Span color={colors.gray}>( 970 ) 599 123 45</Span>
            </DetailContainer>
          </ContactDetailsSection>
          <DividerContainer>
            <Divider shift />
            <Divider />
          </DividerContainer>
          <ContactDetailsSection>
            <DetailContainer to="/">
              <FacebookIcon />
              <Span color={colors.gray}>Zaat.Dev</Span>
            </DetailContainer>

            <DetailContainer to="/">
              <TwitterIcon />
              <Span color={colors.gray}>@Zaat.Dev</Span>
            </DetailContainer>
            <DetailContainer to="/">
              <InstagramIcon />
              <Span color={colors.gray}>@Zaat.Dev</Span>
            </DetailContainer>
          </ContactDetailsSection>
        </ContactDetails>
      </InfoSection>
      <FormSection>
        <ExtendedCard>
          <Form>
            <ExtendedSubtitle color={colors.primary}>
              Get in touch
            </ExtendedSubtitle>
            <InputContainer>
              <InputLabel focused={isNameFocused} htmlFor="username">
                <UserIcon width="10" />
                Name
              </InputLabel>
              <Input
                name="username"
                id="username"
                placeholder="Username"
                borderColor={colors.secondary}
                onFocus={() => setIsNameFocused(true)}
                onBlur={() => setIsNameFocused(false)}
                autoComplete="off"
              />
            </InputContainer>

            <InputContainer>
              <InputLabel focused={isEmailFocused} htmlFor="email">
                <UserIcon width="10" />
                Email
              </InputLabel>
              <Input
                name="email"
                id="email"
                placeholder="email"
                borderColor={colors.secondary}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                autoComplete="off"
              />
            </InputContainer>

            <InputContainer>
              <InputLabel
                focused={isInterestFocused}
                htmlFor="interest"
              >
                <UserIcon width="10" />
                Interest
              </InputLabel>
              <Input
                name="interest"
                id="interest"
                placeholder="interest"
                borderColor={colors.secondary}
                onFocus={() => setIsInterestFocused(true)}
                onBlur={() => setIsInterestFocused(false)}
                autoComplete="off"
              />
            </InputContainer>

            <InputContainer>
              <InputLabel
                focused={isMessageFocused}
                htmlFor="message"
              >
                <UserIcon width="10" />
                Message
              </InputLabel>
              <TextField
                name="message"
                id="message"
                placeholder="message"
                borderColor={colors.secondary}
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                autoComplete="off"
                rows="3"
              />
            </InputContainer>
            <RectButton onClick={e => e.preventDefault()}>
              <ButtonText>SEND</ButtonText>
            </RectButton>
          </Form>
        </ExtendedCard>
      </FormSection>
    </Wrapper>
  )
}

export default Contact
