import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../utils'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.7rem;
  * {
    margin: 0;
  }
  color: ${colors.gray};
`
const Title = styled.p`
  margin: 0;
`
const FieldsContainer = styled.div``
const FieldGroup = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.gray};
`
const FieldName = styled.p`
  font-weight: bold;
  padding-right: 0.5rem;
  flex: 1;
  color: ${colors.primary};
`
const FieldValue = styled.p`
  flex: 4;
`
// eslint-disable-next-line react/prop-types
const ReviewAndSubmit = ({ steps }) => {
  const { name, email, interest, message } = steps

  return (
    <Wrapper>
      <Title>Summary</Title>
      <FieldsContainer>
        <FieldGroup>
          <FieldName>Name:</FieldName>
          <FieldValue>{name.value}</FieldValue>
        </FieldGroup>
        <FieldGroup>
          <FieldName>Email:</FieldName>
          <FieldValue>{email.value}</FieldValue>
        </FieldGroup>
        <FieldGroup>
          <FieldName>Interest:</FieldName>
          <FieldValue>{interest.value}</FieldValue>
        </FieldGroup>
        <FieldGroup>
          <FieldName>Message:</FieldName>
          <FieldValue>{message.value && message.value.length > 50 ? message.value.slice(0, 50).concat('...') : message.value}</FieldValue>
        </FieldGroup>
      </FieldsContainer>
    </Wrapper>
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
