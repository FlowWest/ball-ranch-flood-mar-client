import React from 'react'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { Container } from '@mui/material'
import Header from './header'
import { FCR } from '../../util'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    minHeight: '100vh',
  },
  main: {
    paddingBlock: '5rem',
    backgroundColor: theme.palette.background.default,
  },
}))

type MetaLayoutProps = {}

const MetaLayout: FCR<MetaLayoutProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Header />
      <Container maxWidth='lg'>
        <main className={styles.main}>{props.children}</main>
      </Container>
    </div>
  )
}

export default MetaLayout