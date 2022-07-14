import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import makeStyles from '@mui/styles/makeStyles'

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN

const useStyles = makeStyles((theme) => ({
  root: {
    height: '400px',
  },
}))

const Map = (props) => {
  const styles = useStyles()
  const mapDiv = useRef(null)
  let [map, setMap] = useState(null)

  useEffect(() => {
    const attachMap = (setMap, mapDiv) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: props.data.features[0].geometry.coordinates[0][0][0],
        zoom: 12,
        attributionControl: false,
      })
      setMap(map)
    }

    !map && attachMap(setMap, mapDiv)

    if (map && props.data) {
      map.on('load', () => {
        map?.addSource(props.data.name, {
          type: 'geojson',
          data: props.data,
        })

        map.addLayer({
          id: `${props.data.name}_layer`,
          type: 'fill',
          source: props.data.name,
          paint: {
            'fill-color': '#000',
          },
        })
      })
    }
  }, [map, props.data])

  return <div className={styles.root} ref={mapDiv} />
}

export default Map
