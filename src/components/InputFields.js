import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: flex-start;
`
export const Input = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.3rem;
  transition: 0.3s ease;
  font-weight: 600;
  color: #26c0b7;
  width: 100%;

  :focus {
    outline: none;
    border: 1px solid #26c0b7;
    box-shadow: 0px 0px 2px #26c0b7;
    ::placeholder {
      color: transparent;
    }
  }
  ::placeholder {
    color: rgba(84, 207, 97, 0.7);
    font-weight: 600;
  }
`
export const TextField = styled.textarea`
  width: 100%;

  padding: 0.6rem 1rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 0.3rem;
  transition: 0.3s ease;
  font-weight: 600;
  color: #26c0b7;
  resize: none;
  :focus {
    outline: none;
    border: 1px solid #26c0b7;
    box-shadow: 0px 0px 2px #26c0b7;
    ::placeholder {
      color: transparent;
    }
  }
  ::placeholder {
    color: rgba(84, 207, 97, 0.7);
    font-weight: 600;
  }
`
export const InputLabel = styled.label`
  align-self: flex-start;
  padding: 0 4px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ focused }) =>
    focused ? '#26c0b7' : 'rgba(84,207,97,0.7)'};
  background: #ffffff;
  position: relative;
  top: 10px;
  left: 1rem;
  display: flex;
  align-items: center;
  > svg {
    fill: ${({ focused }) =>
      focused ? '#26c0b7' : 'rgba(84,207,97,0.7)'};
    margin-right: 0.3rem;
  }
`
