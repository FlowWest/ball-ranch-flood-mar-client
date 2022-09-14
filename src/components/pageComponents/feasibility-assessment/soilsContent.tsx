import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Typography } from '@mui/material'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
    [mediaQueries.below992]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [mediaQueries.below992]: {
      alignItems: 'center',
    },
  },
  soilsImage: {
    width: '450px',
    marginRight: '5rem',
    [mediaQueries.below992]: {
      marginBottom: '3rem',
      marginRight: '0',
      width: '300px',
    },
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '3rem',
  },
  text: {
    maxWidth: '500px',
    fontWeight: 400,
    [mediaQueries.below992]: {
      width: '100%',
    },
  },
}))

interface SoilsContentProps {
  images: any
}

const SoilsContent = (props: SoilsContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.soilsImage}>
          <Img
            fluid={props.images.soilsImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.columnContainer}>
          <Typography variant='h1' className={styles.header}>
            Soils
          </Typography>
          <Typography variant='body1' className={styles.text}>
            Saturated hydraulic conductivity (Ksat) is the measure of how easily
            water moves through the soil, expressed in micrometers per second.
            Saturated hydraulic conductivity data for Ball Ranch was downloaded
            from SSURGO database. Values are based on typical soil
            characteristics observed in the field. The SSURGO database contains
            information about soil collected over the past century, and Ksat
            values can be grouped into classes from Very Low (0.0-0.01) to Very
            High (100-705). The average saturated hydraulic conductivity of
            soils at Ball Ranch is 42.9 micrometers per second, indicating high
            hydraulic conductivity. This suggests that percolating surface water
            deliver to Ball Ranch into the subsurface aquifer should be
            feasible. The next phase of this project will include monitoring
            that will improve the accuracy and site specificity of hydraulic
            conductivity conditions in potential recharge areas on Ball Ranch.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default SoilsContent
