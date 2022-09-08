import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Typography } from '@mui/material'
import { Map } from '../../uiComponents/map'

//spatial data
import sjrcProjectBoundary from '../../../data/geospatial/sjrc_project_boundary.json'
import casgemWellPts from '../../../data/geospatial/casgem_well_pts.json'
import fresnoStateWellsPts from '../../../data/geospatial/fresno_state_wells_pts.json'
import cdecGagesPoints from '../../../data/geospatial/cdec_gages_pts.json'
import bigDryCreekReservoir from "../../../data/geospatial/big_dry_creek_reservoir.json"
import bigDryCreek from "../../../data/geospatial/big_dry_creek.json"
import mcmullinGsaBoundary from "../../../data/geospatial/mcmullin_gsa_boundary.json"
import nhdLines from "../../../data/geospatial/nhd_lines.json"
import northKingsGSABoundary from "../../../data/geospatial/north_kings_gsa_boundary.json"
import soilCharacteristics from "../../../data/geospatial/soil_characteristics.json"

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '3rem',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '1rem',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 400,
    maxWidth: '90%',
    marginBottom: '1.5rem',
    alignSelf: 'center',
  },
  map: {
    margin: '0 30px',
  },
}))

const MapContent = () => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <Typography variant='h1' className={styles.header}>
        Map
      </Typography>
      <Typography variant='body1' className={styles.text}>
        The following data was aggregated and analyzed in the feasibility
        assessment of Flood-MAR on Ball Ranch. Use the toggle to explore spatial
        and temporal data that was used in the feasibility assessment. Click on
        data in map for more information.{' '}
      </Typography>
      <div className={styles.map}>
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
        />
      </div>
    </div>
  )
}

export default MapContent
