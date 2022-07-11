import React, { useRef, useEffect, useState, FunctionComponent } from 'react'
import mapboxgl from 'mapbox-gl'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import projectBoundaryGeoJson from '../../data/sjrc_project_boundary.geojson'

mapboxgl.accessToken =
  'pk.eyJ1IjoiaHVudGVyLWgiLCJhIjoiY2w1YmRleHV2MDZpbTNkcGdodXBtM21tdiJ9.aCMvMCxgb5-boqaJhmo5lw'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '400px',
  },
}))

const Map = () => {
  const styles = useStyles()
  const mapDiv = useRef < HTMLDivElement > null
  let [map, setMap] = (useState < mapboxgl.Map) | (null > null)

  useEffect(() => {
    const attachMap = (setMap, mapDiv) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current || '', // NO ERROR
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-121.91390991210938, 40.316184625814095],
        zoom: 10,
        attributionControl: false,
      })
      setMap(map)
    }

    !map && attachMap(setMap, mapDiv)

    if (map)
      map.on('load', () => {
        map?.addSource('project-boundary', {
          type: 'geojson',
          data: projectBoundaryGeoJson,
        })
      })
  }, [map])

  return <div className={styles.root} ref={mapDiv} />
}

export default Map
