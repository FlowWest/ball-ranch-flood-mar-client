import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import makeStyles from '@mui/styles/makeStyles'
import { Slide, Paper, IconButton, Typography, Divider } from '@mui/material'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
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
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  map: {
    width: '100%',
    height: '600px',
  },
  slide: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60%',
    height: '100%',
  },
  paperContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    padding: '1rem',
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
  legendContainer: {
    position: 'absolute',
    margin: '1rem',
    top: 0,
    left: 0,
    backgroundColor: '#D7CEB2',
    opacity: 0.5,
    width: '25%',
    height: '30%',
    borderRadius: '15px',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.9,
    },
  },
  legendText: {
    fontSize: '1rem'
  },
  legendBlock: {
    height: '15px',
    width: '15px',
    marginRight: '0.5rem',
    borderRadius: '10px'
  },
  legendButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '25px',
    height: '25px',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendButtonIcon: {
    width: '100%',
    height: '100%',
  },
  fontWeight400: {
    fontWeight: 200,
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignStart: {
    alignItems: 'start'
  }
}))

const projectBoundaryString = 'Project Boundary'
const casgemWellPointsString = 'CASGEM Well Points'
const fresnoStateWellPointsString = 'Fresno State Well Points'
const cdecGagePointsString = 'CDEC Gage Points'

const nameDictionary = {
  sjrc_project_boundary: projectBoundaryString,
  casgem_well_pts: casgemWellPointsString,
  fresno_state_wells_pts: fresnoStateWellPointsString,
  cdec_gages_pts: cdecGagePointsString,
}

export const nameToChartUnitsDictionary = {
  [projectBoundaryString]: { xAxis: 'date_time', yAxis: 'ensemble_et' }, // date format = XXXX-XX-XX
  [casgemWellPointsString]: { xAxis: 'date', yAxis: 'gse_gwe' }, // date format = XXXX-XX-XX 00:00:00
  [fresnoStateWellPointsString]: {
    xAxis: 'date',
    yAxis: 'water_table_elevation_ft',
  }, // date format = XXXX-XX-XX
  [cdecGagePointsString]: { xAxis: 'obs_date', yAxis: 'value' }, // date format = XXXX-XX-XX
}

