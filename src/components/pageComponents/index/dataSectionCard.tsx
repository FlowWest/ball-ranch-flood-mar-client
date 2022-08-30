import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'

const useStyles = makeStyles(() => ({
  dataCard: {
    width: '289px',
    backgroundColor: 'rgba(236, 236, 234, 0.61)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [mediaQueries.below992]: {
      width: '100%',
      marginBottom: '3rem',
    },
  },
  dataCardImage: {
    width: '100%',
    [mediaQueries.below992]: {
      width: '100%',
      flex: 1,
    },
  },
  dataCardContent: {
    padding: '1rem',
    [mediaQueries.below992]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem',
    },
  },
  dataCardHeader: {
    fontFamily: 'Lato',
    fontWeight: 700,
    letterSpacing: '0.25px',
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: '1rem',
  },
  dataCardParagraph: {
    fontFamily: 'Lato',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: '100%',
  },
}))

interface DataSectionCardProps {
  image: any
  header: string
  paragraph: string
  alt?: string
}

const DataSectionCard = (props: DataSectionCardProps) => {
  const styles = useStyles()

  return (
    <div className={styles.dataCard}>
      <div className={styles.dataCardImage}>
        <Img
          fluid={props.image}
          imgStyle={{ objectFit: 'cover' }}
          alt={props.alt}
        />
      </div>
      <div className={styles.dataCardContent}>
        <Typography variant='h2' className={styles.dataCardHeader}>
          {props.header}
        </Typography>
        <Typography variant='h2' className={styles.dataCardParagraph}>
          {props.paragraph}
        </Typography>
      </div>
    </div>
  )
}

export default DataSectionCard