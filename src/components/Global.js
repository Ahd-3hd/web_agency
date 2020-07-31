import { createGlobalStyle } from 'styled-components'
import './fonts.css'
import { fonts } from '../utils'

const GlobalStyles = createGlobalStyle`
  body{
    margin:0;
    font-family:${fonts.primary}
  }
  *{
    box-sizing:border-box;
  }
`

export default GlobalStyles
