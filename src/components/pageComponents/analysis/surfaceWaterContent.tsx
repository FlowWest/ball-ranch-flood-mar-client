import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Typography } from '@mui/material'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  overlayContainer: {
    width: '100%',
    height: '500px',
    position: 'relative',
    [mediaQueries.below992]: {
      height: '700px',
    },
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  centerColumn: {
    alignItems: 'center',
  },
  rowContainer: {
    display: 'flex',
  },
  overlayTextContent: {
    maxWidth: '630px',
    position: 'absolute',
    top: 0,
    left: 50,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    [mediaQueries.below992]: {
      maxWidth: '400px',
    },
  },
  overlayImageContent: {
    width: '648px',
    position: 'absolute',
    top: 0,
    right: 50,
    [mediaQueries.below992]: {
      width: '400px',
    },
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '3rem',
  },
  text: {
    fontWeight: 400,
    lineHeight: '2rem',
  },
  chartSection: {
    width: '80%',
    justifyContent: 'space-between',
    [mediaQueries.below992]: {
      width: '100%',
    },
  },
  chart: {
    width: '550px',
    [mediaQueries.below992]: {
      width: '350px',
    },
  },
  chartHeader: {
    fontFamily: 'Lato',
    fontWeight: 300,
    textTransform: 'uppercase',
  },
  scenariosContainer: {
    maxWidth: '300px',
    height: '300px',
    justifyContent: 'space-evenly',
  },
  bold: {
    fontWeight: 700,
  },
  marginTop3: {
    marginTop: '3rem',
  },
}))

interface SurfaceWaterContentProps {
  images: any
}

const SurfaceWaterContent = (props: SurfaceWaterContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.overlayContainer}>
        <div className={styles.overlayTextContent}>
          <Typography variant='h1' className={styles.header}>
            Surface Water
          </Typography>
          <Typography variant='h2' className={styles.text}>
            The California Department of Water Resources (DWR) conducted a
            preliminary analysis of potential surface water supply to Ball Ranch
            from Little Dry Creek, Big Dry Creek, and the Fresno stormwater
            detention basin. This analysis showed that surface water could be
            available for recharge in Above Normal and Wet water year types,
            even after accounting for existing regulatory constraints on
            diversions in the San Joaquin watershed.
            <br />
            <br />
            Phase 1 of this project also explored potential use of flood
            releases through the Friant Kern canal and Little Dry Creek and
            determined that additional surface water delivery to Ball Ranch
            could be feasible with careful planning, water rights coordination,
            and infrastructure improvements.
          </Typography>
        </div>
        <div className={styles.overlayImageContent}>
          <Img
            fluid={props.images.surfaceWaterImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <Divider sx={{ border: '1px solid #000', margin: '8rem 6rem' }} />
      <div className={`${styles.columnContainer} ${styles.centerColumn}`}>
        <Typography variant='h1' className={styles.header}>
          Scenario Planning - Surface Water Avalibilty
        </Typography>
        <Typography
          variant='h2'
          className={styles.text}
          sx={{ maxWidth: '900px' }}
        >
          An analysis by MDK Consulting analyzed three potential scenarios for
          diverting water to Ball Ranch (figure 1). During Above Normal and Wet
          water years, there is water available for scenarios 1 and 2; scneario
          3 has water available if assessing December - April.
        </Typography>
        <div
          className={`${styles.chartSection} ${styles.rowContainer} ${styles.marginTop3}`}
        >
          <div className={styles.chart}>
            <Img
              fluid={props.images.mockChartImage}
              imgStyle={{ objectFit: 'cover' }}
            />
          </div>
          <div
            className={`${styles.scenariosContainer} ${styles.columnContainer}`}
          >
            <Typography className={styles.chartHeader}>SCENARIOS:</Typography>
            <Typography>
              <span className={styles.bold}>Scenario 1 |</span> Divert all flow
              from Big Dry Creek Dam to Little Dry Creek
            </Typography>
            <Typography>
              <span className={styles.bold}>Scenario 2 |</span> Scenario 1 plus
              diverting onky when flow exists in Chowchilla Bypass
            </Typography>
            <Typography>
              <span className={styles.bold}>Scenario 3 |</span> Scenario 2 and
              the Delta is in excess without restrictions
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurfaceWaterContent
