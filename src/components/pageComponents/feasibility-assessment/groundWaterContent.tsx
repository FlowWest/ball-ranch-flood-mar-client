import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { Divider, Typography } from '@mui/material'
import { mediaQueries } from '../../layout/theme'
import {
  Map,
  sourceNameToCoordinatesDictionary,
  sourceNameToZoomValueDictionary,
} from '../../uiComponents/map'

//spatial data
import sjrcProjectBoundary from '../../../data/geospatial/sjrc_project_boundary.json'
import casgemWellPts from '../../../data/geospatial/casgem_well_pts.json'
import fresnoStateWellsPts from '../../../data/geospatial/fresno_state_wells_pts.json'
import cdecGagesPoints from '../../../data/geospatial/cdec_gages_pts.json'
import mcmullinGsaBoundary from '../../../data/geospatial/mcmullin_gsa_boundary.json'
import northKingsGSABoundary from '../../../data/geospatial/north_kings_gsa_boundary.json'

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '3rem',
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
    width: '950px',
    marginRight: '5rem',
    [mediaQueries.below992]: {
      marginBottom: '3rem',
      marginRight: '0',
      width: '800px',
    },
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '3rem',
  },
  text: {
    maxWidth: '1000px',
    fontWeight: 400,
    [mediaQueries.below992]: {
      width: '100%',
    },
  },
}))

interface GroundWaterContentProps {
  images: any
}

const GroundWaterContent = (props: GroundWaterContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.soilsImage}>
          <div className={styles.mapContainer}>
            <Map
              data={{
                spatial: [
                  sjrcProjectBoundary,
                  casgemWellPts,
                  fresnoStateWellsPts,
                  cdecGagesPoints,
                  mcmullinGsaBoundary,
                  northKingsGSABoundary,
                ],
              }}
              startingCoordinates={sourceNameToCoordinatesDictionary.entire_map}
              startingZoomValue={sourceNameToZoomValueDictionary.entire_map}
            />
          </div>
        </div>
        <div className={styles.columnContainer}>
          <Typography variant='h1' className={styles.header}>
            Groundwater Monitoring
          </Typography>
          <Typography variant='body1' className={styles.text}>
            The map summarizes critical groundwater data collected for Phase 1
            of this project and includes Groundwater Sustainability Agency (GSA)
            boundaries, groundwater level monitoring locations, and surface
            water monitoring locations. Long term regional groundwater level
            trends are captured by the CASGEM wells. Short term, site specific
            groundwater levels are captured by the Fresno State wells.
            Preliminary analysis of soils, topography, and groundwater levels at
            and in the vicinity of Ball Ranch indicates that suitable conditions
            exist to percolate surface water delivered to depressions on Ball
            Ranch to shallow (and potentially deep) aquifers, as well as to the
            adjacent San Joaquin River. The next phase of this project with
            include expanded site-specific groundwater level monitoring that
            will quantify the spatial and seasonal patterns of groundwater
            dynamics to inform selection of optimal locations, volumes, and
            timing of surface water additions for groundwater recharge.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default GroundWaterContent
