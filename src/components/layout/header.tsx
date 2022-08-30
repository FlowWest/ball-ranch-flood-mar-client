import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Link,
  Box,
  Container,
} from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import LinksRow from '../uiComponents/linksRow'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    height: '15vh',
  },
  toolbar: {
    width: '100%',
    height: '100%',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    fontFamily: 'Oswald',
    letterSpacing: '0.25px',
    lineHeight: '32px',
    color: '#1E1E1E',
  },
}))

const Header = () => {
  const styles = useStyles()

  return (
    <AppBar
      component='header'
      position='static'
      elevation={0}
      className={styles.root}
    >
      <Toolbar className={styles.toolbar}>
        <Container maxWidth={false} className={styles.container}>
          <Grid item sx={{ flex: 1 }} className={styles.titleContainer}>
            <Typography variant='h1' className={styles.title}>
              <Link
                to='/'
                component={GatsbyLink}
                sx={{ textDecoration: 'none', color: '#0B2901' }}
              >
                Ball Ranch Flood-MAR
              </Link>
            </Typography>
          </Grid>

          <LinksRow
            flex={2}
            maxWidth='491px'
            links={[
              { text: 'Analysis', route: '/analysis' },
              { text: 'Project Partners', route: '/project-partners' },
              { text: 'Contact', route: '/404' },
            ]}
          />
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
