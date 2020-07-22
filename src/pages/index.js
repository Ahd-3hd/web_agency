import React, { useState } from 'react'
import Layout from '../components/layout'
import Service from '../components/ServiceSection'

import SEO from '../components/seo'
import Chat from '../components/Chat'
import { ChatButton, WhatsAppButton } from '../components/Buttons'
import WhatsappIcon from '../static/WhatsappIcon.svg'
import CloseIcon from '../static/CloseIcon.svg'
import MessageIcon from '../static/MessageIcon.svg'
import Scroller from '../components/Scroller'

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
        <Service />
      </Layout>
    </div>
  )
}

export default IndexPage
