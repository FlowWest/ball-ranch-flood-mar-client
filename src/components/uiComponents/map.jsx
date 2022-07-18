import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import makeStyles from '@mui/styles/makeStyles'
import { width } from '@mui/system'

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '500px',
  },
  map: {
    width: '100%',
  },
}))

const Map = (props) => {
  const styles = useStyles()
  const mapDiv = useRef(null)
  let [map, setMap] = useState(null)
  let [panelOpen, setPanelOpen] = useState(false)

  useEffect(() => {
    const attachMap = (setMap, mapDiv) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: props.data
          ? props.data.features[0].geometry.coordinates[0][0][0]
          : undefined,
        zoom: 12.5,
        attributionControl: false,
      })
      setMap(map)
    }

    !map && attachMap(setMap, mapDiv)

    if (map && props.data) {
      map.on('load', () => {
        // Add data source to map
        map?.addSource(props.data.name, {
          type: 'geojson',
          data: props.data,
        })

        // Add map layer from data source
        map.addLayer({
          id: props.data.name,
          type: 'fill',
          source: props.data.name,
          paint: {
            'fill-color': '#A4798D',
          },
        })
      })

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', props.data.name, () => {
        map.getCanvas().style.cursor = 'pointer'
      })

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', props.data.name, () => {
        map.getCanvas().style.cursor = ''
      })

      // Trigger modal when layer is clicked
      map.on('click', props.data.name, (e) => {
        console.log(`Clicked: ${props.data.name}`, e)
        console.log(`Setting panelOpen to : ${!panelOpen}`)
        setPanelOpen(!panelOpen)
      })
    }
  }, [map, props.data])

  return (
    <div className={styles.root}>
      <div id='map' ref={mapDiv} className={styles.map} />
    </div>
  )
}

export default Map
