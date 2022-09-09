import React from 'react'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
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
    backgroundColor: theme.palette.background.default,
  },
}))

type MetaLayoutProps = {}

const MetaLayout: FCR<MetaLayoutProps> = (props) => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <main className={styles.main}>{props.children}</main>
    </div>
  )
}

export default MetaLayout
