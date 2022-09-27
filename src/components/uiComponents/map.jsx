import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'
import makeStyles from '@mui/styles/makeStyles'
import { Slide, Paper, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Chart from './chart'
import { toTitleCase } from '../../util/helpers'

// CASGEM Site Data
import casgemSiteOne from '../../data/well/casgem/casgem_well_site_369371N1197332W001.json'
import casgemSiteTwo from '../../data/well/casgem/casgem_well_site_369363N1197299W001.json'
import casgemSiteThree from '../../data/well/casgem/casgem_well_site_369310N1197318W001.json'
import casgemSiteFour from '../../data/well/casgem/casgem_well_site_369246N1197407W001.json'

// Fresno Site Data
import fresnoWellNumOne from '../../data/well/fresno/fresno_well_num_one.json'
import fresnoWellNumTwo from '../../data/well/fresno/fresno_well_num_two.json'
import fresnoWellNumThree from '../../data/well/fresno/fresno_well_num_three.json'
import fresnoWellNumFour from '../../data/well/fresno/fresno_well_num_four.json'
import fresnoWellNumFive from '../../data/well/fresno/fresno_well_num_five.json'
import fresnoWellNumSix from '../../data/well/fresno/fresno_well_num_six.json'
import fresnoWellNumSeven from '../../data/well/fresno/fresno_well_num_seven.json'
import fresnoWellNumEight from '../../data/well/fresno/fresno_well_num_eight.json'
import fresnoWellNumNine from '../../data/well/fresno/fresno_well_num_nine.json'
import fresnoWellNumTen from '../../data/well/fresno/fresno_well_num_ten.json'

// CDED Site Data
import cdecH41 from '../../data/gage/cdec_h41.json'
import cdecLDC from '../../data/gage/cdec_ldc.json'
import cdecSJF from '../../data/gage/cdec_sjf.json'
import MapLegend from './mapLegend'

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN

// CONSTANTS
const projectBoundaryString = 'Project Boundary'
const casgemWellPointsString = 'CASGEM Well Locations'
const fresnoStateWellPointsString = 'Fresno State Well Locations'
const cdecGagePointsString = 'CDEC Gage Locations'
const bigDryCreekReservoirString = 'Big Dry Creek Reservoir'
const bigDryCreekString = 'Big Dry Creek'
const mcmullinGsaBoundary = 'Mcmullin GSA Boundary'
const nhdLines = 'NHD Lines'
const northKingsGSABoundary = 'North Kings GSA Boundary'
const soilCharacteristics = 'Soil Characteristics'

export const sourceNameToNameDictionary = {
  sjrc_project_boundary: projectBoundaryString,
  casgem_well_pts: casgemWellPointsString,
  fresno_state_wells_pts: fresnoStateWellPointsString,
  cdec_gages_pts: cdecGagePointsString,
  big_dry_creek_reservoir: bigDryCreekReservoirString,
  big_dry_creek: bigDryCreekString,
  mcmullin_gsa_boundary: mcmullinGsaBoundary,
  nhd_lines: nhdLines,
  north_kings_gsa_boundary: northKingsGSABoundary,
  soil_characteristics: soilCharacteristics,
}

export const sourceNameToCoordinatesDictionary = {
  entire_map: { lat: 36.80217613741628, lng: -119.82633286515124 },
  sjrc_project_boundary: { lng: -119.74019820044907, lat: 36.936375816905255 },
  casgem_well_pts: { lng: -119.74019820044907, lat: 36.936375816905255 },
  fresno_state_wells_pts: { lng: -119.74019820044907, lat: 36.936375816905255 },
  cdec_gages_pts: { lng: -119.73564874517581, lat: 36.93135363506484 },
  big_dry_creek_reservoir: { lng: -119.63752675524671, lat: 36.88231568220175 },
  big_dry_creek: { lng: -119.68331354875829, lat: 36.902262812604405 },
  mcmullin_gsa_boundary: { lng: -120.07256211887199, lat: 36.667185406267336 },
  nhd_lines: { lng: -119.63128395141746, lat: 36.9274768275794 },
  north_kings_gsa_boundary: {
    lng: -119.79067527853977,
    lat: 36.785613161842434,
  },
  soil_characteristics: { lng: -119.74019820044907, lat: 36.936375816905255 },
}

export const sourceNameToZoomValueDictionary = {
  entire_map: 9,
  sjrc_project_boundary: 13,
  casgem_well_pts: 13,
  fresno_state_wells_pts: 13,
  cdec_gages_pts: 11.5,
  big_dry_creek_reservoir: 13,
  big_dry_creek: 12,
  mcmullin_gsa_boundary: 10,
  nhd_lines: 10,
  north_kings_gsa_boundary: 9.5,
  soil_characteristics: 13,
}

export const sourceNameToFillColorDictionary = {
  sjrc_project_boundary: '#ff7f00',
  casgem_well_pts: '#645DD7',
  fresno_state_wells_pts: '#21D19F',
  cdec_gages_pts: '#F40000',
  big_dry_creek_reservoir: '#1f78b4',
  big_dry_creek: '#1f78b4',
  mcmullin_gsa_boundary: '#fb9a99',
  nhd_lines: '#a6cee3',
  north_kings_gsa_boundary: '#b2df8a',
  soil_characteristics: '#b15928',
}

const sourceNamesToShowDescription = [
  'sjrc_project_boundary',
  'big_dry_creek_reservoir',
  'mcmullin_gsa_boundary',
  'north_kings_gsa_boundary',
  'soil_characteristics',
]

const sourceNamesToNotShowPanel = ['big_dry_creek', 'nhd_lines']

const sourceNameHasDynamicDescription = ['soil_characteristics']

const nameToDescriptionDictionary = {
  [projectBoundaryString]: 'Ball Ranch Boundary wtihin SJRC',
  [bigDryCreekReservoirString]:
    'Big Dry Creek Dam and Reservoir are flood control facilities located on Dry Creek in Fresno County, near the community of Clovis, about 15 miles northeast of Fresno. The facilities are operated by the Fresno Metropolitan Flood Control District (FMFCD), which makes controlled releases of flood runoff to downstream infiltration basins. A zoned earthfill embankment, the dam creates a reservoir with a storage capacity of approximately 30 thousand TAF (TAF). An ungated, 500-foot wide concrete ogee spillway directs uncontrolled flood flows to the San Joaquin River via the Little Dry Creek Diversion Channel.',
  [mcmullinGsaBoundary]:
    'The McMullin Area Groundwater Sustainability Agency (GSA) was formed on January 31, 2017 when Fresno County, Raisin City Water District, and Mid-Valley Water District executed the McMullin Area Groundwater Sustainability Agency Joint Powers Agreement. The McMullin Area GSA is authorized under SGMA to develop, adopt, and implement a Groundwater Sustainability Plan for the sustainable management of groundwater in a portion of the Kings Subbasin.',
  [northKingsGSABoundary]:
    'North Kings GSA - The North Kings Groundwater Sustainability Agency (GSA) is a Joint Powers Authority formed in December 2016 through adoption of a Joint Powers Agreement by the following public agencies: Fresno Irrigation District, the County of Fresno, the City of Fresno, the City of Clovis, the City of Kerman, Biola Community Services District, Garfield Water District, and International Water District. The North Kings GSA’s jurisdiction includes a portion of the Kings Subbasin that includes the service areas of member agencies.',
}

const identifierToChartDataDictionary = {
  'Fresno State GW Well #1': fresnoWellNumOne,
  'Fresno State GW Well #2': fresnoWellNumTwo,
  'Fresno State GW Well #3': fresnoWellNumThree,
  'Fresno State GW Well #4': fresnoWellNumFour,
  'Fresno State GW Well #5': fresnoWellNumFive,
  'Fresno State GW Well #6': fresnoWellNumSix,
  'Fresno State GW Well #7': fresnoWellNumSeven,
  'Fresno State GW Well #8': fresnoWellNumEight,
  'Fresno State GW Well #9': fresnoWellNumNine,
  'Fresno State GW Well #10': fresnoWellNumTen,
  'SAN JOAQUIN RIVER BELOW FRIANT - SJF': cdecSJF,
  'LITTLE DRY CREEK (USBR) - LDC': cdecLDC,
  'SAN JOAQUIN R AT HWY 41 - H41': cdecH41,
  '369371N1197332W001': casgemSiteOne,
  '369363N1197299W001': casgemSiteTwo,
  '369310N1197318W001': casgemSiteThree,
  '369246N1197407W001': casgemSiteFour,
}

export const nameToChartDataKeysDictionary = {
  [casgemWellPointsString]: { xAxis: 'date', yAxis: 'gse_gwe' },
  [fresnoStateWellPointsString]: {
    xAxis: 'date',
    yAxis: 'water_table_elevation_ft',
  },
  [cdecGagePointsString]: { xAxis: 'obs_date', yAxis: 'value' },
}

export const nameToChartLabelsDictionary = {
  [casgemWellPointsString]: {
    xAxis: 'Date',
    yAxis: 'Ground Surface Elevation (feet)',
  },
  [fresnoStateWellPointsString]: {
    xAxis: 'Date',
    yAxis: 'Water Table Elevation (feet)',
  },
  [cdecGagePointsString]: { xAxis: 'Date', yAxis: 'Flow (cfs)' },
}

// HELPER FUNCTIONS
const getIdentifier = (event) => {
  if (event.features[0].source === 'sjrc_project_boundary') {
    return toTitleCase(event.features[0].source.replaceAll('_', ' '))
  } else if (event.features[0].source === 'casgem_well_pts') {
    return event.features[0].properties.site_code
  } else if (event.features[0].source === 'cdec_gages_pts') {
    return `${event.features[0].properties.STATION} - ${event.features[0].properties.station_id}`
  } else if (event.features[0].source === 'fresno_state_wells_pts') {
    return event.features[0].properties.Name
  } else if (event.features[0].source === 'big_dry_creek_reservoir') {
    return toTitleCase(event.features[0].source.replaceAll('_', ' '))
  } else if (event.features[0].source === 'big_dry_creek') {
    return toTitleCase(event.features[0].source.replaceAll('_', ' '))
  } else if (event.features[0].source === 'mcmullin_gsa_boundary') {
    return toTitleCase(event.features[0].source.replaceAll('_', ' '))
  } else if (event.features[0].source === 'nhd_lines') {
    return event.features[0].properties.GNIS_NAME
  } else if (event.features[0].source === 'north_kings_gsa_boundary') {
    return toTitleCase(event.features[0].source.replaceAll('_', ' '))
  } else if (event.features[0].source === 'soil_characteristics') {
    return `Soil Characteristics: ${event.features[0].properties.ksat_r}`
  }
}
const getDynamicDescription = (event) => {
  if (event.features[0].source === 'soil_characteristics') {
    return `Hydraulic conductivity: ${event.features[0].properties.ksat_r} micrometers/second`
  }
}
const getMapBoxGeoType = (dataSrcType) => {
  if (dataSrcType === 'Point') return 'circle'
  else if (dataSrcType === 'Polygon') return 'fill'
  else if (dataSrcType === 'MultiPolygon') return 'fill'
  else if (dataSrcType === 'LineString') return 'line'
}
const getMapBoxGeoPaint = (dataSrcName, dataSrcType, color) => {
  if (dataSrcType === 'Point') return circlePaint(color)
  else if (dataSrcType === 'Polygon') return polygonPaint(dataSrcName, color)
  else if (dataSrcType === 'MultiPolygon')
    return polygonPaint(dataSrcName, color)
  else if (dataSrcType === 'LineString') return linePaint(color)
}
const circlePaint = (color) => ({
  'circle-radius': 5,
  'circle-color': color,
  'circle-stroke-width': 1.5,
  'circle-stroke-color': 'white',
})
const polygonPaint = (dataSrcName, color) => {
  let opacity = 0.7
  if (
    dataSrcName === 'north_kings_gsa_boundary' ||
    dataSrcName === 'soil_characteristics'
  ) {
    opacity = 0.7
    return {
      'fill-outline-color': 'black',
      'fill-color': color,
      'fill-opacity': opacity,
    }
  } else {
    return {
      'fill-color': color,
      'fill-opacity': opacity,
    }
  }
}
const linePaint = (color) => ({
  'line-color': color,
  'line-width': 3,
})

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
    height: '500px',
  },
  slide: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 10,
    width: '65%',
    height: '90%',
  },
  decriptionSlide: {
    width: 'auto !important',
    height: 'auto !important',
    minWidth: '30%',
    maxWidth: '65%',
    maxHeight: '90%',
    overflow: 'scroll',
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
  decriptionContainer: {
    paddingBottom: '2rem !important',
  },
}))

