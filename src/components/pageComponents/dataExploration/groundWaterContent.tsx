import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { Typography, Divider } from '@mui/material'

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
  },
  rowContainer: {
    display: 'flex',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textContainer: {
    maxWidth: '20rem',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    fontSize: '36px',
  },
  text: {
    fontWeight: 400,
    marginTop: '3rem',
    lineHeight: '2.5rem',
  },
  imageContainer: {
    width: '470px',
    marginLeft: '5rem',
  },
  greenBox: {
    backgroundColor: '#B6AF6226',
    width: '950px',
    height: '270px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 7rem',
  },
  cardHeader: {
    fontFamily: 'Oswald',
    fontWeight: 300,
    fontSize: '36px',
    marginBottom: '2rem'
  },
  cardText: {
    fontWeight: 400,
    fontSize: '20px',
    maxWidth: '400px'
  },
  logoImage: {
    width: '205px',
  },
  marginBottom5: {
    marginBottom: '5rem',
  },
  marginBottom3: {
    marginBottom: '3rem',
  },
}))

interface GroundWaterContentProps {
  images: any
  alt?: string
}

const GroundWaterContent = (props: GroundWaterContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.textContainer}>
          <Typography className={styles.header}>Ground Water</Typography>
          <Typography className={styles.text}>
            Analysis of soils, topography, and groundwater levels at and in the
            vicinity of Ball Ranch indicates that suitable conditions exist to
            percolate surface water delivered to depressions on Ball Ranch to
            shallow (and potentially deep) aquifers, as well as to the adjacent
            San Joaquin River. This page allows spatial and temporal exploration
            of the regional and site conditions affecting groundwater levels at
            Ball Ranch.
          </Typography>
        </div>
        <div className={styles.imageContainer}>
          <Img
            fluid={props.images.groundWaterImage}
            imgStyle={{ objectFit: 'cover' }}
            alt={props.alt}
          />
        </div>
      </div>
      <Divider sx={{ border: '1px solid #000', margin: '8rem 0' }} />
      <div className={styles.columnContainer}>
        <Typography className={`${styles.header} ${styles.marginBottom5}`}>
          Monitoring Programs
        </Typography>
        <div
          className={`${styles.greenBox} ${styles.rowContainer} ${styles.marginBottom3}`}
        >
          <div className={styles.logoImage}>
            <Img
              fluid={props.images.casgemLogo}
              imgStyle={{ objectFit: 'cover' }}
              alt={props.alt}
            />
          </div>
          <div className={styles.columnContainer}>
            <Typography className={styles.cardHeader}>Casgem</Typography>
            <Typography className={styles.cardText}>
              CASGEM monitoring network has XXXX wells at Ball Ranch and nearby.
              Data spans XXXX-XX-XX though YYYY-YY-YY
            </Typography>
          </div>
        </div>
        <div className={`${styles.greenBox} ${styles.rowContainer}`}>
          <div className={styles.logoImage}>
            <Img
              fluid={props.images.csuFresnoLogo}
              imgStyle={{ objectFit: 'cover' }}
              alt={props.alt}
            />
          </div>
          <div className={styles.columnContainer}>
            <Typography className={styles.cardHeader}>Fresno State Piezometers</Typography>
            <Typography className={styles.cardText}>
              Fresno State has installed XX monitoring wells at the Bal Ranch
              site collecting data from XXXX-XX-XX to YYYY-YY-YY
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroundWaterContent
