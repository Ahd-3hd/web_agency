import React from "react"

import Layout from "../components/layout"
import Image from "../components/Zaat_logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
     <SEO title="Home"/>
     <h2>Zatt.dev</h2>
     <span>Sections goes here</span>
     <Image/>
  </Layout>
)

export default IndexPage
