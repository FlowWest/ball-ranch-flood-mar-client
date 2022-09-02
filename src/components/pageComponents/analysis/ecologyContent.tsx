import React, { useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Slider, Theme, Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import catImage from '../../../images/cat.jpeg'
import dogImage from '../../../images/dog.jpeg'

interface StyleProps {
  sliderImageOne: any
  sliderImageTwo: any
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
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
  greenContainer: {
    backgroundColor: '#8A9155A6',
    width: '100%',
    padding: '4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '9rem 0',
  },
  imageSliderContainer: {
    position: 'relative',
    marginBottom: '2rem',
  },
  sliderContainer: {
    position: 'absolute',
    width: '90%',
  },
  slider: {
    '& > .MuiSlider-thumb': {
      clipPath:
        'polygon(30% 20%, 0 50%, 30% 81%, 30% 58%, 70% 58%, 70% 81%, 100% 50%, 70% 20%, 70% 43%, 30% 43%)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      width: '40px',
      height: '40px',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,1)',
      },
      '&:active': {
        backgroundColor: 'rgba(0,0,0,1)',
      },
    },
    '& > .MuiSlider-rail': {
      display: 'none',
    },
    '& > .MuiSlider-track': {
      display: 'none',
    },
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

  const styles = useStyles({
    sliderImageOne: catImage,
    sliderImageTwo: dogImage,
  })

  const onSliderChange = (value: number | number[]) => {
    if (typeof value == 'number') {
      setSliderValue(value)
    }
  }

  const getLeftImageWidth = (sliderValue: number) => {
    return `${sliderValue}%`
  }

  const getRightImageWidth = (sliderValue: number) => {
    return `${100 - sliderValue}%`
  }

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
      <div className={styles.greenContainer}>
        <Typography variant='h1' className={styles.header}>
          Historical and Current Views of Ball Ranch
        </Typography>
        <div
          className={`${styles.imageSliderContainer} ${styles.rowContainer}`}
        >
          <img
            src={catImage}
            width='50%'
            height='300px'
            style={{
              width: getLeftImageWidth(sliderValue),
              height: '300px',
              objectFit: 'cover',
            }}
          />
          <img
            src={dogImage}
            width='50%'
            height='300px'
            style={{
              width: getRightImageWidth(sliderValue),
              height: '300px',
              objectFit: 'cover',
            }}
          />
          <div className={styles.sliderContainer}>
            <Slider
              aria-label='Historical and Current Views of Ball Ranch'
              defaultValue={50}
              onChange={(event, value) => onSliderChange(value)}
              className={styles.slider}
            />
          </div>
        </div>
        <Typography variant='body1' className={styles.text}>
          Slide bar to see how landscape changes between 19XX and Present Day
        </Typography>
      </div>
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
            habitats throughout the Ball Ranch property. As hydrology and
            landuse changed, the increasingly dry and disconnected conditions at
            Ball Ranch have reduced vegetation diversity and density, and
            impacted the fish and wildlife species dependent on these habitats.
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
