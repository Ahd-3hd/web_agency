import { createGlobalStyle } from 'styled-components'
import { fonts, colors } from '../utils'
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
  .full-page-controls {
  position: fixed;
  left: 1%;
  top: 50%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  align-items: center;
}

.full-page-controls button:first-child {
  display: none;
}
.full-page-controls button:last-child {
  display: none;
}

.full-page-controls button {
  background: ${colors.primary};
  border: none;
  margin: 0.5rem 0;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  color: ${colors.primary};
  cursor: pointer;
  transition: 0.3s;
  font-size: 0;
}

.full-page-controls button:disabled {
  background: ${colors.gray};
  color: #06d6a0;
  width: 20px;
  height: 20px;
  border-radius: 20px;
}

@media only screen and (max-width: 1023px) {
  .full-page-controls {
    display: none;
  }
}
`
