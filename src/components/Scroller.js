import React from 'react'
import PropTypes from 'prop-types'

import { FullPage, Slide } from 'react-full-page'
// import { BrowserView, MobileView } from 'react-device-detect'

const Scroller = ({ children }) => (
  <>
    <FullPage>
      {children.map(child => (
        <Slide>{child}</Slide>
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
