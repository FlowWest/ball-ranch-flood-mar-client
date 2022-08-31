import React from 'react'
import { Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

const useStyles = makeStyles((theme: Theme) => ({
  footerContainer: {
    width: '100%',
    height: '564px',
    backgroundColor: '#8A9155',
    display: 'flex',
    justifyContent: 'space-between',
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
        <Typography variant='h2' className={styles.footerParagraph}>
          The Ball Ranch Managed Aquifer Recharge (MAR) Planning and Analysis
          Project is assessing the feasibility and potential benefits of
          recharging groundwater on Ball Ranch. The first phase of the project
          is quantifying site groundwater conditions, cataloging groundwater
          dependent ecosystem characteristics, analyzing surface water supplies
          (from wet season flows), and assessing stakeholder support.
        </Typography>
      </div>
      <div>
        <Typography variant='h1' className={styles.footerHeader}>
          Our Partners
        </Typography>
        <div className={styles.columnContainer}>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='h2' className={styles.footerText}>
              FlowWest
            </Typography>
          </div>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='h2' className={styles.footerText}>
              River Partners
            </Typography>
          </div>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='h2' className={styles.footerText}>
              San Joaquin River Conservency
            </Typography>
          </div>
          <div className={styles.footerLink}>
            <ChevronLeftIcon htmlColor='#FDFBFB8A' />
            <Typography variant='h2' className={styles.footerText}>
              California Department of Water Resources
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant='h1' className={styles.footerHeader}>
          Contact
        </Typography>
        <div className={styles.columnContainer}>
          <Typography variant='h2' className={styles.footerText}>
            1234 Ball Ranch Drive
          </Typography>
          <Typography variant='h2' className={styles.footerText}>
            San Jose, California 12345-6789
          </Typography>
          <Typography variant='h2' className={styles.footerText}>
            555-555-5555
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Footer
