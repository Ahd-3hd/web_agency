import React from 'react'
import {
  Wrapper,
  Title,
  Container,
  FormContainer,
  ContentContainer,
  Form,
  InputGroup,
  InputLabel,
  InputField,
  Button,
  TextArea,
  TextContainer,
  Paragraph,
  ContactDetailsContainer,
  ContactLink,
  SocialContainer,
  SocialLinksContainer,
  SocialLink,
  SocialText,
} from './index.style'
import MapIcon from '../../static/MapIcon.svg'
import EmailIcon from '../../static/EmailIcon.svg'
import CallIcon from '../../static/CallIcon.svg'
import FacebookIcon from '../../static/FacebookIcon.svg'
import TwitterIcon from '../../static/TwitterIcon.svg'
import InstagramIcon from '../../static/InstagramIcon.svg'

const Contact = () => (
  <Wrapper>
    <Title>Let&apos;s Talk</Title>
    <Container>
      <FormContainer>
        <Form>
          <InputGroup>
            <InputLabel>Name</InputLabel>
            <InputField placeholder="Name" />
          </InputGroup>
          <InputGroup>
            <InputLabel>Email</InputLabel>
            <InputField placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <InputLabel>Interest</InputLabel>
            <InputField placeholder="Interest" />
          </InputGroup>
          <InputGroup>
            <InputLabel>Message</InputLabel>
            <TextArea placeholder="Message" />
          </InputGroup>
          <Button>SEND</Button>
        </Form>
      </FormContainer>
      <ContentContainer>
        <TextContainer>
          <Paragraph>
            Come prepared with your problems, challenges and vision. We will do whatever it takes to transform your vision into reality and
            your problems into fiction.
          </Paragraph>
          <Paragraph>Is it to have had contacting Zaat, better Than not having at all !?.</Paragraph>
        </TextContainer>
        <ContactDetailsContainer>
          <ContactLink href="#">
            <MapIcon />
            Esaaf Alnashashibi St 2, Sheikh Jarrah, Jerusalem
          </ContactLink>
          <ContactLink href="#">
            <EmailIcon />
            info@zaat.dev
          </ContactLink>
          <ContactLink href="#">
            <CallIcon />
            (972) 52 807 2551
          </ContactLink>
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
        </ContactDetailsContainer>
      </ContentContainer>
    </Container>
  </Wrapper>
)

export default Contact
