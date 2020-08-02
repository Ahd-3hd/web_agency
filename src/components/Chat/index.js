import React from 'react'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'
import { colors } from '../../utils'

const theme = {
  background: '#f5f8fb',
  headerBgColor: colors.green,
  headerFontColor: '#fff',
  headerFontSize: '1.2rem',
  botBubbleColor: colors.green,
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  fontFamily: 'Lato',
  fontWeight: 500,
}
const ChatSteps = [
  {
    id: '1',
    message: 'Please type a number',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    validator: value => {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(value)) {
        return 'value should be a number'
      }
      return true
    },
    trigger: '1',
  },
]

const Chat = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={ChatSteps} headerTitle="Zaat's Bot" hideUserAvatar botDelay={500} userDelay={500} floating />
  </ThemeProvider>
)

export default Chat
