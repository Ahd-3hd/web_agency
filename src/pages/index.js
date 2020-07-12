import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Chat from '../components/Chat'
import { RoundButton } from '../components/Buttons'
import CallIcon from '../static/CallIcon.svg'
import Root from '../components/Root'

const ChatButton = styled(RoundButton)`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
`

const WhatsAppButton = styled(RoundButton)`
  position: fixed;
  right: 0.5rem;
  bottom: 0px;
  z-index: 999;
  animation: animatewa 0.3s ease forwards;
  @keyframes animatewa {
    from {
      bottom: 0px;
    }
    to {
      bottom: 60px;
    }
  }
`

const IndexPage = () => {
  const [toggleChat, setToggleChat] = useState(false)

  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <Root />
        {toggleChat && (
          <WhatsAppButton width="30" iconColor="#ffffff" toggleChat>
            <CallIcon />
          </WhatsAppButton>
        )}
        <ChatButton
          width="50"
          iconColor="#ffffff"
          onClick={() => setToggleChat(!toggleChat)}
        >
          <CallIcon />
        </ChatButton>
        {toggleChat && <Chat />}
      </Layout>
    </div>
  )
}

export default IndexPage
