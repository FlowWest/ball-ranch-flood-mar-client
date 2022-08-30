import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FCR } from '../../util'

export const mediaQueries = {
  /* Anything above include: Small devices (portrait tablets and large phones, 600px and up) */
  below600: '@media only screen and (max-width: 600px)',

  /* Anything above include: Medium devices (landscape tablets, 768px and up) */
  below768: '@media only screen and (max-width: 768px)',

  /* Anything above include: Large devices (laptops/desktops, 992px and up) */
  below992: '@media only screen and (max-width: 992px)',

  /* Anything above include: Extra large devices (large laptops and desktops, 1200px and up) */
  below1200: '@media only screen and (max-width: 1200px)',

  above1200: '@media only screen and (min-width: 1200px)',
}

type AppThemeProviderProps = {}

export const AppThemeProvider: FCR<AppThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'Oswald'].join(','),
      h1: {
        [mediaQueries.above1200]: {
          fontSize: '36px',
        },
        [mediaQueries.below1200]: {
          fontSize: '36px',
        },
        [mediaQueries.below992]: {
          fontSize: '36px',
        },
        [mediaQueries.below768]: {
          fontSize: '18px',
        },
        [mediaQueries.below600]: {
          fontSize: '18px',
        },
      },
      h2: {
        [mediaQueries.above1200]: {
          fontSize: '20px',
        },
        [mediaQueries.below1200]: {
          fontSize: '20px',
        },
        [mediaQueries.below992]: {
          fontSize: '20px',
        },
        [mediaQueries.below768]: {
          fontSize: '10px',
        },
        [mediaQueries.below600]: {
          fontSize: '10px',
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