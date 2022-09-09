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

import mdkScenariosDataFormatted from '../../../data/mdkScenarios/mdk_scenarios_dta_formatted.json'

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  overlayContainer: {
    width: '100%',
    height: '500px',
    position: 'relative',
    [mediaQueries.below992]: {
      height: '700px',
    },
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
  overlayTextContent: {
    maxWidth: '630px',
    position: 'absolute',
    top: 0,
    left: 50,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    [mediaQueries.below992]: {
      maxWidth: '400px',
    },
  },
  overlayImageContent: {
    width: '648px',
    position: 'absolute',
    top: 0,
    right: 50,
    [mediaQueries.below992]: {
      width: '400px',
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
    justifyContent: 'center'
  },
  legendBlock: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0.5rem'
  },
  legendSquare: {
    width: '20px',
    height: '20px',
    marginRight: '0.25rem'
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
      <div className={styles.overlayContainer}>
        <div className={styles.overlayTextContent}>
          <Typography variant='h1' className={styles.header}>
            Surface Water
          </Typography>
          <Typography variant='body1' className={styles.text}>
            The California Department of Water Resources (DWR) conducted a
            preliminary analysis of potential surface water supply to Ball Ranch
            from Little Dry Creek, Big Dry Creek, and the Fresno stormwater
            detention basin. This analysis showed that surface water could be
            available for recharge in Above Normal and Wet water year types,
            even after accounting for existing regulatory constraints on
            diversions in the San Joaquin watershed.
            <br />
            <br />
            Phase 1 of this project also explored potential use of flood
            releases through the Friant Kern canal and Little Dry Creek and
            determined that additional surface water delivery to Ball Ranch
            could be feasible with careful planning, water rights coordination,
            and infrastructure improvements.
          </Typography>
        </div>
        <div className={styles.overlayImageContent}>
          <Img
            fluid={props.images.surfaceWaterImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />
      <div className={`${styles.columnContainer} ${styles.centerColumn}`}>
        <Typography variant='h1' className={styles.header}>
          Scenario Planning - Surface Water Avalibilty
        </Typography>
        <Typography
          variant='body1'
          className={styles.text}
          sx={{ maxWidth: '900px' }}
        >
          An analysis by MDK Consulting analyzed three potential scenarios for
          diverting water to Ball Ranch (figure 1). During Above Normal and Wet
          water years, there is water available for scenarios 1 and 2; scneario
          3 has water available if assessing December - April.
        </Typography>
        <div
          className={`${styles.chartSection} ${styles.rowContainer} ${styles.marginTop3}`}
        >
          <div className={styles.chart}>
            <ResponsiveContainer>
              <BarChart
                data={mdkScenariosDataFormatted}
                margin={{
                  top: 0,
                  right: 0,
                  left: 20,
                  bottom: 15,
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
                    style={{ textAnchor: 'middle', opacity: 0.75 }}
                  >
                    Water Available
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
              from Big Dry Creek Dam to Little Dry Creek
            </Typography>
            <Typography>
              <span className={styles.bold}>Scenario 2 |</span> Scenario 1 plus
              diverting onky when flow exists in Chowchilla Bypass
            </Typography>
            <Typography>
              <span className={styles.bold}>Scenario 3 |</span> Scenario 2 and
              the Delta is in excess without restrictions
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurfaceWaterContent
