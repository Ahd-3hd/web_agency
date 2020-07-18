import React from 'react'
import Layout from '../components/layout'
import Service from '../components/ServiceSection'

import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Service />
  </Layout>
)

export default IndexPage
