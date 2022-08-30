import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FCR } from '../../util'

export const mediaQueries = {
  /* Extra small devices (phones, 600px and down) */
below600: '@media only screen and (max-width: 600px)',

/* Small devices (portrait tablets and large phones, 600px and up) */
above600: '@media only screen and (min-width: 600px)',

/* Medium devices (landscape tablets, 768px and up) */
above768: '@media only screen and (min-width: 768px)',

/* Large devices (laptops/desktops, 992px and up) */
above992: '@media only screen and (min-width: 992px)',

/* Extra large devices (large laptops and desktops, 1200px and up) */
above1200: '@media only screen and (min-width: 1200px)'
}

type AppThemeProviderProps = {}

export const AppThemeProvider: FCR<AppThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'Oswald'].join(','),
      h1: {
        [mediaQueries.below600]: {
          fontSize: '18px',
        },
        [mediaQueries.above600]: {
          fontSize: '18px',
        },
        [mediaQueries.above768]: {
          fontSize: '18px',
        },
        [mediaQueries.above992]: {
          fontSize: '36px',
        },
        [mediaQueries.above1200]: {
          fontSize: '36px',
        },
      },
      h2: {
        [mediaQueries.below600]: {
          fontSize: '10px',
        },
        [mediaQueries.above600]: {
          fontSize: '10px',
        },
        [mediaQueries.above768]: {
          fontSize: '10px',
        },
        [mediaQueries.above992]: {
          fontSize: '20px',
        },
        [mediaQueries.above1200]: {
          fontSize: '20px',
        },
      },
    },
    palette: {
      primary: {
        main: '#337598',
      },
      secondary: {
        main: '#ddc9a3',
        dark: '#c8942a',
      },
      error: {
        main: '#c0392b',
      },
      success: {
        main: '#009432',
      },
    },
  })

  Object.assign(theme, {
    props: {
      // MuiTooltip: {
      //   arrow: true,
      // },
    },
    overrides: {
      // Name of the component
      // MuiTooltip: {
      //   // Name of the slot
      //   tooltip: {
      //     fontSize: '14px',
      //     backgroundColor: 'rgba(97, 97, 97, 1)',
      //   },
      //   arrow: {
      //     color: 'rgba(97, 97, 97, 1)',
      //   },
      // },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}