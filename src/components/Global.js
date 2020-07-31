import { createGlobalStyle } from 'styled-components'
import './fonts.css'
import { fonts } from '../utils'
import backgroundImageTransparent from '../images/backgroundtransparent.svg'
import backgroundImage from '../images/background.svg'

const GlobalStyles = createGlobalStyle`
  body{
    background:url(${backgroundImageTransparent}) no-repeat;
    background-size:contain;
    background-position:center ;
    background-attachment:fixed;
    margin:0;
    font-family:${fonts.primary};
    @media (min-width:1280px){
    background:url(${backgroundImage}) no-repeat;
    }
  }
  *{
    box-sizing:border-box;
  }
`

export default GlobalStyles
