import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import heroBanner from '../images/hero-image.jpg'
import heroBannerTwo from '../images/hero-image-two.jpg'
import Hero from '../components/pageComponents/feasability/hero'
import ImageRow from '../components/pageComponents/feasability/imageRow'
import DataSectionCard from '../components/pageComponents/feasability/dataSectionCard'

const useStyles = makeStyles((theme: Theme) => ({
  marginedContainer: {
    [theme.breakpoints.down('lg')]: {
      margin: '0',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0 5rem',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '0 15rem',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dataSection: {
    width: '100%',
    height: '624px',
    backgroundColor: '#8A9155A6',
    padding: '3rem',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataHeader: {
    fontFamily: 'Oswald',
    fontSize: '36px',
    fontWeight: 700,
    color: '#1B2C20',
  },
  dataCardRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
}))

interface IndexPageProps {
  data: any
}

const IndexPage = (props: IndexPageProps) => {
  const styles = useStyles()

  return (
    <main>
      <title>Home Page</title>
      <Hero />

      <div className={styles.marginedContainer}>
        <ImageRow
          image={props.data.imageOne.childImageSharp.fluid}
          reverse={false}
          alt='Image of diagram'
        />
        <ImageRow
          image={props.data.imageTwo.childImageSharp.fluid}
          reverse={true}
          alt='Image of river'
        />
      </div>

      <div className={styles.dataSection}>
        <div>
          <Typography className={styles.dataHeader}>Data</Typography>
        </div>
        <div className={styles.dataCardRow}>
          <DataSectionCard
            image={props.data.dataCardImageOne.childImageSharp.fluid}
            header='Soils and Geology'
            paragraph='Drainage of Ball Ranch soils were assessed using publicly available data'
            alt='Image of flowers'
          />
          <DataSectionCard
            image={props.data.dataCardImageTwo.childImageSharp.fluid}
            header='Ecology'
            paragraph='An assessment of species that historically populated Ball Ranch, what currently exists, and what could be re-introduced with the establishment of Flood-MAR.'
            alt='Image of a perched bird'
          />
          <DataSectionCard
            image={props.data.dataCardImageThree.childImageSharp.fluid}
            header='Water Balance'
            paragraph='Using existing data, gain an understanding of where water enters/leaves Ball Ranch and identify potential for surface water increases to enable Flood-MAR'
            alt='Image of soil'
          />
          <DataSectionCard
            image={props.data.dataCardImageFour.childImageSharp.fluid}
            header='Groundwater Monitoring'
            paragraph='Data collected from CASGEM and Fresno State piezometers were assessed to show groundwater level trends over time. '
          />
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
      original {
        width
      }
    }
  }
`
export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "imageOne.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "imageTwo.jpg" }) {
      ...fluidImage
    }
    dataCardImageOne: file(relativePath: { eq: "dataCardImageOne.jpg" }) {
      ...fluidImage
    }
    dataCardImageTwo: file(relativePath: { eq: "dataCardImageTwo.jpg" }) {
      ...fluidImage
    }
    dataCardImageThree: file(relativePath: { eq: "dataCardImageThree.jpg" }) {
      ...fluidImage
    }
    dataCardImageFour: file(relativePath: { eq: "dataCardImageFour.jpg" }) {
      ...fluidImage
    }
  }
`
