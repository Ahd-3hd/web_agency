import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
// import Image from '../components/Zaat_logo'
import SEO from '../components/seo'
import Chat from '../components/Chat'
import { RoundAnchorButton, RoundButton } from '../components/Buttons'
import WhatsappIcon from '../static/WhatsappIcon.svg'
import CloseIcon from '../static/CloseIcon.svg'
import MessageIcon from '../static/MessageIcon.svg'
import Scroller from '../components/Scroller'

const ChatButton = styled(RoundButton)`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 999;
`

const WhatsAppButton = styled(RoundAnchorButton)`
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
        <Scroller />
        {toggleChat && (
          <WhatsAppButton
            width="30"
            iconColor="#ffffff"
            toggleChat
            href="https://wa.me/00972528072551"
          >
            <WhatsappIcon />
          </WhatsAppButton>
        )}
        <ChatButton
          width="50"
          iconColor="#ffffff"
          onClick={() => setToggleChat(!toggleChat)}
        >
          {toggleChat ? (
            <CloseIcon width="25" />
          ) : (
            <MessageIcon width="25" />
          )}
        </ChatButton>
        {toggleChat && <Chat />}
      </Layout>
    </div>
  )
}

export default IndexPage
