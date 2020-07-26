import React, { useState } from 'react'
import { isMobile, MobileView } from 'react-device-detect'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Chat from '../components/Chat'
import { ChatButton, WhatsAppButton } from '../components/Buttons'
import WhatsappIcon from '../static/WhatsappIcon.svg'
import CloseIcon from '../static/CloseIcon.svg'
import MessageIcon from '../static/MessageIcon.svg'

import Scroller from '../components/Scroller'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Navbar from '../components/Navbar'

const IndexPage = () => {
  const [toggleChat, setToggleChat] = useState(false)

  const renderChildren = () => {
    if (isMobile) {
      return (
        <MobileView>
          <Header />
          <Portfolio />
          <Team />
          <Contact />
        </MobileView>
      )
    }
    return (
      <Scroller>
        <Header />
        <Portfolio />
        <Team />
        <Contact />
      </Scroller>
    )
  }
  return (
    <div>
      <Layout>
        <SEO title="Home" />
        <Navbar />
        {renderChildren()}
        {toggleChat && (
          <WhatsAppButton width="30" iconColor="#ffffff" toggleChat href="https://wa.me/00972528072551">
            <WhatsappIcon />
          </WhatsAppButton>
        )}
        <ChatButton width="50" iconColor="#ffffff" onClick={() => setToggleChat(!toggleChat)}>
          {toggleChat ? <CloseIcon width="25" /> : <MessageIcon width="25" />}
        </ChatButton>
        {toggleChat && <Chat />}
      </Layout>
    </div>
  )
}

export default IndexPage
