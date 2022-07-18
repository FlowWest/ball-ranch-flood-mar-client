import React from 'react'
import Map from '../components/uiComponents/map'
import sjrcProjectBoundaryData from '../data/geospatial/sjrc_project_boundary.json'

const MapPage = () => {
  return (
    <main>
      <Map data={sjrcProjectBoundaryData} />
      <br />
      <br />
      <br />
    </main>
  )
}

export default MapPage
