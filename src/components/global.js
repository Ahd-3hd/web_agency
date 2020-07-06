import { createGlobalStyle } from 'styled-components'
import { fonts } from '../utils'
import './fonts.css'

export default createGlobalStyle`

  body{
    font-family:${fonts.primary};
  }

`
