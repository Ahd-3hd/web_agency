import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Header from '../components/Header'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services />
      <Portfolio />
      <Team />
    </Layout>
  </>
)

export default IndexPage
