import React from 'react'
import { Divider, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    width: '100%',
    backgroundColor: '#8A9155',
    display: 'flex',
    justifyContent: 'center',
    padding: '3rem 6rem',
    color: '#FFF',
  },
  footerHeader: {
    fontFamily: 'Oswald',
    fontWeight: 300,
    color: '#FFF',
    marginBottom: '1.5rem',
  },
  footerParagraph: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: '#FFF',
    maxWidth: '25rem',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footerLink: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
  },
  footerText: {
    fontFamily: 'Lato',
    fontWeight: 400,
    marginBottom: '1rem',
  },
}))

const Footer = () => {
  const styles = useStyles()

  return (
    <div className={styles.footerContainer}>
      <div>
        <Typography variant='h1' className={styles.footerHeader}>
          About Ball Ranch
        </Typography>
        <Typography variant='body1' className={styles.footerParagraph}>
          Ball Ranch covers approximately 360 acres of riparian land along the
          San Joaquin River downstream of Friant Dam. The first phase of the
          project is quantifying site groundwater conditions, cataloging
          groundwater dependent ecosystem characteristics, analyzing potential
          wet-season surface water supplies, and assessing stakeholder support.
        </Typography>
      </div>

      <Divider
        orientation='vertical'
        flexItem={true}
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.15)',
          margin: '0 5rem',
        }}
      />

      <div>
        <Typography variant='h1' className={styles.footerHeader}>
          Our Partners
        </Typography>
        <div className={styles.columnContainer}>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='body1' className={styles.footerText}>
              <a
                href='https://www.flowwest.com/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                FlowWest
              </a>
            </Typography>
          </div>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='body1' className={styles.footerText}>
              <a
                href='https://riverpartners.org/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                River Partners
              </a>
            </Typography>
          </div>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='body1' className={styles.footerText}>
              <a
                href='http://sjrc.ca.gov/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                San Joaquin River Conservency
              </a>
            </Typography>
          </div>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='body1' className={styles.footerText}>
              <a
                href='https://water.ca.gov/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                California Department of Water Resources
              </a>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
