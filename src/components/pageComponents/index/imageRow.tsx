import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import { Theme } from '@mui/system'

interface StyleProps {
  imageWidth?: string
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  rowContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '8rem',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    minWidth: ({ imageWidth }) => imageWidth ?? '600px',
    maxHeight: '100%',
  },
  imageCaptionContainer: {
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0.5rem',
  },
  imageCaption: {
    textAlign: 'center',
    maxWidth: '70%',
  },
  paragraphContainer: {
    maxWidth: '50rem',
    [mediaQueries.below992]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  paragraphHeader: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    color: '#000',
    marginBottom: '2rem',
  },
  paragraphContent: {
    fontFamily: 'Lato',
    fontWeight: 400,
  },
  // dynamic classes
  row: {
    flexDirection: 'row',
    [mediaQueries.below992]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  rowReverse: {
    flexDirection: 'row-reverse',
    [mediaQueries.below992]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  marginRight: {
    marginRight: '3rem',
    [mediaQueries.below992]: {
      marginRight: '0',
      marginBottom: '2.5rem',
    },
  },
  marginLeft: {
    marginLeft: '3rem',
    [mediaQueries.below992]: {
      marginLeft: '0',
      marginBottom: '2.5rem',
    },
  },
}))

interface ImageRowProps {
  image: any
  reverse: boolean
  header: string
  content: string
  alt?: string
  imageWidth?: string
  imageCaption?: string
}

const ImageRow = (props: ImageRowProps) => {
  const styles = useStyles({
    imageWidth: props.imageWidth,
  })

  return (
    <div
      className={`${styles.rowContainer} ${
        props.reverse ? styles.rowReverse : styles.row
      }`}
    >
      <div
        className={
          props.reverse
            ? `${styles.columnContainer} ${styles.marginLeft}`
            : `${styles.columnContainer} ${styles.marginRight}`
        }
      >
        <div className={styles.image}>
          <Img
            fluid={props.image}
            imgStyle={{ objectFit: 'cover' }}
            alt={props.alt}
          />
        </div>
        {props.imageCaption ? (
          <div className={styles.imageCaptionContainer}>
            <Typography
              variant='body2'
              className={`${styles.imageCaption} ${styles.paragraphContent}`}
            >
              {props.imageCaption}
            </Typography>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.paragraphContainer}>
        <Typography variant='h1' className={styles.paragraphHeader}>
          {props.header}
        </Typography>
        <Typography variant='body1' className={styles.paragraphContent}>
          {props.content}
        </Typography>
      </div>
    </div>
  )
}

export default ImageRow
