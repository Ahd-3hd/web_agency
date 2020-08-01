import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Header from '../components/Header'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services />
      <Portfolio />
    </Layout>
  </>
)

export default IndexPage
