import React from 'react'
import Map from '../components/uiComponents/map'
//spatial data
import sjrcProjectBoundary from '../data/geospatial/sjrc_project_boundary.json'
import casgemWellPts from '../data/geospatial/casgem_well_pts.json'
import fresnoStateWellsPts from '../data/geospatial/fresno_state_wells_pts.json'
import cdecGagesPoints from '../data/geospatial/cdec_gages_pts.json'
//tabular data
import evapotranspirationData from '../data/evapotranspiration_data.json'
import casgemWellsDta from '../data/well/casgem_wells_dta.json'
import fresnoWellsDta from '../data/well/fresno_wells_dta.json'
import cdecH41 from '../data/gage/cdec_h41.json'
import cdecLDC from '../data/gage/cdec_ldc.json'
import cdecSJF from '../data/gage/cdec_sjf.json'

const MapPage = () => {
  return (
    <main>
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
      <br />
      <br />
      <br />
    </main>
  )
}

export default MapPage