export const Map = (props) => {
  const styles = useStyles()
  const mapDiv = useRef(null)

  let [map, setMap] = useState(null)
  let [panelOpen, setPanelOpen] = useState(false)
  let [panelData, setPanelData] = useState({})

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  })

  const darkGreenFill = '#5C9933'
  const greenFill = '#21D19F'
  const blueFill = '#645DD7'
  const redFill = '#F40000'

  const LegendCmpt = () => {
    return (
      <div className={styles.legendContainer}>
        <div className={styles.columnContainer}>
          <Typography className={styles.fontWeight400}>Legend</Typography>
          <Divider
            flexItem={true}
            sx={{
              border: '1px solid rgb(0, 0, 0,)',
              margin: '0.25rem 2rem 0rem 2rem',
            }}
          />
          <div className={`${styles.columnContainer} ${styles.alignStart}`}>
            <div className={`${styles.rowContainer} ${styles.alignCenter}`}>
              <div
                className={styles.legendBlock}
                style={{ backgroundColor: darkGreenFill }}
              />
              <Typography
                className={`${styles.legendText} ${styles.fontWeight400}`}
              >
                Project Boundary
              </Typography>
            </div>
            <div className={`${styles.rowContainer} ${styles.alignCenter}`}>
              <div
                className={styles.legendBlock}
                style={{ backgroundColor: greenFill }}
              />
              <Typography
                className={`${styles.legendText} ${styles.fontWeight400}`}
              >
                Fresno Well Points
              </Typography>
            </div>
            <div className={`${styles.rowContainer} ${styles.alignCenter}`}>
              <div
                className={styles.legendBlock}
                style={{ backgroundColor: blueFill }}
              />
              <Typography
                className={`${styles.legendText} ${styles.fontWeight400}`}
              >
                CASGEM Well Points
              </Typography>
            </div>
            <div className={`${styles.rowContainer} ${styles.alignCenter}`}>
              <div
                className={styles.legendBlock}
                style={{ backgroundColor: redFill }}
              />
              <Typography
                className={`${styles.legendText} ${styles.fontWeight400}`}
              >
                CDEC Gage Points
              </Typography>
            </div>
          </div>
          <div className={styles.legendButton}>
            <IconButton
              id='fly'
              onClick={() => {}}
              className={styles.legendButtonIcon}
            >
              <RestartAltIcon />
            </IconButton>
          </div>
        </div>
      </div>
    )
  }

  const SlidingChartCpmnt = () => {
    return (
      <Slide in={panelOpen} direction='left' className={styles.slide}>
        <Paper
          elevation={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '2rem 2rem 2rem 2.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 0,
          }}
        >
          <div className={styles.paperContent}>
            <div className={styles.paperToolBar}>
              <div></div>
              <p>{panelData.name}</p>
              <IconButton
                onClick={() => {
                  setPanelOpen(false)
                  setPanelData({})
                }}
                style={{ borderRadius: 0 }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className={styles.chartContainer}>
              <Chart data={panelData} />
            </div>
          </div>
        </Paper>
      </Slide>
    )
  }

  useEffect(() => {
    const attachMap = (setMap, mapDiv) => {
      const map = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: props.data
          ? props.data.spatial[0].features[0].geometry.coordinates[0][0][0]
          : undefined,
        zoom: 11,
        attributionControl: false,
      })
      setMap(map)
    }

    !map && attachMap(setMap, mapDiv)

    if (map && props.data.spatial) {
      map.on('load', () => {
        const colorFillMap = [darkGreenFill, blueFill, greenFill, redFill]
        const circlePaint = (idx) => ({
          'circle-radius': 4,
          'circle-stroke-width': 1.5,
          'circle-color': colorFillMap[idx],
          'circle-stroke-color': 'white',
        })
        const polygonPaint = (idx) => ({
          'fill-color': colorFillMap[idx],
          'fill-opacity': 0.75,
        })

        props.data.spatial.forEach((dataSrc, idx) => {
          map?.addSource(dataSrc.name, {
            type: 'geojson',
            data: dataSrc,
          })

          const dataSrcType = dataSrc.features[0].geometry.type

          map.addLayer({
            id: dataSrc.name,
            type: dataSrcType == 'Point' ? 'circle' : 'fill',
            source: dataSrc.name,
            paint:
              dataSrcType == 'Point' ? circlePaint(idx) : polygonPaint(idx),
          })
        })
      })

      for (const dataSrc of props.data.spatial) {
        // Change the cursor to a pointer and show popup when the mouse is over a layer.
        map.on('mouseenter', dataSrc.name, (e) => {
          map.getCanvas().style.cursor = 'pointer'

          const coordinates = e.lngLat

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }

          popup
            .setLngLat(coordinates)
            .setHTML(nameDictionary[dataSrc.name])
            .addTo(map)
        })

        // Change back to a pointer and hide popup when it leaves.
        map.on('mouseleave', dataSrc.name, () => {
          map.getCanvas().style.cursor = ''
          popup.remove()
        })

        // Trigger modal when layer is clicked
        map.on('click', dataSrc.name, (e) => {
          setPanelOpen(true)
          setPanelData({
            name: nameDictionary[dataSrc.name],
            tabular: props.data.tabular[dataSrc.name],
          })
        })
      }

      document.getElementById('fly').addEventListener('click', () => {
        // Fly to a random location
        map.flyTo({
          center:
            props.data.spatial[0].features[0].geometry.coordinates[0][0][0],
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
          zoom: 11,
        })
      })
    }
  }, [map, props.data])

  return (
    <div className={styles.root}>
      <div id='map' ref={mapDiv} className={styles.map} />
      <LegendCmpt />
      <SlidingChartCpmnt />
    </div>
  )
}
