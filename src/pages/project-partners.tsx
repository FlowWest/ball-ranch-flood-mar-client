import React from 'react'
import { graphql } from 'gatsby'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import projectPartnersHero from '../images/project-partners-hero.jpg'
import Hero from '../components/uiComponents/hero'
import { Divider, Typography } from '@mui/material'
import Img from 'gatsby-image'
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
      margin: '0 5rem',
    },
    paddingBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  workshopSection: {
    [mediaQueries.below992]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  rowContainer: {
    display: 'flex',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  textContainer: {
    maxWidth: '350px',
    marginRight: '5rem',
    [mediaQueries.below992]: {
      maxWidth: '600px',
      marginRight: '0',
      marginBottom: '5rem',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  presentorsCard: {
    backgroundColor: '#ECECEA9C',
    width: '630px',
    height: '440px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2.5rem',
  },
  presentorsCardHeader: {
    fontSize: '30px',
    fontWeight: 700,
  },
  presentorGrid: {
    width: '100%',
    justifyContent: 'space-between',
  },
  presentorColumn: {
    height: '100%',
    alignItems: 'space-between',
  },
  presentorLogo: {
    height: '100px',
    width: '100px',
    marginRight: '0.5rem'
  },
  presentorInfo: {
    maxWidth: '160px',
  },
  presentorName: {
    fontWeight: 400,
  },
  presentorOrg: {
    fontWeight: 200,
  },
  projectPartnerCpmt: {
    marginBottom: '5rem',
    [mediaQueries.below992]: {
      alignItems: 'center',
    },
  },
  projectPartnerImage: {
    width: '350px',
  },
  projectPartnerMultiImage: {
    width: '100px',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    [mediaQueries.below992]: {
      alignSelf: 'center',
    },
  },
  text: {
    fontWeight: 400,
  },
  marginBottom3: {
    marginBottom: '3rem',
  },
  marginBottom2: {
    marginBottom: '2rem',
  },
  marginBottom1: {
    marginBottom: '1rem',
  },
  marginBottom5: {
    marginBottom: '5rem',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  marginRight1: {
    marginRight: '1rem',
  },
}))

interface ProjectPartnersPageProps {
  data: any
}

interface WorkshopPresentorCmptProps {
  fluidImage: any
  name: string
  org: string
  className?: any
}

interface ProjectPartnerCmptProps {
  fluidImage?: any
  fluidImages?: any[]
  info: string
}

const ProjectPartnersPage = (props: ProjectPartnersPageProps) => {
  const styles = useStyles()

  const WorkshopPresentorCmpt = (props: WorkshopPresentorCmptProps) => {
    return (
      <div
        className={
          props.className
            ? `${props.className} ${styles.rowContainer} ${styles.alignCenter}`
            : `${styles.rowContainer} ${styles.alignCenter}`
        }
      >
        <div className={styles.presentorLogo}>
          <Img
            fluid={props.fluidImage}
            style={{ height: '100%', width: '100%' }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </div>
        <div className={`${styles.presentorInfo} ${styles.columnContainer}`}>
          <Typography variant='body1' className={styles.presentorName}>
            {props.name}
          </Typography>
          <Typography variant='body1' className={styles.presentorOrg}>
            {props.org}
          </Typography>
        </div>
      </div>
    )
  }

  const ProjectPartnerCmpt = (props: ProjectPartnerCmptProps) => {
    return (
      <div className={`${styles.projectPartnerCpmt} ${styles.columnContainer}`}>
        {props.fluidImages ? (
          <div
            className={`${styles.rowContainer} ${styles.alignCenter} ${styles.marginBottom1}`}
          >
            {props.fluidImages.map((image) => {
              return (
                <div
                  className={`${styles.projectPartnerMultiImage} ${styles.marginRight1}`}
                >
                  <Img fluid={image} imgStyle={{ objectFit: 'cover' }} />
                </div>
              )
            })}
          </div>
        ) : (
          <div
            className={`${styles.projectPartnerImage} ${styles.marginBottom1}`}
          >
            <Img fluid={props.fluidImage} imgStyle={{ objectFit: 'cover' }} />
          </div>
        )}
        <Typography variant='body1' className={styles.text}>
          {props.info}
        </Typography>
      </div>
    )
  }

  return (
    <main>
      <Header />
      <title>Project Partners</title>
      <Hero
        imageObj={projectPartnersHero}
        imageHeight='525px'
        header='Project Partners and Outreach'
        subheader=''
        marginBottom='5rem'
        fitInLowOpacityContainer={true}
      />
      <div className={styles.marginedContainer}>
        <div
          className={`${styles.workshopSection} ${styles.rowContainer} ${styles.alignCenter}`}
        >
          <div className={styles.textContainer}>
            <Typography
              variant='h1'
              className={`${styles.header} ${styles.marginBottom2}`}
            >
              Stakeholder Workshop
            </Typography>
            <Typography variant='body1' className={styles.text}>
              The Ball Ranch Flood-MAR team engaged a diverse set of
              stakeholders and experts through a series of interviews with 20
              organizations, a stakeholder workshop with 26 participants, and a
              draft memorandum for stakeholder feedback.
              <br />
              <br />
              The goal of this outreach was to understand the lay of the land,
              identify data gaps, and hone in on key next steps for implementing
              a MAR pilot project.
            </Typography>
          </div>
          <div className={styles.presentorsCard}>
            <Typography className={styles.presentorsCardHeader}>
              Workshop Presentors
            </Typography>
            <Divider
              sx={{
                border: '1px solid rgba(0, 0, 0, 0.25)',
                margin: '1.5rem 2rem',
                alignSelf: 'stretch',
              }}
            />
            <div className={`${styles.presentorGrid} ${styles.rowContainer}`}>
              <div
                className={`${styles.presentorColumn} ${styles.columnContainer}`}
              >
                <WorkshopPresentorCmpt
                  fluidImage={props.data.cdwrLogo.childImageSharp.fluid}
                  name='Jenny Mar'
                  org='(California Department of Water Resources)'
                  className={styles.marginBottom3}
                />
                <WorkshopPresentorCmpt
                  fluidImage={props.data.stanfordLogo.childImageSharp.fluid}
                  name='Rosemary Knight'
                  org='(Stanford)'
                />
              </div>
              <div className={styles.columnContainer}>
                <WorkshopPresentorCmpt
                  fluidImage={props.data.sjrcLogo.childImageSharp.fluid}
                  name='John Shelton'
                  org='(San Joaquin River Conservancy)'
                  className={styles.marginBottom3}
                />
                <WorkshopPresentorCmpt
                  fluidImage={props.data.northKingsLogo.childImageSharp.fluid}
                  name='Kassy Chauhan'
                  org='(North Kings GSA)'
                />
              </div>
            </div>
          </div>
        </div>

        <Divider
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.25)',
            margin: '6rem 6rem',
            alignSelf: 'stretch',
          }}
        />

        <div className={styles.columnContainer}>
          <Typography
            variant='h1'
            className={`${styles.header} ${styles.marginBottom5} ${styles.alignSelf}`}
          >
            Project Partners
          </Typography>
          <ProjectPartnerCmpt
            fluidImage={props.data.sjrcBanner.childImageSharp.fluid}
            info={
              'The San Joaquin River Conservancy is a regionally governed agency created to develop and manage the San Joaquin River Parkway, a planned 22-mile natural and recreational area in the floodplain extending from Friant Dam to Highway 99. The Conservancy’s mission includes acquiring approximately 5,900 acres from willing sellers; developing, operating, and managing those lands for public access and recreation; and protecting, enhancing, and restoring riparian and floodplain habitat. The San Joaquin River Conservancy is sponsoring the Ball Ranch Managed Aquifer Recharge (MAR) Planning and Analysis Project.'
            }
          />
          <ProjectPartnerCmpt
            fluidImage={props.data.cdwrBanner.childImageSharp.fluid}
            info={`The California Department of Water Resources’ (DWR) mission is to sustainably manage and regulate the water resources of California in cooperation with other agencies, to benefit the state’s people and protect, restore, and enhance the natural and human environments. DWR pursues expanded implementation of Flood-MAR, towards the goal of making Flood-MAR an integral part of California’s water portfolio. For the Ball Ranch Flood-MAR feasibility analysis, DWR has supported the project through in-kind technical services identifying potential surface water resources for recharge on the site. `}
          />
          <ProjectPartnerCmpt
            fluidImages={[
              props.data.flowwestLogo.childImageSharp.fluid,
              props.data.flowwestText.childImageSharp.fluid,
            ]}
            info={`FlowWest’s innovative use of technology, and commitment to building a diverse and inclusive team allows them to deliver unique and effective water and natural resource solutions. FlowWest is part of the project team, and is responsible for delivering the preliminary planning memo, updated planning memo, stakeholder memo, feasibility analysis, and project implementation strategy for this project over the span of 2021-2023`}
          />
          <ProjectPartnerCmpt
            fluidImage={props.data.riverPartnersBanner.childImageSharp.fluid}
            info={`River Partners pioneers the use of agricultural techniques combined with ecological science to re-introduce critical habitat in California. River Partners’ mission is to bring life back to rivers by creating wildlife habitat for the benefit of people and the environment. River Partners is part of the project team andinvolved in the project deliverables.`}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default ProjectPartnersPage

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
    cdwrLogo: file(relativePath: { eq: "cdwr-logo.jpeg" }) {
      ...fluidImage
    }
    sjrcLogo: file(relativePath: { eq: "sjrc-logo.jpeg" }) {
      ...fluidImage
    }
    stanfordLogo: file(relativePath: { eq: "stanford-logo.png" }) {
      ...fluidImage
    }
    northKingsLogo: file(relativePath: { eq: "north-kings-logo.jpg" }) {
      ...fluidImage
    }
    sjrcBanner: file(relativePath: { eq: "sjrc-banner.jpg" }) {
      ...fluidImage
    }
    cdwrBanner: file(relativePath: { eq: "cdwr-banner.jpg" }) {
      ...fluidImage
    }
    flowwestLogo: file(relativePath: { eq: "flowwest-logo.jpg" }) {
      ...fluidImage
    }
    flowwestText: file(relativePath: { eq: "flowwest-text.jpg" }) {
      ...fluidImage
    }
    riverPartnersBanner: file(
      relativePath: { eq: "river-partners-banner.jpg" }
    ) {
      ...fluidImage
    }
  }
`
