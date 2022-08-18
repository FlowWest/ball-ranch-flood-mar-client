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
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    height: '100%',
    padding: '2rem 0',
    maxWidth: '491px',
  },
  link: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '1.25px',
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.54)',
    '&:hover': {
      color: '#0B2901',
      borderBottom: '2px solid #0B2901',
    },
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
          <Grid item sx={{ flex: 2 }} className={styles.linksContainer}>
            <Box component={GatsbyLink} className={styles.link} to='/404'>
              Analysis
            </Box>
            <Box component={GatsbyLink} className={styles.link} to='/404'>
              Project Partners
            </Box>
            <Box component={GatsbyLink} className={styles.link} to='/404'>
              Contact
            </Box>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