export const Map = (props) => {
  const styles = useStyles()
  const mapDiv = useRef(null)

  let [map, setMap] = useState(null)
  let [panelOpen, setPanelOpen] = useState(false)
  let [panelData, setPanelData] = useState({})

  let [legendOpen, setLegendOpen] = useState(true)

  const SlidingPanelCpmnt = () => {
    return (
      <Slide
        in={panelOpen}
        direction='left'
        className={`${styles.slide} ${
          panelData.showDescriptionPanel ? styles.decriptionSlide : ''
        }`}
      >
        <Paper
          elevation={3}
          style={{
            margin: '2rem 1rem 2rem 0rem',
            padding: '0 0 0 0.5rem',
          }}
          className={styles.paper}
        >
          <div className={styles.paperToolBar}>
            <div></div>
            <p>{panelData.site}</p>
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
          <div
            className={`${styles.chartContainer} ${
              panelData.showDescriptionPanel ? styles.decriptionContainer : ''
            }`}
          >
            {panelData.showDescriptionPanel ? (
              panelData.dyanmicDescription ??
              nameToDescriptionDictionary[panelData.name]
            ) : (
              <Chart data={panelData} />
            )}
          </div>
        </Paper>
      </Slide>
    )
  }

  useEffect(() => {
    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    })
    const attachMap = (setMap, mapDiv) => {
      const mapUpdated = new mapboxgl.Map({
        container: mapDiv.current || '',
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: props.startingCoordinates,
        zoom: props.startingZoomValue,
        attributionControl: false,
      })
      setMap(mapUpdated)
    }

    !map && attachMap(setMap, mapDiv)

    if (map && props.data.spatial) {
      map.on('load', () => {
        props.data.spatial.forEach((dataSrc) => {
          map?.addSource(dataSrc.name, {
            type: 'geojson',
            data: dataSrc,
          })
          const dataSrcType = dataSrc.features[0].geometry.type
          const color = sourceNameToFillColorDictionary[dataSrc.name]
          map.addLayer({
            id: dataSrc.name,
            type: getMapBoxGeoType(dataSrcType),
            source: dataSrc.name,
            paint: getMapBoxGeoPaint(dataSrc.name, dataSrcType, color),
            layout: {
              visibility: 'visible',
            },
          })
        })
        map.addControl(new mapboxgl.NavigationControl(), 'top-left')
        map.moveLayer('nhd_lines')
        map.moveLayer('sjrc_project_boundary')
        map.moveLayer('fresno_state_wells_pts')
        map.moveLayer('casgem_well_pts')
        map.moveLayer('cdec_gages_pts')
      })

      for (const dataSrc of props.data.spatial) {
        map.on('mouseenter', dataSrc.name, (e) => {
          map.getCanvas().style.cursor = 'pointer'
          const coordinates = e.lngLat
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }
          const identifier = getIdentifier(e)
          popup
            .setLngLat(coordinates)
            .setHTML(identifier)
            .addTo(map)
        })

        // Change back to a pointer and hide popup when it leaves.
        map.on('mouseleave', dataSrc.name, () => {
          map.getCanvas().style.cursor = ''
          popup.remove()
        })

        // Trigger modal when layer is clicked
        map.on('click', dataSrc.name, (e) => {
          if (sourceNamesToNotShowPanel.includes(dataSrc.name)) return

          const identifier = getIdentifier(e)
          setPanelOpen(true)
          setPanelData({
            name: sourceNameToNameDictionary[dataSrc.name],
            site: identifier,
            tabular: identifierToChartDataDictionary[identifier],
            showDescriptionPanel: sourceNamesToShowDescription.includes(
              dataSrc.name
            ),
            dyanmicDescription: sourceNameHasDynamicDescription.includes(
              dataSrc.name
            )
              ? getDynamicDescription(e)
              : null,
          })
        })
      }
    }
  }, [map, props.data])

  return (
    <div className={styles.root}>
      <div id='map' ref={mapDiv} className={styles.map} />
      <SlidingPanelCpmnt />
      <MapLegend
        map={map}
        legendOpen={legendOpen}
        setLegendOpen={setLegendOpen}
        spatialData={props.data.spatial}
        startingCoordinates={props.startingCoordinates}
        startingZoomValue={props.startingZoomValue}
      />
    </div>
  )
}
