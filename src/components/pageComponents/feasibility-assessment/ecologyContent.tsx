import React, { useState, useCallback } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Theme, Typography } from '@mui/material'
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from 'react-compare-slider'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import {
  Map,
  sourceNameToCoordinatesDictionary,
  sourceNameToZoomValueDictionary,
} from '../../uiComponents/map'

import aerialPast from '../../../images/ball-ranch-aerial.jpg'
import aerialCurrent from '../../../images/ball-ranch-current.jpg'

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

const useStyles = makeStyles<Theme>(() => ({
  contentContainer: {
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
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenContainer: {
    backgroundColor: '#8A9155A6',
    width: '100%',
    padding: '4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageSliderContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: '2rem',
  },
  chartsSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  chartsImage: {
    width: '450px',
    [mediaQueries.below992]: {
      width: '300px',
      marginRight: '1rem',
    },
  },
  chartsSectionTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '454px',
    [mediaQueries.below992]: {
      maxWidth: '375px',
    },
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '2rem',
  },
  text: {
    fontWeight: 400,
  },
}))

interface EcologyContentProps {
  images: any
}

const EcologyContent = (props: EcologyContentProps) => {
  const [sliderValue, setSliderValue] = useState(50)

  const styles = useStyles()

  const handlePositionChange = useCallback(
    (position) => console.log('[Portrait]', position),
    []
  )

  return (
    <div className={styles.contentContainer}>
      <div className={styles.overlayContainer}>
        <div className={styles.overlayTextContent}>
          <Typography variant='h1' className={styles.header}>
            Ecology
          </Typography>
          <Typography variant='body1' className={styles.text}>
            The entire San Joaquin River corridor was historically an extremely
            rich ecosystem supporting a wide variety of aquatic and terrestrial
            vegetation and wildlife species. Significant changes to the
            hydrology and land use in the vicinity of Ball Ranch has
            substantially degraded the ecological diversity and species
            abundance at Ball Ranch.
            <br />
            <br />
            Phase 1 of the Ball Ranch planning project assessed historical,
            current, and potential future ecological conditions at Ball Ranch
            with managed aquifer recharge. This page allows exploration of
            ecological conditions and potential improvements in groundwater
            dependent species and habitats at Ball Ranch.
          </Typography>
        </div>
        <div className={styles.overlayImageContent}>
          <Img
            fluid={props.images.ecologyImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <Divider
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.25)',
          margin: '2rem 6rem 5rem 6rem',
        }}
      />

      <div className={styles.mapContainer}>
        <Map
          data={{
            spatial: [
              sjrcProjectBoundary,
              casgemWellPts,
              fresnoStateWellsPts,
              cdecGagesPoints,
              bigDryCreekReservoir,
              bigDryCreek,
              mcmullinGsaBoundary,
              nhdLines,
              northKingsGSABoundary,
              soilCharacteristics,
            ],
          }}
          startingCoordinates={sourceNameToCoordinatesDictionary.entire_map}
          startingZoomValue={sourceNameToZoomValueDictionary.entire_map}
        />
      </div>

      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />

      <div className={styles.greenContainer}>
        <Typography variant='h1' className={styles.header}>
          Historical and Current Views of Ball Ranch
        </Typography>
        <div
          className={`${styles.imageSliderContainer} ${styles.rowContainer}`}
        >
          <ReactCompareSlider
            {...props}
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  backdropFilter: undefined,
                  background: 'white',
                  border: 0,
                  color: '#333',
                }}
              />
            }
            itemOne={
              <ReactCompareSliderImage
                src={aerialPast}
                style={{ filter: 'grayscale(1)' }}
                alt='one'
              />
            }
            itemTwo={<ReactCompareSliderImage src={aerialCurrent} alt='two' />}
            style={{
              display: 'flex',
              width: '100%',
              height: '60vh',
            }}
          />
        </div>
        <Typography variant='body1' className={styles.text}>
          Slide bar to see how landscape changes between 19XX and Present Day
        </Typography>
      </div>

      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />

      <div className={styles.chartsSection}>
        <div className={styles.chartsImage}>
          <Img
            fluid={props.images.ecologyChartsImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.chartsSectionTextContainer}>
          <Typography variant='h1' className={styles.header}>
            Species composition change over time
          </Typography>
          <Typography>
            Prior to completion of Friant dam upstream of Ball Ranch, this
            portion of the San Joaquin River was a dynamic floodplain
            environment that was regularly inundated by high flows.
            <br />
            <br />
            This created a diverse mosaic of aquatic, riparian, and floodplain
            habitats throughout the Ball Ranch property. Hydrology, landuse
            change, and expanding water needs have increased the dry and
            disconnected conditions at Ball Ranch have reduced vegetation
            diversity and density, and impacted the fish and wildlife species
            dependent on these habitats.
            <br />
            <br />
            It is likely that Flood-MAR at Ball Ranch could restore some of
            these lost habitats and species, and enhance conditions for the
            species that have persisted.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default EcologyContent
