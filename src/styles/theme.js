import React from 'react'

import { ThemeProvider } from 'styled-components'
const theme = {
  colors: {
    light: '#f9f7f7',
    gray: '#dbe2ef',
    grey: '#737582',
    blue: '#3f72af',
    navy: '#112d4e',
  },
  headings: {
    small: ['1em', '1.25em', '1.5em'],
    big: ['2em', '2.5em', '3em'],
  },
  fontFamily: 'Roboto, sans-serif',
  boxSizing: 'border-box',
  boxShadows: {
    regular: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);',
    hover: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);',
  },
  fontSizes: [12, 14, 16, 18, 20],
  breakPoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
