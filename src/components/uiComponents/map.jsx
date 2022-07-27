import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import makeStyles from '@mui/styles/makeStyles'
import { Slide, Paper, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Chart from './chart'

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    height: '100%'
  },
  map: {
    height: '600px',
    // height: '100%',
    width: '100%',
  },
  slide: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '45%',
    height: '97%',
    opacity: 0.9,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
  },
  paperToolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  chartContainer: {
    width: '100%',
    height: '100%',
    padding: '1rem 2rem 5rem 2rem'
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
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: props.data
          ? props.data.features[0].geometry.coordinates[0][0][0]
          : undefined,
        zoom: 11.5,
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
            'fill-color': '#85D6FF',
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
        console.log('open panel')
        setPanelOpen(true)
      })
    }
  }, [map, props.data])

  return (
    <div className={styles.root}>
      <div id='map' ref={mapDiv} className={styles.map} />
      <Slide in={panelOpen} direction='left' className={styles.slide}>
        <Paper
          elevation={3}
          style={{ margin: 5, padding: '0 0 0 0.5rem' }}
          className={styles.paper}
        >
          <div className={styles.paperToolBar}>
            <p>Title of layer viewed</p>
            <IconButton
              onClick={() => setPanelOpen(false)}
              style={{ borderRadius: 0 }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className={styles.chartContainer}>
            <Chart />
          </div>
        </Paper>
      </Slide>
    </div>
  )
}

export default Map
