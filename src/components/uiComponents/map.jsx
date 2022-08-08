import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
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
    height: '100%',
  },
  map: {
    width: '100%',
    height: '600px',
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
    padding: '1rem 2rem 5rem 2rem',
  },
}))

const Map = (props) => {
  const styles = useStyles()
  const mapDiv = useRef(null)

  let [map, setMap] = useState(null)
  let [panelOpen, setPanelOpen] = useState(false)

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  })

  useEffect(() => {
    const attachMap = (setMap, mapDiv) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: props.data
          ? props.data[0].features[0].geometry.coordinates[0][0][0]
          : undefined,
        zoom: 11.5,
        attributionControl: false,
      })
      setMap(map)
    }

    !map && attachMap(setMap, mapDiv)

    if (map && props.data) {
      map.on('load', () => {
        const colorFillMap = ['#85D6FF', '#7209B7']
        const fillPaint = (idx) => {
          return { 'fill-color': colorFillMap[idx] }
        }
        const circlePaint = {
          'circle-radius': 4,
          'circle-stroke-width': 2,
          'circle-color': 'blue',
          'circle-stroke-color': 'white',
        }

        props.data.forEach((dataSrc, idx) => {
          map?.addSource(dataSrc.name, {
            type: 'geojson',
            data: dataSrc,
          })

          const dataSrcType = dataSrc.features[0].geometry.type

          map.addLayer({
            id: dataSrc.name,
            type: dataSrcType == 'Point' ? 'circle' : 'fill',
            source: dataSrc.name,
            paint: dataSrcType == 'Point' ? circlePaint : fillPaint(idx),
          })
        })
      })

      for (const dataSrc of props.data) {
        // Change the cursor to a pointer and show popup when the mouse is over a layer.
        map.on('mouseenter', dataSrc.name, (e) => {
          map.getCanvas().style.cursor = 'pointer'

          const coordinates = e.lngLat
          
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }

          popup.setLngLat(coordinates).setHTML('bruh').addTo(map)
        })

        // Change back to a pointer and hide popup when it leaves.
        map.on('mouseleave', dataSrc.name, () => {
          map.getCanvas().style.cursor = ''
          popup.remove()
        })

        // Trigger modal when layer is clicked
        map.on('click', dataSrc.name, (e) => {
          console.log(`Clicked: ${dataSrc.name}`, e)
          console.log('open panel')
          setPanelOpen(true)
        })
      }
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
