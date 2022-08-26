import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FCR } from '../../util'

type AppThemeProviderProps = {}

const AppThemeProvider: FCR<AppThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'Oswald'].join(',')
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

export default AppThemeProvider
