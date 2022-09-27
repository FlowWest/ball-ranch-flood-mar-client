import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { Divider, Typography } from '@mui/material'
import { mediaQueries } from '../../layout/theme'
import { Map, sourceNameToCoordinatesDictionary, sourceNameToZoomValueDictionary } from '../../uiComponents/map'

//spatial data
import sjrcProjectBoundary from '../../../data/geospatial/sjrc_project_boundary.json'
import casgemWellPts from '../../../data/geospatial/casgem_well_pts.json'
import fresnoStateWellsPts from '../../../data/geospatial/fresno_state_wells_pts.json'
import cdecGagesPoints from '../../../data/geospatial/cdec_gages_pts.json'
import bigDryCreekReservoir from '../../../data/geospatial/big_dry_creek_reservoir.json'
import bigDryCreek from '../../../data/geospatial/big_dry_creek.json'
import mcmullinGsaBoundary from '../../../data/geospatial/mcmullin_gsa_boundary.json'
import nhdLines from '../../../data/geospatial/nhd_lines.json'
import northKingsGSABoundary from '../../../data/geospatial/north_kings_gsa_boundary.json'
import soilCharacteristics from '../../../data/geospatial/soil_characteristics.json'

const useStyles = makeStyles(() => ({
  contentContainer: {
    width: '100%',
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '3rem',
  },
  rowContainer: {
    display: 'flex',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    [mediaQueries.below992]: {
      alignItems: 'center',
    },
  },
  textContainer: {
    maxWidth: '20rem',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
  },
  text: {
    fontWeight: 400,
    marginTop: '3rem',
  },
  greenBox: {
    backgroundColor: '#B6AF6226',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    '&:hover': {
      cursor: 'pointer',
    },
    [mediaQueries.below992]: {
      width: '100%',
      padding: '0 3rem',
    },
  },
  cardHeader: {
    fontFamily: 'Oswald',
    fontWeight: 300,
    marginBottom: '2rem',
    [mediaQueries.below992]: {
      alignSelf: 'start',
    },
  },
  cardText: {
    fontWeight: 400,
    maxWidth: '250px',
  },
  logoImage: {
    width: '125px',
    marginRight: '2rem',
    [mediaQueries.below992]: {
      marginRight: '2rem',
    },
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  marginBottom3: {
    marginBottom: '3rem',
  },
}))

interface GroundWaterContentProps {
  images: any
}

const GroundWaterContent = (props: GroundWaterContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={`${styles.rowContainer} ${styles.spaceEvenly}`}>
        <div className={styles.textContainer}>
          <Typography variant='h1' className={styles.header}>
            Groundwater
          </Typography>
          <Typography variant='body1' className={styles.text}>
            Analysis of soils, topography, and groundwater levels at and in the
            vicinity of Ball Ranch indicates that suitable conditions exist to
            percolate surface water delivered to depressions on Ball Ranch to
            shallow (and potentially deep) aquifers, as well as to the adjacent
            San Joaquin River. This page allows spatial and temporal exploration
            of the regional and site conditions affecting groundwater levels at
            Ball Ranch.
          </Typography>
        </div>
        <div className={styles.columnContainer}>
          <a
            href='https://water.ca.gov/programs/groundwater-management/groundwater-elevation-monitoring--casgem'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            <div
              className={`${styles.greenBox} ${styles.rowContainer} ${styles.marginBottom3}`}
            >
              <div className={styles.logoImage}>
                <Img
                  fluid={props.images.casgemLogo}
                  imgStyle={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.columnContainer}>
                <Typography variant='subtitle1' className={styles.cardHeader}>
                  CASGEM
                </Typography>
                <Typography variant='body1' className={styles.cardText}>
                  CASGEM monitoring network has XXXX wells at Ball Ranch and
                  nearby. Data spans XXXX-XX-XX though YYYY-YY-YY
                </Typography>
              </div>
            </div>
          </a>

          <a
            href='https://water.ca.gov/programs/groundwater-management/groundwater-elevation-monitoring--casgem'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            <div className={`${styles.greenBox} ${styles.rowContainer}`}>
              <div className={styles.logoImage}>
                <Img
                  fluid={props.images.csuFresnoLogo}
                  imgStyle={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.columnContainer}>
                <Typography variant='subtitle1' className={styles.cardHeader}>
                  Fresno State Piezometers
                </Typography>
                <Typography variant='body1' className={styles.cardText}>
                  Fresno State has installed XX monitoring wells at the Bal
                  Ranch site collecting data from XXXX-XX-XX to YYYY-YY-YY
                </Typography>
              </div>
            </div>
          </a>
        </div>
      </div>

      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />

      <div className={styles.mapContainer}>
        <Map
          data={{
            spatial: [
              sjrcProjectBoundary,
              casgemWellPts,
              fresnoStateWellsPts,
              cdecGagesPoints,
              bigDryCreekReservoir,
              bigDryCreek,
              mcmullinGsaBoundary,
              nhdLines,
              northKingsGSABoundary,
              soilCharacteristics,
            ],
          }}
          startingCoordinates={sourceNameToCoordinatesDictionary.entire_map}
          startingZoomValue={sourceNameToZoomValueDictionary.entire_map}
        />
      </div>
    </div>
  )
}

export default GroundWaterContent
