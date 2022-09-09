import React, { useEffect } from 'react'
import { Container, Grid, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { graphql } from 'gatsby'
import Hero from '../components/uiComponents/hero'
import indexPageBanner from '../images/index-page-banner.jpg'
import ImageRow from '../components/pageComponents/index/imageRow'
import DataSectionCard from '../components/pageComponents/index/dataSectionCard'
import { mediaQueries } from '../components/layout/theme'

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
    padding: '3rem 3rem 4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5rem',
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
  nextStepsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Lato',
    fontWeight: 400,
    padding: '0 5rem',
    paddingBottom: '5rem',
    [mediaQueries.below992]: {
      padding: '0 1rem',
    },
  },
  nextStepsRow: {
    display: 'flex',
  },
  nextStepsColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '3rem 2.5rem 0 2.5rem',
    padding: '1rem 1.5rem',
  },
  boldFont: {
    fontWeight: 900,
  },
  greenBackdrop: {
    backgroundColor: '#B6AF6226',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  },
  orderedList: {
    marginTop: '0',
    paddingLeft: '1.5rem',
    '& li:not(:last-child)': {
      marginBottom: '1.5rem',
    },
  },
  orderedListHeader: {
    alignSelf: 'center',
    marginBottom: '2rem',
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
      <Hero
        imageObj={indexPageBanner}
        imageHeight='85vh'
        header='Assessing the feasibility of recharging groundwater on Ball Ranch'
        subheader='The first phase of the project is quantifying site groundwater
          conditions, cataloging groundwater dependent ecosystem
          characteristics, analyzing surface water supplies (from wet season
          flows), and assessing stakeholder support. This site summarizes
          information on each of these topics acquired by this project, and
          presents an initial assessment of the feasibility of Flood-MAR at Ball
          Ranch.'
      />

      <div className={styles.marginedContainer}>
        <ImageRow
          image={props.data.imageOne.childImageSharp.fluid}
          reverse={false}
          header='What is Flood-Mar'
          content='Flood-MAR is a water resource management strategy that uses wet season flows from rainfall or snowmelt to drive groundwater recharge on agricultural lands, working landscapes, and natural managed lands. Flood-MAR can be implemented at multiple scales, from individual landowner flood water diversions using existing infrastructure to regional floodplain inundation using new infrastructure or changes to existing infrastructure such as setting back levees.'
          alt='Image of diagram'
        />
        <ImageRow
          image={props.data.imageTwo.childImageSharp.fluid}
          reverse={true}
          header='Why Ball Ranch?'
          content='Ball Ranch is a 360 acre property acquired by the San Joaquin River Conservancy for ecosystem recovery and public use benefits. The property is bounded by the San Joaquin River and the Little Dry Creek watersheds, and has numerous depressions created by historical aggregate mining that can temporarily store surface water. Implementing Flood-MAR at Ball Ranch could take advantage of potential surface water supplies and topography suitable for groundwater recharge to restore lost functions of groundwater dependent ecosystems and enhance adjacent restoration efforts including the San Joaquin River Restoration Program.'
          alt='Image of river'
        />
      </div>

      <div className={styles.dataSection}>
        <Typography variant='h1' className={styles.sectionHeader}>
          Data
        </Typography>
        <div className={styles.dataSectionRow}>
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

      <div className={styles.nextStepsSection}>
        <Typography variant='h1' className={styles.sectionHeader}>
          Next Steps
        </Typography>
        <div className={styles.nextStepsRow}>
          <div className={styles.nextStepsColumn}>
            <Typography variant='subtitle1' className={styles.boldFont}>
              The feasibility analysis identified remaining data gaps and next
              steps including the following.
            </Typography>
            <br />
            <span className={styles.boldFont}>Flow Regimes.</span>
            <Typography>
              Identify what flow regimes could impact species both negatively
              and beneficially.
            </Typography>
            <br />
            <span className={styles.boldFont}>Subsurface Resistivity.</span>
            <Typography>
              Map Ball Ranch subsurface resistivity using TowTEM.
            </Typography>
            <br />
            <span className={styles.boldFont}>Flooding Impact.</span>
            <Typography>
              Identify if there is any flooding impact from recharging the
              aquifer at Ball Ranch.
            </Typography>
            <br />
            <span className={styles.boldFont}>Quantifying benefits.</span>
            <Typography>
              Develop framework for characterizing where water goes and if it
              has recharge benefit, SJR habitat benefit, or SJR temperature
              benefit and confirm if flood benefit can be characterized or
              quantified.
            </Typography>
          </div>
          <div className={`${styles.nextStepsColumn} ${styles.greenBackdrop}`}>
            <Typography
              variant='subtitle1'
              className={styles.orderedListHeader}
            >
              Cohesive strategy for implementation
            </Typography>
            <ol className={styles.orderedList}>
              <li>
                Identification and quantification of groundwater recharge
                limitations;
              </li>
              <li>
                Identification of and recommendations for addressing data gaps
                and information needs;
              </li>
              <li>
                Identification of revisions required to long-term management
                protocols for the site resulting from implementation;
              </li>
              <li>Data collection and data management plans;</li>
              <li>
                Conceptual alternatives for the Phase II Implementation Project;
              </li>
              <li>
                A preferred alternative to carry forward to the Phase II
                Implementation Project;
              </li>
              <li>A final design of the preferred alternative.</li>
            </ol>
          </div>
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
