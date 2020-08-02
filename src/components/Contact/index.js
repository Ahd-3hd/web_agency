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
  <Wrapper id="contact">
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
            We solve problems; We are committed to utilizing technology to improve the quality of peoples lives and businesses.
          </Paragraph>
          <Paragraph>Reduce your costs, increase security and availability in one, smart move.</Paragraph>
        </TextContainer>
        <ContactDetailsContainer>
          <ContactLink href="#">
            <MapIcon />
            Istanbul - Turkey
          </ContactLink>
          <ContactLink href="#">
            <EmailIcon />
            ahdhani0@gmail.com
          </ContactLink>
          <ContactLink href="#">
            <CallIcon />
            (90) 531 900 65 30
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
            <SocialText>@ahdev</SocialText>
          </SocialContainer>
        </ContactDetailsContainer>
      </ContentContainer>
    </Container>
  </Wrapper>
)

export default Contact
