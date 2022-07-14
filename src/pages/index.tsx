import React, { useEffect } from 'react'
import Map from '../components/uiComponents/map'
import sjrcProjectBoundaryData from '../data/geospatial/sjrc_project_boundary.json'

const IndexPage = () => {

  return (
    <main>
      <title>Home Page</title>
      <h1>Testing with GeoJSON data</h1>
      <br />
      <br />
      <br />
      <Map data={sjrcProjectBoundaryData} />
    </main>
  )
}

export default IndexPage