import React, { useState } from 'react'
import {
  Wrapper,
  Title,
  InfoSection,
  FormSection,
  ContactParagraph,
  SocialContainer,
  SocialIconsContainer,
  SocialText,
  ContactInfoContainer,
  NonSocialContactContainer,
  SingleContactInfo,
  Form,
  NameEmailContainer,
  FormContainer,
  FormTitle,
  SocialLink,
} from './Contact.style'
import { ButtonText } from './typography'
import {
  InputContainer,
  InputLabel,
  Input,
  TextField,
  SelectInput,
} from './InputFields'
import { RectButton } from './Buttons'
import { colors } from '../utils'

import MapMarker from '../static/MapMarker.svg'
import EmailSVG from '../static/EmailIcon.svg'
import CallSVG from '../static/CallIcon.svg'
import FacebookIcon from '../static/FacebookIcon.svg'
import TwitterIcon from '../static/TwitterIcon.svg'
import InstagramIcon from '../static/InstagramIcon.svg'

const Contact = () => {
  // keep track of whether a field is focused or not
  const [isNameFocused, setIsNameFocused] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isInterestFocused, setIsInterestFocused] = useState(false)
  const [isMessageFocused, setIsMessageFocused] = useState(false)
  return (
    <Wrapper>
      <InfoSection>
        <Title>Let&apos;s Talk</Title>
        <ContactParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras a condimentum risus. Vivamus maximus tellus
          sollicitudin luctus pellentesque.
        </ContactParagraph>
        <ContactInfoContainer>
          <NonSocialContactContainer>
            <SingleContactInfo href="/">
              <MapMarker />
              Jerusalem, Sheikh Jarrah, Esaaf Alnashashibi St
            </SingleContactInfo>
            <SingleContactInfo href="mailto:info@zaat.dev">
              <EmailSVG />
              info@zaat.dev
            </SingleContactInfo>
            <SingleContactInfo href="tel:00972528072551">
              <CallSVG />
              (972) 52 807 2551
            </SingleContactInfo>
          </NonSocialContactContainer>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialLink
                target="_blank"
                href="https://www.facebook.com/zaatdev"
              >
                <FacebookIcon />
              </SocialLink>
              <SocialLink
                target="_blank"
                href="https://twitter.com/zaatdev"
              >
                <TwitterIcon />
              </SocialLink>
              <SocialLink
                target="_blank"
                href="https://www.instagram.com/zaatdev/"
              >
                <InstagramIcon />
              </SocialLink>
            </SocialIconsContainer>
            <SocialText>@zaatdev</SocialText>
          </SocialContainer>
        </ContactInfoContainer>
      </InfoSection>
      <FormSection>
        <FormContainer>
          <FormTitle>Get in touch..</FormTitle>
          <Form>
            <NameEmailContainer>
              <InputContainer>
                <InputLabel
                  focused={isNameFocused}
                  htmlFor="username"
                >
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
            </NameEmailContainer>
            <InputContainer>
              <InputLabel
                focused={isInterestFocused}
                htmlFor="interest"
              >
                Interest
              </InputLabel>
              <SelectInput
                name="interest"
                id="interest"
                borderColor={colors.secondary}
                onFocus={() => setIsInterestFocused(true)}
                onBlur={() => setIsInterestFocused(false)}
                autoComplete="off"
                focused={isInterestFocused}
              >
                <option defaultValue>Choose</option>
                <option value="webapp">Build Webapp</option>
                <option value="automation">Automate tasks</option>
                <option value="inquiry">General inquiry</option>
                <option value="consultation">Consultation</option>
              </SelectInput>
            </InputContainer>
            <InputContainer>
              <InputLabel
                focused={isMessageFocused}
                htmlFor="message"
              >
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
                rows="2"
              />
            </InputContainer>
            <RectButton onClick={e => e.preventDefault()}>
              <ButtonText>SEND</ButtonText>
            </RectButton>
          </Form>
        </FormContainer>
      </FormSection>
    </Wrapper>
  )
}

export default Contact
