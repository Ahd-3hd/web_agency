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
  DesktopOnlyContactParagraph,
} from './Contact.style'
import { ButtonText } from './typography'
import { InputContainer, InputLabel, Input, TextField, SelectInput } from './InputFields'
import { RectButton } from './Buttons'
import { colors, formHandler } from '../utils'

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
  const [formState, setFormState] = useState('Send')
  const [name, setName] = useState('')
  const [interest, setInterest] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const inputsSetter = [setName, setInterest, setEmail, setMessage]

  const HandleSubmit = async e => {
    e.preventDefault()
    if (formState !== 'Send') return
    setFormState('Sending...')
    const success = await formHandler({
      source: 'form',
      name,
      interest,
      email,
      message,
    })
    if (success) {
      setFormState('Sent!, We will Contact you Soon')
      inputsSetter.forEach(setInput => setInput(''))
      setTimeout(() => {
        setFormState('Send')
      }, 2000)
      return
    }
    setFormState('Failed!, try refreshing the page! ')
  }
  return (
    <Wrapper>
      <InfoSection>
        <Title>Let&apos;s Talk</Title>
        <ContactParagraph>
          Come prepared with your problems, challenges and vison.
          <br />
          We will do whatever it takes to transform your vsion into relaity and your problems into fiction.
        </ContactParagraph>
        <DesktopOnlyContactParagraph>
          Come prepared with your problems, challenges and vison.
          <br />
          We will do whatever it takes to transform your vsion into relaity and your problems into fiction.
        </DesktopOnlyContactParagraph>
        <ContactInfoContainer>
          <NonSocialContactContainer>
            <SingleContactInfo href="/">
              <MapMarker />
              Esaaf Alnashashibi St 2, Sheikh Jarrah, Jerusalem
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
              <SocialLink target="_blank" href="https://www.facebook.com/zaatdev">
                <FacebookIcon />
              </SocialLink>
              <SocialLink target="_blank" href="https://twitter.com/zaatdev">
                <TwitterIcon />
              </SocialLink>
              <SocialLink target="_blank" href="https://www.instagram.com/zaatdev/">
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
          <Form onSubmit={HandleSubmit}>
            <NameEmailContainer>
              <InputContainer>
                <InputLabel focused={isNameFocused} htmlFor="name">
                  Name
                </InputLabel>
                <Input
                  required
                  name="name"
                  id="name"
                  placeholder="name"
                  borderColor={colors.secondary}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                  autoComplete="off"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel focused={isEmailFocused} htmlFor="email">
                  Email
                </InputLabel>
                <Input
                  required
                  name="email"
                  id="email"
                  placeholder="email"
                  type="email"
                  borderColor={colors.secondary}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  autoComplete="off"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </InputContainer>
            </NameEmailContainer>
            <InputContainer>
              <InputLabel focused={isInterestFocused} htmlFor="interest">
                Interest
              </InputLabel>
              <SelectInput
                required
                name="interest"
                id="interest"
                borderColor={colors.secondary}
                onFocus={() => setIsInterestFocused(true)}
                onBlur={() => setIsInterestFocused(false)}
                autoComplete="off"
                focused={isInterestFocused}
                value={interest}
                onChange={e => setInterest(e.target.value)}
              >
                <option hidden value="">
                  Why do you to contact Zaat
                </option>
                <option value="webapp">Building a Web App|Site</option>
                <option value="automation-ai">Automation|AI solution</option>
                <option value="inquiry">General inquiry</option>
                <option value="consultation">Consultation</option>
              </SelectInput>
            </InputContainer>
            <InputContainer>
              <InputLabel focused={isMessageFocused} htmlFor="message">
                Message
              </InputLabel>
              <TextField
                name="message"
                id="message"
                placeholder="message (Optional)"
                borderColor={colors.secondary}
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => setIsMessageFocused(false)}
                autoComplete="off"
                rows="3"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </InputContainer>
            <RectButton>
              <ButtonText>{formState}</ButtonText>
            </RectButton>
          </Form>
        </FormContainer>
      </FormSection>
    </Wrapper>
  )
}

export default Contact
