import React from 'react'
import { FCR } from '../../util'
import { StyledEngineProvider } from '@mui/material/styles'
import AppThemeProvider from './theme'
import { CssBaseline } from '@mui/material'
import MetaLayout from './metaLayout'

const Layout: FCR = (props) => (
  <StyledEngineProvider injectFirst>
    <AppThemeProvider>
      <CssBaseline />
      <MetaLayout>{props.children}</MetaLayout>
    </AppThemeProvider>
  </StyledEngineProvider>
)

export default Layout
