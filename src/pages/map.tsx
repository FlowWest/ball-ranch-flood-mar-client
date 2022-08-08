import React from 'react'
import Map from '../components/uiComponents/map'
import sjrcProjectBoundaryData from '../data/geospatial/sjrc_project_boundary.json'
import cdecGagesPoints from '../data/geospatial/cdec_gages_pts.json'

const MapPage = () => {
  return (
    <main>
      <Map data={[sjrcProjectBoundaryData, cdecGagesPoints]} />
      <br />
      <br />
      <br />
    </main>
  )
}

export default MapPage
