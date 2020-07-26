import React from 'react'
import { isMobile, MobileView } from 'react-device-detect'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Chat from '../components/Chat'
import Scroller from '../components/Scroller'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Navbar from '../components/Navbar'

const IndexPage = () => {
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
        <Chat />
      </Layout>
    </div>
  )
}

export default IndexPage
