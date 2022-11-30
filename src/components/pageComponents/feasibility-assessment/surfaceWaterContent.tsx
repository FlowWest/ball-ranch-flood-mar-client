import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Typography } from '@mui/material'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Label,
  Rectangle,
} from 'recharts'
import {
  Map,
  sourceNameToCoordinatesDictionary,
  sourceNameToZoomValueDictionary,
} from '../../uiComponents/map'

//spatial data
import sjrcProjectBoundary from '../../../data/geospatial/sjrc_project_boundary.json'
import casgemWellPts from '../../../data/geospatial/casgem_well_pts.json'
import fresnoStateWellsPts from '../../../data/geospatial/fresno_state_wells_pts.json'
import cdecGagesPoints from '../../../data/geospatial/cdec_gages_pts.json'
import bigDryCreekReservoir from '../../../data/geospatial/big_dry_creek_reservoir.json'
import bigDryCreek from '../../../data/geospatial/big_dry_creek.json'
import mcmullinGsaBoundary from '../../../data/geospatial/mcmullin_gsa_boundary.json'
import nhdLines from '../../../data/geospatial/nhd_lines.json'
import northKingsGSABoundary from '../../../data/geospatial/north_kings_gsa_boundary.json'
import soilCharacteristics from '../../../data/geospatial/soil_characteristics.json'

import mdkScenariosDataFormatted from '../../../data/mdkScenarios/mdk_scenarios_dta_formatted.json'

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingBottom: '5rem',
  },
  landingContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [mediaQueries.below992]: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
  },
  marginedToOverlayContainer: {
    marginTop: '3rem',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  centerColumn: {
    alignItems: 'center',
  },
  rowContainer: {
    display: 'flex',
  },
  landingTextContent: {
    width: '70%',
    minWidth: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    [mediaQueries.below992]: {
      width: '100%',
      marginBottom: '3rem'
    },
  },
  mapContainer: {
    float: 'right',
    flex: 1,
    display: 'flex',
    width: '30%',
    height: '100%',
    minWidth: '550px',
    marginLeft: '3rem',
    [mediaQueries.below992]: {
      width: '100%',
      minWidth: '300px',
      marginLeft: '0rem',
      height: '400px',
    },
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '3rem',
  },
  text: {
    fontWeight: 400,
  },
  chartSection: {
    width: '100%',
    marginBottom: '5rem',
    justifyContent: 'space-evenly',
    [mediaQueries.below992]: {
      width: '100%',
    },
  },
  chart: {
    width: '50%',
    [mediaQueries.below992]: {
      width: '350px',
    },
  },
  chartHeader: {
    fontFamily: 'Lato',
    fontWeight: 300,
    textTransform: 'uppercase',
  },
  chartTooltipContent: {
    backgroundColor: '#FFF',
    padding: '0.5rem 1rem',
    border: '0.5px solid #000',
  },
  chartLegendContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  legendBlock: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0.5rem',
  },
  legendSquare: {
    width: '20px',
    height: '20px',
    marginRight: '0.25rem',
  },
  scenariosContainer: {
    maxWidth: '300px',
    height: '300px',
    justifyContent: 'space-evenly',
  },
  bold: {
    fontWeight: 700,
  },
  marginTop3: {
    marginTop: '3rem',
  },
}))

interface SurfaceWaterContentProps {
  images: any
}

