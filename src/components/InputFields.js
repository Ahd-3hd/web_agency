import styled from "styled-components"

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
  color: ${({ focused }) => (focused ? "#26c0b7" : "rgba(84,207,97,0.7)")};
  background: #ffffff;
  position: relative;
  top: 10px;
  left: 1rem;
  > svg {
    fill: ${({ focused }) => (focused ? "#26c0b7" : "rgba(84,207,97,0.7)")};
  }
`

// export const UserIcon = ({ width }) => (
//   <svg
//     width={`${width}px`}
//     viewBox="0 0 21 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path d="M14.7188 10.2656C13.5625 11.4219 12.1562 12 10.5 12C8.84375 12 7.42188 11.4219 6.23438 10.2656C5.07812 9.07812 4.5 7.65625 4.5 6C4.5 4.34375 5.07812 2.9375 6.23438 1.78125C7.42188 0.59375 8.84375 0 10.5 0C12.1562 0 13.5625 0.59375 14.7188 1.78125C15.9062 2.9375 16.5 4.34375 16.5 6C16.5 7.65625 15.9062 9.07812 14.7188 10.2656ZM14.7188 13.5C16.4375 13.5 17.9062 14.125 19.125 15.375C20.375 16.5938 21 18.0625 21 19.7812V21.75C21 22.375 20.7812 22.9062 20.3438 23.3438C19.9062 23.7812 19.375 24 18.75 24H2.25C1.625 24 1.09375 23.7812 0.65625 23.3438C0.21875 22.9062 0 22.375 0 21.75V19.7812C0 18.0625 0.609375 16.5938 1.82812 15.375C3.07812 14.125 4.5625 13.5 6.28125 13.5H7.07812C8.17188 14 9.3125 14.25 10.5 14.25C11.6875 14.25 12.8281 14 13.9219 13.5H14.7188Z" />
//   </svg>
// );
