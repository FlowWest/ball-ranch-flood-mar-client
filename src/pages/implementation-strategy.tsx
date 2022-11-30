import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { mediaQueries } from '../components/layout/theme'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Hero from '../components/uiComponents/hero'
import indexPageBanner from '../images/index-page-banner.jpg'

const useStyles = makeStyles((theme: Theme) => ({
  nextStepsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'Lato',
    fontWeight: 400,
    padding: '0 5rem',
    paddingBottom: '8rem',
    [mediaQueries.below992]: {
      padding: '0 1rem',
      paddingBottom: '8rem',
    },
  },
  nextStepsRow: {
    display: 'flex',
  },
  nextStepsColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0rem 2.5rem 0 2.5rem',
    padding: '0rem 1.5rem',
  },
  boldFont: {
    fontWeight: 900,
  },
  italic: {
    fontStyle: 'italic',
  },
}))

const ImplementationStrategy = () => {
  const styles = useStyles()

  return (
    <main>
      <Header />
      <Hero
        imageObj={indexPageBanner}
        imageHeight='250px'
        header='Implementation Strategy'
        subheader=''
        fitInLowOpacityContainer={true}
      />
      <div className={styles.nextStepsSection}>
        <div className={styles.nextStepsRow}>
          <div className={styles.nextStepsColumn}>
            <Typography>
              The feasibility analyses presented on the pages of this web
              application identified surface water, groundwater, and soils and
              geology conditions potentially conducive to successful Flood-MAR
              at Ball Ranch that would be highly beneficial to groundwater
              dependent ecosystems. However, significant administrative hurdles
              and data gaps remain that must be addressed in Phase 2 of this
              effort prior to implementing Flood-MAR at the Ball Ranch site. A
              plan to address the following issues and data gaps will be
              provided in the Implementation Strategy, which is the final
              deliverable for Phase 1 of this project.
            </Typography>
            <br />
            <span className={styles.boldFont}>Water Rights</span>
            <Typography>
              Surface water deliveries from any of the sources identified in
              this web application will require water rights agreements to
              incorporate a Flood-MAR beneficial use. Implementation will
              include focused outreach to water rights holders to develop these
              agreements.
            </Typography>
            <br />
            <span className={styles.boldFont}>Surface Water Flows</span>
            <Typography>
              A more detailed quantification of the magnitude, frequency, and
              timing of available surface water will be required to design
              optimal Flood-MAR strategies for Ball Ranch. Implementation will
              include additional hydrologic analyses to guide development of
              Flood-MAR protocols for the site and more accurately quantify
              potential impacts and benefits.
            </Typography>
            <br />
            <span className={styles.boldFont}>Subsurface Resistivity</span>
            <Typography>
              High resolution subsurface resistivity data collected at Ball
              Ranch using TowTEM during Phase 1 of this project can provide a
              highly resolved understanding of subsurface conditions that will
              govern Flood-MAR at Ball Ranch. This data will be analyzed and
              correlated with subsurface site conditions as part of the
              implementation phase to guide design of optimal delivery and
              storage of surface water for successful Flood-MAR.
            </Typography>
            <br />
            <span className={styles.boldFont}>Flood Management</span>
            <Typography>
              Additional surface water storage on Ball Ranch during high flow
              periods is not expected to significantly affect flood management
              in the region. Implementation will include flood management
              analyses to quantify any changes to flood flow routing associated
              with Flood-MAR at Ball Ranch, and mitigate any impacts.
            </Typography>
            <br />
            <span className={styles.boldFont}>Benefit Quantification</span>
            <Typography>
              This feasibility analysis has identified a high potential for
              Flood-MAR benefits to GDEs. However, very little guidance exists
              on how to effectively monitor and document GDE improvements.
              Implementation will include development of a framework for
              quantifying groundwater recharge benefits to ecosystem and water
              management conditions associated with different scales of
              Flood-MAR at Ball Ranch.
            </Typography>
            <br />
            <Typography className={styles.italic}>
              In addition to the key issues and data gaps described above, the
              implementation strategy for Flood-MAR at Ball Ranch will address
              groundwater recharge limitations, long-term management protocols,
              data collection and management, conceptual implementation
              alternatives, and a preferred alternative for implementation.
            </Typography>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default ImplementationStrategy
