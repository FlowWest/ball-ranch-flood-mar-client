import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'

const useStyles = makeStyles(() => ({
  rowContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '8rem',
  },
  image: {
    minWidth: '600px',
    maxHeight: '100%',
  },
  paragraphContainer: {
    maxWidth: '50rem',
  },
  paragraphHeader: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    color: '#000',
    marginBottom: '1rem',
  },
  paragraphContent: {
    fontFamily: 'Lato',
    fontWeight: 400,
    lineHeight: '2.5rem',
  },
  // dynamic classes
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  marginRight: {
    marginRight: '3rem',
  },
  marginLeft: {
    marginLeft: '3rem',
  },
}))

interface ImageRowProps {
  image: any
  reverse: boolean
  header: string
  content: string
  alt?: string
}

const ImageRow = (props: ImageRowProps) => {
  const styles = useStyles()

  return (
    <div
      className={`${styles.rowContainer} ${
        props.reverse ? styles.rowReverse : styles.row
      }`}
    >
      <div
        className={`${styles.image} ${
          props.reverse ? styles.marginLeft : styles.marginRight
        }`}
      >
        <Img
          fluid={props.image}
          imgStyle={{ objectFit: 'cover' }}
          alt={props.alt}
        />
      </div>
      <div className={styles.paragraphContainer}>
        <Typography variant='h1' className={styles.paragraphHeader}>
          {props.header}
        </Typography>
        <Typography variant='h2' className={styles.paragraphContent}>
          {props.content}
        </Typography>
      </div>
    </div>
  )
}

export default ImageRow
