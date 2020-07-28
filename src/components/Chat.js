import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { colors, formHandler } from '../utils'
import ChatHelper from './ChatHelper'
import squareLogo from '../images/zaat_logo_square.png'

const ChatContainer = styled(ChatBot)`
  /* position: fixed;
  bottom: 0;
  right: 10rem;
  animation: toggle 0.1s ease-out forwards;
  z-index: 999;
  @keyframes toggle {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  } */
`

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Poppins',
  headerBgColor: colors.primary,
  headerFontColor: '#fff',
  headerFontSize: '1.2rem',
  botBubbleColor: colors.primary,
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const emailReg = new RegExp('[^@]+@[^@]+\\.[^@]+')

const ChatSteps = [
  {
    id: 1,
    message: "Hey, I am Zaat's bot, What's your name?",
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    validator: value => (value ? true : 'please type something'),
    trigger: 3,
  },
  {
    id: 3,
    message: 'Nice to e-meet you {previousValue}. Could you tell me what are you interested in ? ',
    trigger: 'interest',
  },
  {
    id: 'interest',
    options: [
      {
        value: 'webapp',
        label: 'Building a Web App | Site',
        trigger: 4,
      },
      {
        value: 'automation-ai',
        label: 'Automation | AI solution',
        trigger: 4,
      },
      { value: 'inquiry', label: 'General Inquiry', trigger: 4 },
      { value: 'consultation', label: 'Consultation', trigger: 4 },
    ],
  },
  {
    id: 4,
    message: 'Please type your email address, to be able to reach you.',
    trigger: 'email',
  },
  {
    id: 'email',
    user: true,
    validator: value => (emailReg.test(value) ? true : 'Please insert correct email format'),
    trigger: 5,
  },
  {
    id: 5,
    message: 'Anything else you would like to add',
    trigger: 6,
  },
  {
    id: 6,
    options: [
      { value: 'no', label: 'no', trigger: 8 },
      { value: '', label: 'yes', trigger: 7 },
    ],
  },
  {
    id: 7,
    message: 'please type a message,',
    trigger: 'message',
  },
  { id: 'message', user: true, trigger: 8 },
  {
    id: 8,
    message: "Awesome, Here is what I am about to send To Zaat's Staff",
    trigger: 'review',
  },
  {
    id: 'review',
    component: <ChatHelper />,
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update anything?',
    trigger: 'update-question',
  },
  {
    id: 'update-question',
    options: [
      { value: 'yes', label: 'Yes', trigger: 'update-yes' },
      { value: 'no', label: 'No', trigger: 'end-message' },
    ],
  },
  {
    id: 'update-yes',
    message: 'What field would you like to update?',
    trigger: 'update-fields',
  },
  {
    id: 'update-fields',
    options: [
      { value: 'name', label: 'Name', trigger: 'update-name' },
      {
        value: 'interest',
        label: 'Interest',
        trigger: 'update-interest',
      },
      { value: 'email', label: 'Email', trigger: 'update-email' },
      {
        value: 'message',
        label: 'Message',
        trigger: 'update-message',
      },
    ],
  },
  {
    id: 'update-name',
    update: 'name',
    trigger: '8',
  },
  {
    id: 'update-interest',
    update: 'interest',
    trigger: '8',
  },
  {
    id: 'update-email',
    update: 'email',
    trigger: '8',
  },
  {
    id: 'update-message',
    update: 'message',
    trigger: '8',
  },

  {
    id: 'end-message',
    message: 'Thanks! Your form was submitted successfully!',
    end: true,
  },
]

const handleEnd = ({ steps: { name, interest, email, message = { value: 'NaN' } } }) => {
  formHandler({
    source: 'bot',
    name: name.value,
    interest: interest.value,
    email: email.value,
    message: message.value,
  })
}
const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatContainer
      steps={ChatSteps}
      headerTitle="Zaat's Bot"
      hideUserAvatar
      handleEnd={handleEnd}
      botAvatar={squareLogo}
      botDelay={500}
      userDelay={500}
      floating
    />
  </ThemeProvider>
)

export default Chat
