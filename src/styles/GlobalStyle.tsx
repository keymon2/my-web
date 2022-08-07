import styled, { createGlobalStyle } from 'styled-components'
import Mosk_Bold_700 from '../static/fonts/Mosk_Bold_700.ttf'
const GlobalStyle = createGlobalStyle`
div{
    font-size: 16px;
    font-family: 'NotoSans';
}
  @font-face {
        font-family: 'Mosk_Bold_700';
        src: local('Mosk_Bold_700'), local('Mosk_Bold_700');
        font-style: normal;
        src: url(${Mosk_Bold_700}) format('truetype');
  }
  body{
    margin:0px
  }
`

export const size = {
  desktopSmall: 1056,
  desktopMideum: 1440,
  desktopLarge: 1919,
}

export const devices = {
  desktop: {
    small: `(max-width: ${size.desktopSmall}px)`,
    medium: `(max-width: ${size.desktopMideum}px)`,
    large: `(max-width: ${size.desktopLarge}px)`,
  },
  lapTop: {},
}

export default GlobalStyle
