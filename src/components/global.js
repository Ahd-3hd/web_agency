import { createGlobalStyle } from 'styled-components'
import { fonts } from '../utils'
import './fonts.css'

export default createGlobalStyle`

  body{
    font-family:${fonts.primary};
    font-display:swap;
    max-width:1980px;
    margin:0 auto;
  }

  .rsc{
    @media (max-width:600px){
      left:0;
      width:80%;
    }
  }

`
