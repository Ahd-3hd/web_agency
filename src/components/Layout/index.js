/* eslint-disable no-unused-vars */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Global from '../Global'
import Chat from '../Chat'
import { colors } from '../../utils'

const Footer = styled.footer`
  padding: 0 1rem;
`
const FooterParagraph = styled.p`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global />
      <Navbar />
      <main>{children}</main>
      <Footer>
        <FooterParagraph>Made By Ahd Hani - All rights Reserved</FooterParagraph>
      </Footer>
      <Chat />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
