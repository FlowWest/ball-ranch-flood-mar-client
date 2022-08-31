import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Typography } from '@mui/material'
import Map from '../../uiComponents/map'

//spatial data
import sjrcProjectBoundary from '../../../data/geospatial/sjrc_project_boundary.json'
import casgemWellPts from '../../../data/geospatial/casgem_well_pts.json'
import fresnoStateWellsPts from '../../../data/geospatial/fresno_state_wells_pts.json'
import cdecGagesPoints from '../../../data/geospatial/cdec_gages_pts.json'
//tabular data
import evapotranspirationData from '../../../data/evapotranspiration_data.json'
import casgemWellsDta from '../../../data/well/casgem_wells_dta.json'
import fresnoWellsDta from '../../../data/well/fresno_wells_dta.json'
import cdecH41 from '../../../data/gage/cdec_h41.json'
import cdecLDC from '../../../data/gage/cdec_ldc.json'
import cdecSJF from '../../../data/gage/cdec_sjf.json'

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  text: {
    fontWeight: 400,
    marginBottom: '3rem',
    lineHeight: '2.5rem',
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
      <Typography className={styles.text}>
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
            ],
            tabular: {
              sjrc_project_boundary: [evapotranspirationData],
              casgem_well_pts: [casgemWellsDta],
              fresno_state_wells_pts: [fresnoWellsDta],
              cdec_gages_pts: [cdecH41, cdecLDC, cdecSJF],
            },
          }}
        />
      </div>
    </div>
  )
}

export default MapContent
