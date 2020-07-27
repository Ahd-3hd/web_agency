/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import { FullPage, Slide } from 'react-full-page'
// import { BrowserView, MobileView } from 'react-device-detect'

const Scroller = ({ children, FullPageRef, handleScroll }) => (
  <>
    <FullPage ref={FullPageRef}>
      {children.map(child => (
        <Slide>{child.type.name === 'Header' ? React.cloneElement(child, { handleScroll }) : child}</Slide>
      ))}
    </FullPage>
  </>
)
Scroller.propTypes = {
  children: PropTypes.element,
}
Scroller.defaultProps = {
  children: undefined,
}
export default Scroller
