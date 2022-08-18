import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'

const useStyles = makeStyles(() => ({
  rowContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '8rem',
  },
  image: {
    minWidth: '600px',
    maxHeight: '100%',
  },
  paragraphContainer: {
    maxWidth: '50rem',
  },
  paragraphHeader: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    color: '#000',
    fontSize: '36px',
    marginBottom: '1rem',
  },
  paragraphContent: {
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '2.5rem',
  },
  // dynamic classes
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  marginRight: {
    marginRight: '3rem',
  },
  marginLeft: {
    marginLeft: '3rem',
  },
}))

interface ImageRowProps {
  image: any
  reverse: boolean
  alt?: string
}

const ImageRow = (props: ImageRowProps) => {
  const styles = useStyles()

  return (
    <div
      className={`${styles.rowContainer} ${
        props.reverse ? styles.rowReverse : styles.row
      }`}
    >
      <div
        className={`${styles.image} ${
          props.reverse ? styles.marginLeft : styles.marginRight
        }`}
      >
        <Img
          fluid={props.image}
          imgStyle={{ objectFit: 'cover' }}
          alt={props.alt}
        />
      </div>
      <div className={styles.paragraphContainer}>
        <Typography className={styles.paragraphHeader}>
          What is Flood-Mar
        </Typography>
        <Typography className={styles.paragraphContent}>
          Flood-MAR is a water resource management strategy that uses wet season
          flows from rainfall or snowmelt to drive groundwater recharge on
          agricultural lands, working landscapes, and natural managed lands.
          Flood-MAR can be implemented at multiple scales, from individual
          landowner flood water diversions using existing infrastructure to
          regional floodplain inundation using new infrastructure or changes to
          existing infrastructure such as setting back levees.
        </Typography>
      </div>
    </div>
  )
}

export default ImageRow
