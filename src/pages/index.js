import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Header from '../components/Header'
import Services from '../components/Services'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <Header />
      <Services />
    </Layout>
  </>
)

export default IndexPage
