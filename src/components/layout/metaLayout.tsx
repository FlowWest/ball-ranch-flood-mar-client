import React from 'react'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import Header from './header'
import { FCR } from '../../util'
import Footer from './footer'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    minHeight: '100vh',
  },
  main: {
    backgroundColor: theme.palette.background.default,
  },
}))

type MetaLayoutProps = {}

const MetaLayout: FCR<MetaLayoutProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default MetaLayout
