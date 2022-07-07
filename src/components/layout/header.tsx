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

import { FC } from '../../util'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    marginTop: '1rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
    fontSize: '2.5rem',
    fontWeight: 300,
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'end',
  },
  link: {
    fontSize: '1.25rem',
    textDecoration: 'none',
  },
}))

export interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const styles = useStyles()

  return (
    <AppBar
      component='header'
      position='static'
      elevation={0}
      className={styles.root}
    >
      <Toolbar>
        <Container maxWidth={false} className={styles.container}>
          <Grid item sx={{ flex: 1 }}>
            <Typography variant='h6' className={styles.title}>
              <Link
                to='/'
                component={GatsbyLink}
                sx={{ textDecoration: 'none' }}
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
