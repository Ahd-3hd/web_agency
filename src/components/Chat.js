import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { colors } from '../utils/index'

const ChatContainer = styled(ChatBot)`
  position: fixed;
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
  }
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
const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}! What is your gender?',
    trigger: 'gender',
  },
  {
    id: 'gender',
    options: [
      { value: 'male', label: 'Male', trigger: '5' },
      { value: 'female', label: 'Female', trigger: '5' },
    ],
  },
  {
    id: '5',
    message: 'How old are you?',
    trigger: 'age',
  },
  {
    id: 'age',
    user: true,
    trigger: '7',
    validator: value => {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(value)) {
        return 'value must be a number'
        // eslint-disable-next-line no-else-return
      } else if (value < 0) {
        return 'value must be positive'
      } else if (value > 120) {
        return `${value}? Come on!`
      }

      return true
    },
  },
  {
    id: '7',
    message: 'Great! Check out your summary',
    trigger: 'review',
  },
  {
    id: 'review',
    message: 'here should be a custom component',
    trigger: 'update',
  },
  {
    id: 'update',
    message: 'Would you like to update some field?',
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
      { value: 'gender', label: 'Gender', trigger: 'update-gender' },
      { value: 'age', label: 'Age', trigger: 'update-age' },
    ],
  },
  {
    id: 'update-name',
    update: 'name',
    trigger: '7',
  },
  {
    id: 'update-gender',
    update: 'gender',
    trigger: '7',
  },
  {
    id: 'update-age',
    update: 'age',
    trigger: '7',
  },
  {
    id: 'end-message',
    message: 'Thanks! Your data was submitted successfully!',
    end: true,
  },
]

const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatContainer steps={steps} botDelay={500} userDelay={500} />
  </ThemeProvider>
)

export default Chat
