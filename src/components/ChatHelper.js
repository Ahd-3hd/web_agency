import React from 'react'
import PropTypes from 'prop-types'

import { H4, Td } from './typography'

// eslint-disable-next-line react/prop-types
const ReviewAndSubmit = ({ steps }) => {
  const { name, email, interest, message } = steps
  return (
    <div style={{ width: '100%', padding: '12px', background: '#2ab640' }}>
      <H4 style={{ color: 'white' }}>Summary</H4>
      <table>
        <tbody>
          <tr>
            <Td>Name</Td>
            <Td>{name.value}</Td>
          </tr>
          <tr>
            <Td>Email</Td>
            <Td>{email.value}</Td>
          </tr>
          <tr>
            <Td>Interest</Td>
            <Td>{interest.value}</Td>
          </tr>
          <tr>
            <Td>Message</Td>
            <Td>{message ? message.value : 'Non'}</Td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
ReviewAndSubmit.propTypes = {
  steps: PropTypes.shape({
    name: PropTypes.object,
    email: PropTypes.object,
    interest: PropTypes.object,
    message: PropTypes.object,
  }).isRequired,
}

export default ReviewAndSubmit
