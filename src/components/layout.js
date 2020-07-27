/* eslint-disable no-unused-vars */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import './layout.css'
import GlobalStyles from './global'

const Layout = ({ children }) => {
  const FullPageRef = useRef(null)
  const handleScroll = slide => {
    FullPageRef.current.scrollToSlide(slide)
  }
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
      <GlobalStyles />
      <div>
        <main>{children.map(child => React.cloneElement(child, { FullPageRef, handleScroll }))}</main>
        {/* <footer>
          {`© ${new Date().getFullYear()}, Built with`}
          <a href="https://zaat.dev">Zaat</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
