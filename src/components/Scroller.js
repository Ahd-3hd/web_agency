import React from 'react'
import PropTypes from 'prop-types'

import { FullPage, Slide } from 'react-full-page'

const Scroller = ({ children }) => (
  <FullPage>
    {children.map(child => (
      <Slide>{child}</Slide>
    ))}
  </FullPage>
)
export default Scroller

Scroller.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
