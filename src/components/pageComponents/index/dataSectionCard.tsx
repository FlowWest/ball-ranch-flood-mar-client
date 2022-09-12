import React from 'react'
import { Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import { Link } from 'gatsby'

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
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      cursor: 'pointer',
    },
  },
  dataCardImage: {
    borderRadius: '4px',
    overflow: 'hidden',
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
  },
}))

interface DataSectionCardProps {
  image: any
  header: string
  paragraph: string
  analysisLink: string
  alt?: string
}

const DataSectionCard = (props: DataSectionCardProps) => {
  const styles = useStyles()

  return (
    <div className={styles.dataCard}>
      <Link
        to='/analysis'
        style={{ textDecoration: 'none' }}
        state={{ activePage: props.analysisLink }}
      >
        <div className={styles.dataCardImage}>
          <Img
            fluid={props.image}
            imgStyle={{ objectFit: 'cover' }}
            alt={props.alt}
          />
        </div>
        <div className={styles.dataCardContent}>
          <Typography variant='body1' className={styles.dataCardHeader}>
            {props.header}
          </Typography>
          <Typography variant='body1' className={styles.dataCardParagraph}>
            {props.paragraph}
          </Typography>
        </div>
      </Link>
    </div>
  )
}

export default DataSectionCard
