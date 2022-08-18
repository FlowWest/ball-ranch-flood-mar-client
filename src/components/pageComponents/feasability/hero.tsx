import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import heroBannerTwo from '../../../images/hero-image-two.jpg'

const useStyles = makeStyles(() => ({
  landingCard: {
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    color: 'white',
    backgroundColor: 'olive',
    backgroundImage: `url(${heroBannerTwo})`,
    backgroundSize: 'cover',
    marginBottom: '8rem',
  },
  headerOne: {
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontSize: '36px',
    fontWeight: 600,
    lineHeight: '100%',
    marginBottom: '1rem !important',
    color: '#FFF',
    textAlign: 'center',
    maxWidth: '40rem',
  },
  lowOpacityContainer: {
    height: '157px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroParagraph: {
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: '20px',
    textAlign: 'center',
    color: '#FFF',
    maxWidth: '80%',
  },
}))

const Hero = () => {
  const styles = useStyles()

  return (
    <div className={styles.landingCard}>
      <Typography
        variant='h2'
        className={styles.headerOne}
      >
        Assessing the feasibility of recharging groundwater on Ball Ranch
      </Typography>
      <div className={styles.lowOpacityContainer}>
        <Typography className={styles.heroParagraph}>
          The first phase of the project is quantifying site groundwater
          conditions, cataloging groundwater dependent ecosystem
          characteristics, analyzing surface water supplies (from wet season
          flows), and assessing stakeholder support. This site summarizes
          information on each of these topics acquired by this project, and
          presents an initial assessment of the feasibility of Flood-MAR at Ball
          Ranch.
        </Typography>
      </div>
    </div>
  )
}

export default Hero
