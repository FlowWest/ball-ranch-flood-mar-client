import React, { useEffect } from 'react'
import { Container, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import heroBanner from '../images/hero-image.jpg'

const useStyles = makeStyles((theme: Theme) => ({
  landingCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    padding: '5rem',
    marginBottom: '5rem',
    color: 'white',
    backgroundColor: 'olive',
    backgroundImage: `url(${heroBanner})`,
    backgroundSize: 'cover',
    height: '576px',
  },
  pageContainer: {
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
  rowContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  maxWidthContainer: {
    width: '100%',
  },
  paragraphContainer: {
    maxWidth: '50rem',
  },
  greyContainer: {
    backgroundColor: '#F2F3F5',
    padding: '3rem 3rem 1rem 3rem',
    // TODO: REMOVE BELOW
    marginBottom: '5rem',
  },
  headerOne: {
    fontSize: '5rem',
    fontWeight: 700,
    marginBottom: '0 !important'
  },
  headerTwo: {
    fontSize: '4rem',
    fontWeight: 700,
  },
  paragraphHeader: {
    fontSize: '2.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  paragraphContent: {
    fontSize: '1.5rem',
    fontWeight: 100,
    lineHeight: '2.75rem',
  },
  marginBottom5: {
    marginBottom: '5rem',
  },
  marginBottom3: {
    marginBottom: '3rem',
  },
  marginBottom1: {
    marginBottom: '1rem',
  },
  listBox: {
    margin: '3rem',
    padding: '1rem',
    border: '1px solid black',
    width: '25rem',
    height: '25rem',
    display: 'flex',
    flexDirection: 'column',
  },
  imageOne: {
    minWidth: '600px',
    maxHeight: '100%',
    marginRight: '3rem',
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
      <div className={styles.landingCard}>
        <Typography variant='h2' className={`${styles.headerOne} ${styles.marginBottom1}`}>
          Ball Ranch
        </Typography>
        <Typography variant='h3' className={styles.headerTwo}>
          Flood-MAR Feasibility
        </Typography>
      </div>

      <div className={styles.pageContainer}>
        <div className={`${styles.rowContainer} ${styles.marginBottom3}`}>
          <div className={styles.imageOne}>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              imgStyle={{ objectFit: 'cover' }}
              alt='Image of river.'
            />
          </div>
          <div className={styles.paragraphContainer}>
            <Typography className={styles.paragraphHeader}>
              About Ball Ranch
            </Typography>
            <Typography className={styles.paragraphContent}>
              The Ball Ranch Managed Aquifer Recharge (MAR) Planning and
              Analysis Project is assessing the feasibility and potential
              benefits of recharging groundwater on Ball Ranch. The first phase
              of the project is quantifying site groundwater conditions,
              cataloging groundwater dependent ecosystem characteristics,
              analyzing surface water supplies (from wet season flows), and
              assessing stakeholder support. This site summarizes information on
              each of these topics acquired by this project, and presents an
              initial assessment of the feasibility of Flood MAR at Ball Ranch.
            </Typography>
          </div>
        </div>

        <div className={styles.rowContainer}>
          <div className={styles.paragraphContainer}>
            <Typography className={styles.paragraphHeader}>
              What is Flood MAR?
            </Typography>
            <Typography className={styles.paragraphContent}>
              Flood-MAR is a water resource management strategy that uses wet
              season flows from rainfall or snowmelt to drive groundwater
              recharge on agricultural lands, working landscapes, and natural
              managed lands. Flood-MAR can be implemented at multiple scales,
              from individual landowner flood water diversions using existing
              infrastructure to regional floodplain inundation using new
              infrastructure or changes to existing infrastructure such as
              setting back levees.
            </Typography>
          </div>
          <div className={styles.listBox}>
            <Typography>
              Flood-MAR projects can provide broad benefits for California and
              the ecosystems of the state, including:
            </Typography>
            <ul>
              <li>Water supply reliability</li>
              <li>Flood risk reduction</li>
              <li>Drought preparedness</li>
              <li>Aquifer replenishment</li>
              <li>Ecosystem enhancement</li>
              <li>Subsidence Mitigation</li>
              <li>Water quality improvement</li>
              <li>Working landscape preservation and stewardship</li>
              <li>Climate change adaptation</li>
              <li>Recreation and aesthetic</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.maxWidthContainer} ${styles.greyContainer}`}>
          <div>
            <Typography className={styles.paragraphHeader}>
              Why Ball Ranch?
            </Typography>
            <Typography className={styles.paragraphContent}>
              Ball Ranch is a 360 acre property acquired by the San Joaquin
              River Conservancy for ecosystem recovery and public use benefits.
              The property is bounded by the San Joaquin River and the Little
              Dry Creek watersheds, and has numerous depressions created by
              historical aggregate mining that can temporarily store surface
              water. Implementing Flood MAR at Ball Ranch could take advantage
              of potential surface water supplies and topography suitable for
              groundwater recharge to restore lost functions of groundwater
              dependent ecosystems and enhance adjacent restoration efforts
              including the San Joaquin River Restoration Program.
            </Typography>
            <br />
            <Typography className={styles.paragraphContent}>
              The following data sources help understand why Flood-MAR is
              feasible on Ball Ranch:
            </Typography>
          </div>
        </div>
      </div>
      {/* <Map data={sjrcProjectBoundaryData} /> */}
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
    imageOne: file(relativePath: { eq: "imageOne.jpeg" }) {
      ...fluidImage
    }
  }
`
