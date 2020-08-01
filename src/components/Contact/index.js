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
} from './index.style'

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
      <ContentContainer />
    </Container>
  </Wrapper>
)

export default Contact
