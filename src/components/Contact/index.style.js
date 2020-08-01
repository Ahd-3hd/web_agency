import styled from 'styled-components'
import { colors } from '../../utils'

export const Wrapper = styled.section``

export const Title = styled.h2`
  color: ${colors.black};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  text-align: center;
`

export const Container = styled.div``

export const FormContainer = styled.div``
export const ContentContainer = styled.div``

export const Form = styled.form`
  padding: 1rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  display: flex;
  flex-direction: column;
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
`
export const InputLabel = styled.label`
  color: ${colors.purple};
  font-weight: 500;
  font-size: 0.9rem;
`
export const InputField = styled.input`
  padding: 0.4rem 0.7rem;
  margin-top: 0.5rem;
  border-radius: 0.2rem;
  border: 1px solid ${colors.purple};
  color: ${colors.purple};
  font-weight: 600;
  ::placeholder {
    color: ${colors.purple.concat('99')};
    font-weight: 600;
  }
`
export const Button = styled.button`
  background: ${colors.purple};
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 10px ${colors.purple.concat('77')};
  margin: auto;
`
export const TextArea = styled.textarea`
  padding: 0.4rem 0.7rem;
  border-radius: 0.2rem;
  border: 1px solid ${colors.purple};
  color: ${colors.purple};
  font-weight: 600;
  resize: none;
  height: 4em;
  margin-top: 0.5rem;

  ::placeholder {
    color: ${colors.purple.concat('99')};
    font-weight: 600;
  }
`
