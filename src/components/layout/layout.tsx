import React from 'react'
import { FCR } from '../../util'
import { StylesProvider } from '@mui/styles'
import { AppThemeProvider } from './theme'
import { CssBaseline } from '@mui/material'
import MetaLayout from './metaLayout'

const Layout: FCR = (props) => (
  <StylesProvider injectFirst>
    <AppThemeProvider>
      <CssBaseline />
      <link
        href='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css'
        rel='stylesheet'
      />
      <MetaLayout>{props.children}</MetaLayout>
    </AppThemeProvider>
  </StylesProvider>
)

export default Layout
