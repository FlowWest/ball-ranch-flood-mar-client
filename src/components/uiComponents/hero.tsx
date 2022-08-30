import React from 'react'
import { Theme, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { mediaQueries } from '../layout/theme'

interface StyleProps {
  image: any
  imageHeight: string
  marginBottom?: string
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  landingCard: {
    height: ({ imageHeight }) => imageHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    color: 'white',
    backgroundColor: 'olive',
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundSize: 'cover',
    marginBottom: ({ marginBottom }) => marginBottom ?? '8rem',
  },
  headerOne: {
    fontFamily: 'Oswald',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    marginBottom: '1rem !important',
    color: '#FFF',
    textAlign: 'center',
    maxWidth: '40rem',
  },
  lowOpacityContainer: {
    minHeight: '157px',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [mediaQueries.below992]: {
      padding: '1rem',
    },
  },
  subheader: {
    fontFamily: 'Lato',
    fontWeight: 400,
    textAlign: 'center',
    color: '#FFF',
    maxWidth: '80%',
    [mediaQueries.below992]: {
      maxWidth: '90%',
    },
  },
}))

interface HeroProps {
  header: string
  subheader: string
  imageObj: any
  imageHeight: string
  marginBottom?: string
  fitInLowOpacityContainer?: boolean
}

const Hero = (props: HeroProps) => {
  const styles = useStyles({
    image: props.imageObj,
    imageHeight: props.imageHeight,
    marginBottom: props.marginBottom,
  })

  if (props.fitInLowOpacityContainer) {
    return (
      <div className={styles.landingCard}>
        <div className={styles.lowOpacityContainer}>
          <Typography variant='h1' className={styles.headerOne}>
            {props.header}
          </Typography>
          <Typography variant='h2' className={styles.subheader}>
            {props.subheader}
          </Typography>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.landingCard}>
        <Typography variant='h1' className={styles.headerOne}>
          {props.header}
        </Typography>
        <div className={styles.lowOpacityContainer}>
          {props.subheader ? (
            <Typography variant='h2' className={styles.subheader}>
              {props.subheader}
            </Typography>
          ): <></>}
        </div>
      </div>
    )
  }
}

export default Hero
