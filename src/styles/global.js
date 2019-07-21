import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({
          theme: {
            colors: { light },
          },
        }) => light}
    }
`