const SurfaceWaterContent = (props: SurfaceWaterContentProps) => {
  const styles = useStyles()

  function customizedTick(props: any) {
    const { x, y, index, payload, width } = props

    return (
      <g>
        <line x1={x - 1.5 * width} y1={y} x2={x - 1.5 * width} y2={y + 10} />
        <text
          x={x}
          y={y}
          textAnchor='middle'
          dominantBaseline='hanging'
          style={{ fontSize: '0.5rem' }}
        >
          {payload.value}
        </text>
      </g>
    )
  }

  const CustomBar = (props: any) => {
    let fill = props.fill
    const scenario = props.scenario

    if (scenario === 1) {
      fill = 'rgb(177, 219, 196)'
    } else if (scenario === 2) {
      fill = 'rgb(242, 196,	161)'
    } else if (scenario === 3) {
      fill = 'rgb(194, 203, 224)'
    }

    return <Rectangle {...props} fill={fill} />
  }

  const CustomTooltip = (props: any) => {
    const { active, payload } = props
    if (!active || !payload) return null
    let scenario
    let color = (scenario: any) => {
      if (scenario === 1) {
        return 'rgb(177, 219, 196)'
      } else if (scenario === 2) {
        return 'rgb(242, 196,	161)'
      } else if (scenario === 3) {
        return 'rgb(194, 203, 224)'
      }
    }

    for (const bar of payload) {
      scenario = bar.payload.scenario
      return (
        <div className={styles.chartTooltipContent}>
          <div style={{ color: color(scenario) }}>Scenario {scenario}</div>
          <div>{bar.payload.water_year_type}</div>
          <div>Water Available: {bar.payload.water_available_TAF}</div>
        </div>
      )
    }
    return null
  }

  const RenderLegend = (props: any) => {
    const { payload } = props

    return (
      <div className={styles.chartLegendContainer}>
        <Typography>Scenario:</Typography>

        <div className={`${styles.legendBlock} ${styles.rowContainer}`}>
          <div
            className={styles.legendSquare}
            style={{ backgroundColor: 'rgb(177, 219, 196)' }}
          ></div>
          <Typography>1</Typography>
        </div>

        <div className={`${styles.legendBlock} ${styles.rowContainer}`}>
          <div
            className={styles.legendSquare}
            style={{ backgroundColor: 'rgb(242, 196, 161)' }}
          ></div>
          <Typography>2</Typography>
        </div>

        <div className={`${styles.legendBlock} ${styles.rowContainer}`}>
          <div
            className={styles.legendSquare}
            style={{ backgroundColor: 'rgb(194, 203, 224)' }}
          ></div>
          <Typography>3</Typography>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.landingContainer}>
        <div className={styles.landingTextContent}>
          <Typography variant='h1' className={styles.header}>
            Surface Water
          </Typography>
          <Typography variant='body1' className={styles.text}>
            This project identified at least three surface water sources that
            could potentially provide water for MAR at Ball Ranch during wet
            season, flood flow conditions: 1. Little Dry Creek; 2. Big Dry Creek
            (including the Fresno stormwater detention Basin); and 3. San
            Joaquin River. Click on the map to see historical surface flows from
            all of these sources.
          </Typography>
        </div>
        <div className={styles.mapContainer}>
          <Map
            data={{
              spatial: [
                sjrcProjectBoundary,
                cdecGagesPoints,
                bigDryCreekReservoir,
                bigDryCreek,
                nhdLines,
              ],
            }}
            startingCoordinates={sourceNameToCoordinatesDictionary.nhd_lines}
            startingZoomValue={sourceNameToZoomValueDictionary.nhd_lines}
          />
        </div>
      </div>

      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />

      <div className={`${styles.columnContainer} ${styles.centerColumn}`}>
        <Typography variant='h1' className={styles.header}>
          Surface Water Availability Analysis
        </Typography>
        <Typography
          variant='body1'
          className={styles.text}
        >
          A preliminary analysis of potential surface water supply from Little
          Dry Creek, Big Dry Creek, and the Fresno stormwater detention basin
          completed in Phase 1 of this project showed that surface water could
          be available for recharge in Above Normal and Wet water year types,
          even after accounting for existing regulatory constraints on
          diversions in the San Joaquin watershed. The following bar chart shows
          that as much as 3.8 to 11.6 thousand acre feet could be available for
          recharge in Above Normal and Wet years.
        </Typography>
        <div
          className={`${styles.chartSection} ${styles.rowContainer} ${styles.marginTop3}`}
        >
          <div className={styles.chart}>
            <ResponsiveContainer>
              <BarChart
                data={mdkScenariosDataFormatted}
                margin={{
                  top: 50,
                  right: 0,
                  left: 20,
                  bottom: -30,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis
                  dataKey='water_year_type'
                  tick={customizedTick}
                  interval={2}
                  type='category'
                />
                <YAxis>
                  <Label
                    angle={270}
                    position='left'
                    style={{
                      textAnchor: 'middle',
                      opacity: 0.75,
                      fontSize: '0.8rem',
                    }}
                  >
                    Potential Surface Water Supply (1000 Acre Feet)
                  </Label>
                </YAxis>
                <Tooltip content={CustomTooltip} />
                <Legend content={RenderLegend} />
                <Bar
                  dataKey='water_available_TAF'
                  fill='#8884d8'
                  shape={CustomBar}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div
            className={`${styles.scenariosContainer} ${styles.columnContainer}`}
          >
            <Typography className={styles.chartHeader}>SCENARIOS:</Typography>
            <Typography>
              <span className={styles.bold}>Scenario 1 |</span> Divert all flow
              from Big Dry Creek stormwater detention system to Little Dry
              Creek.
            </Typography>
            <Typography>
              <span className={styles.bold}>Scenario 2 |</span> Diversions only
              when Chowchilla Bypass is flowing.
            </Typography>
            <Typography>
              <span className={styles.bold}>Scenario 3 |</span> Diversions only
              when Chowchilla Bypass is flowing and the Delta is in excess.
            </Typography>
          </div>
        </div>
        <Typography
          variant='body1'
          className={styles.text}
        >
          Phase 1 of this project also explored potential surface water supply
          from San Joaquin River flood releases through the Friant Kern canal
          and Little Dry Creek. This would only be possible if the resulting
          flow management provided benefits to Reclamation’s San Joaquin River
          Restoration Program and satisfied existing water rights conditions.
          <br />
          <br />
          The next phase of this project will determine water rights
          coordination and water management infrastructure improvements needed
          to enable surface water deliveries to Ball Ranch in Above Normal and
          Wet Years, and quantify potential surface water supply from the San
          Joaquin River.
        </Typography>
      </div>
    </div>
  )
}

export default SurfaceWaterContent
