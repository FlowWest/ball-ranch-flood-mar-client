import React, { useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box, Grid } from '@mui/material'
import GatsbyLink from 'gatsby-link'

const useStyles = makeStyles(() => ({
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'end',
    height: '100%',
    padding: '1.25rem 0',
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

interface Link {
  text: string
  route: string
  onClick?: () => void
}

interface LinksRowProps {
  links: Link[]
  flex?: number
  maxWidth?: string
}

const LinksRow = (props: LinksRowProps) => {
  const styles = useStyles()

  return (
    <Grid
      item
      sx={{ flex: props.flex, maxWidth: props.maxWidth }}
      className={styles.linksContainer}
    >
      {props.links.map((link) =>
        link.onClick ? (
          <div className={styles.link} onClick={() => link.onClick?.()}>
            {link.text}
          </div>
        ) : (
          <Box component={GatsbyLink} className={styles.link} to={link.route}>
            {link.text}
          </Box>
        )
      )}
    </Grid>
  )
}

export default LinksRow
