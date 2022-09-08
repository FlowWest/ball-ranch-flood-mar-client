import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Typography } from '@mui/material'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import evapoWaterYearDry from '../../../data/evapo/evapo_water_year_dry.json'
import evapoWaterYearWet from '../../../data/evapo/evapo_water_year_wet.json'
import evapoWaterYearBelowNormal from '../../../data/evapo/evapo_water_year_below_normal.json'
import evapoWaterYearCritical from '../../../data/evapo/evapo_water_year_critical.json'
import { dateFormatter } from '../../../util/helpers'

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  evapoImage: {
    width: '450px',
    marginRight: '3rem',
    alignSelf: 'center',
  },
  evapoTextContainer: {
    maxWidth: '450px',
    [mediaQueries.below992]: {
      maxWidth: '400px',
    },
  },
  evapoChart: {
    height: '450px',
    width: '90%',
  },
  chartSubHeader: {
    maxWidth: '750px',
    marginBottom: '4rem',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
  },
  text: {
    fontWeight: 400,
  },
  marginBottom3: {
    marginBottom: '3rem',
  },
  marginBottom2: {
    marginBottom: '2rem',
  },
}))

interface EvapoContentProps {
  images: any
}

const EvapoContent = (props: EvapoContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.evapoImage}>
          <Img
            fluid={props.images.evapoImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.evapoTextContainer}>
          <Typography
            variant='h1'
            className={`${styles.header} ${styles.marginBottom3}`}
          >
            Evapotranspiration
          </Typography>
          <Typography variant='body1' className={styles.text}>
            Evapotranspiration (ET) is the volume of water transferred from the
            land surface to the atmosphere. This could influence the
            effectiveness of Flood-MAR at Ball Ranch. The OpenET platform uses
            multiple ET models to calculate an ensemble ET value for the Ball
            Ranch site. While ET is not expected to be a significant impact on
            Flood-MAR at Ball Ranch during wet season (typically Winter and
            early Spring) conditions, it will be included in the next Phase of
            this project to quantify the potential recharge possible at Ball
            Ranch.
          </Typography>
        </div>
      </div>
      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />
      <div className={styles.columnContainer}>
        <Typography
          variant='h1'
          className={`${styles.header} ${styles.marginBottom2}`}
        >
          Evapotranspiration Over Time
        </Typography>
        <Typography className={styles.chartSubHeader}>
          The plot below shows Ensemble ET in inches from 2016 to 2022. Each
          year is labled with the water year designation to show how ET changes
          by water year type.
        </Typography>
        <div className={styles.evapoChart}>
          <ResponsiveContainer>
            <LineChart
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 15,
              }}
            >
              <Legend wrapperStyle={{ position: 'relative' }} />
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='date_time'
                tickFormatter={dateFormatter}
                style={{ fontSize: '1rem' }}
                allowDataOverflow={false}
              >
                <Label position='bottom' style={{ marginTop: '5rem' }}>
                  Date
                </Label>
              </XAxis>
              <YAxis>
                <Label
                  angle={270}
                  position='left'
                  style={{ textAnchor: 'middle', opacity: 0.75 }}
                >
                  Ensemble
                </Label>
              </YAxis>
              <Tooltip />
              <Line
                name='Dry'
                type='monotone'
                dataKey='ensemble_et'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
                data={evapoWaterYearDry}
              />
              <Line
                name='Wet'
                type='monotone'
                dataKey='ensemble_et'
                stroke='#558468'
                activeDot={{ r: 8 }}
                data={evapoWaterYearWet}
              />
              <Line
                name='Below Normal'
                type='monotone'
                dataKey='ensemble_et'
                stroke='#7C0B2B'
                activeDot={{ r: 8 }}
                data={evapoWaterYearBelowNormal}
              />
              <Line
                name='Critical'
                type='monotone'
                dataKey='ensemble_et'
                stroke='#7C0B2B'
                activeDot={{ r: 8 }}
                data={evapoWaterYearCritical}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default EvapoContent
