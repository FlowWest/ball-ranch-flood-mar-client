import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Typography } from '@mui/material'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  evapoImage: {
    width: '450px',
    marginRight: '3rem',
    alignSelf: 'center',
  },
  evapoTextContainer: {
    maxWidth: '450px',
    [mediaQueries.below992]: {
      maxWidth: '400px',
    },
  },
  evapoChart: {
    width: '900px',
    [mediaQueries.below992]: {
      width: '100%',
    },
  },
  chartSubHeader: {
    maxWidth: '750px',
    marginBottom: '4rem',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
  },
  text: {
    fontWeight: 400,
    lineHeight: '2rem',
  },
  marginBottom3: {
    marginBottom: '3rem',
  },
  marginBottom2: {
    marginBottom: '2rem',
  },
}))

interface EvapoContentProps {
  images: any
}

const EvapoContent = (props: EvapoContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.evapoImage}>
          <Img
            fluid={props.images.evapoImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.evapoTextContainer}>
          <Typography
            variant='h1'
            className={`${styles.header} ${styles.marginBottom3}`}
          >
            Evapotranspiration
          </Typography>
          <Typography variant='h2' className={styles.text}>
            Evapotranspiration (ET) is the volume of water transferred from the
            land surface to the atmosphere. This could influence the
            effectiveness of Flood-MAR at Ball Ranch. The OpenET platform uses
            multiple ET models to calculate an ensemble ET value for the Ball
            Ranch site. While ET is not expected to be a significant impact on
            Flood-MAR at Ball Ranch during wet season (typically Winter and
            early Spring) conditions, it will be included in the next Phase of
            this project to quantify the potential recharge possible at Ball
            Ranch.
          </Typography>
        </div>
      </div>
      <Divider sx={{ border: '1px solid #000', margin: '7rem 6rem' }} />
      <div className={styles.columnContainer}>
        <Typography
          variant='h1'
          className={`${styles.header} ${styles.marginBottom2}`}
        >
          Evapotranspiration Over Time
        </Typography>
        <Typography className={styles.chartSubHeader}>
          The plot below shows Ensemble ET in inches from 2016 to 2022. Each
          year is labled with the water year designation to show how ET changes
          by water year type.
        </Typography>
        <div className={styles.evapoChart}>
          <Img
            fluid={props.images.evapoChart}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}

export default EvapoContent
