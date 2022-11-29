import React from 'react'
import { Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { graphql } from 'gatsby'
import Hero from '../components/uiComponents/hero'
import indexPageBanner from '../images/index-page-banner.jpg'
import ImageRow from '../components/pageComponents/index/imageRow'
import DataSectionCard from '../components/pageComponents/index/dataSectionCard'
import { mediaQueries } from '../components/layout/theme'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

const useStyles = makeStyles((theme: Theme) => ({
  marginedContainer: {
    [mediaQueries.below992]: {
      margin: '0 3rem',
    },
    [mediaQueries.below1200]: {
      margin: '0 5rem',
    },
    [mediaQueries.above1200]: {
      margin: '0 10rem',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dataSection: {
    width: '100%',
    backgroundColor: '#8A9155A6',
    padding: '5rem 3rem 6rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionHeader: {
    fontFamily: 'Oswald',
    fontWeight: 700,
    color: '#1B2C20',
  },
  dataSectionRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: '3rem',
    [mediaQueries.below992]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
}))

interface IndexPageProps {
  data: any
}

const IndexPage = (props: IndexPageProps) => {
  const styles = useStyles()

  return (
    <main>
      <Header />
      <title>Home Page</title>
      <Hero
        imageObj={indexPageBanner}
        imageHeight='85vh'
        header='Assessing the feasibility of recharging groundwater on Ball Ranch'
        subheader='The first phase of the Ball Ranch MAR project is using existing data to quantify site groundwater conditions, catalog groundwater dependent ecosystem characteristics, analyze potential surface water supplies (from wet season flows), and assess stakeholder support. This website summarizes information on each of these topics and presents an initial assessment of the feasibility of Flood-MAR at Ball Ranch.'
      />

      <div className={styles.marginedContainer}>
        <ImageRow
          image={props.data.imageOne.childImageSharp.fluid}
          reverse={false}
          header='What is Flood-MAR'
          content='Flood-MAR is a water resource management strategy that uses wet season flows from rainfall or snowmelt to drive groundwater recharge on agricultural lands, working landscapes, and natural managed lands. Flood-MAR can be implemented at multiple scales, from individual landowner flood water diversions using existing infrastructure to regional floodplain inundation using new infrastructure or changes to existing infrastructure such as setting back levees.'
          alt='Image of diagram'
          imageCaption='Conceptual model of managed aquifer recharge at sites adjacent to rivers like Ball Ranch'
        />
        <ImageRow
          image={props.data.imageTwo.childImageSharp.fluid}
          reverse={true}
          header='Why Ball Ranch?'
          content='Ball Ranch was acquired by the San Joaquin River Conservancy for ecosystem recovery and public use benefits. The property is bounded by the San Joaquin River and Little Dry Creek watersheds, and has diverse topography that includes perennial surface water features. A Flood-MAR project at Ball Ranch could take advantage of wet season surface water supplies and existing topography suitable for groundwater recharge to restore lost functions of groundwater dependent ecosystems and enhance adjacent restoration efforts including the San Joaquin River Restoration Program.'
          alt='Image of river'
          imageCaption='Ball Ranch aerial photo from 2016'
        />
      </div>

      <div className={styles.dataSection}>
        <Typography variant='h1' className={styles.sectionHeader}>
          Feasibility Assessment Data
        </Typography>
        <div className={styles.dataSectionRow}>
          <DataSectionCard
            image={props.data.dataCardImageThree.childImageSharp.fluid}
            header='Surface Water Supply'
            paragraph='Quantification of potential surface water supply sources for MAR at Ball Ranch.'
            analysisLink='Surface Water'
            alt='Image of soil'
          />
          <DataSectionCard
            image={props.data.dataCardImageOne.childImageSharp.fluid}
            header='Soils and Geology'
            paragraph='Surface and subsurface conditions affecting groundwater recharge potential at and around Ball Ranch.'
            analysisLink='Soils'
            alt='Image of flowers'
          />
          <DataSectionCard
            image={props.data.dataCardImageFour.childImageSharp.fluid}
            header='Groundwater'
            paragraph='Regional and site specific groundwater elevations showing seasonal and long-term trends.'
            analysisLink='Ground Water'
          />
          <DataSectionCard
            image={props.data.dataCardImageTwo.childImageSharp.fluid}
            header='Ecology'
            paragraph='Historical, current, and potential future species presence at Ball Ranch.'
            analysisLink='Ecology'
            alt='Image of a perched bird'
          />
        </div>
      </div>
      <Footer />
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
    imageTwo: file(relativePath: { eq: "ball-ranch-aerial.jpg" }) {
      ...fluidImage
    }
    dataCardImageOne: file(relativePath: { eq: "data-card-image-one.jpg" }) {
      ...fluidImage
    }
    dataCardImageTwo: file(relativePath: { eq: "data-card-image-two.jpg" }) {
      ...fluidImage
    }
    dataCardImageThree: file(
      relativePath: { eq: "data-card-image-three.jpg" }
    ) {
      ...fluidImage
    }
    dataCardImageFour: file(relativePath: { eq: "data-card-image-four.jpg" }) {
      ...fluidImage
    }
  }
`
