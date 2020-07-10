import React from 'react'
import Layout from '../components/layout'
import Image from '../components/Zaat_logo'
import SEO from '../components/seo'

import PortfolioSection from '../components/PortfolioSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Zatt.dev</h2>
    <span>Sections goes here</span>
    <Image />
    <PortfolioSection />
  </Layout>
)

export default IndexPage
