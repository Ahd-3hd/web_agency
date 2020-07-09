import { createGlobalStyle } from 'styled-components'
import { fonts } from '../utils'
import './fonts.css'

export default createGlobalStyle`

  body{
    font-family:${fonts.primary};
    font-display:swap;
    max-width:1980px;
    margin:0 auto;
    user-select: none;
  }

`
