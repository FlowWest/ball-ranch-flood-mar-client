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
  semiBoldFont: {
    fontWeight: 500,
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
            <Typography variant='subtitle1' className={styles.boldFont} style={{fontSize: '1.2rem'}}>
              The feasibility analysis using the existing data presented on this
              web application indicates potential feasibility of Flood-MAR at
              Ball Ranch that would be highly beneficial to groundwater
              dependent ecosystems. However, significant administrative hurdles
              and data gaps remain that must be addressed prior to implementing
              Flood-MAR. The following issues and data gaps will be addressed in
              the Implementation Strategy deliverable for this project.
            </Typography>
            <br />
            <span className={styles.boldFont}>Water Rights.</span>
            <Typography>
              Surface water delivery from any of the sources identified on this
              web application will require water rights agreements to
              incorporate a Flood-MAR beneficial use.
            </Typography>
            <br />
            <span className={styles.boldFont}>Surface Water Flows.</span>
            <Typography>
              Further analysis of surface flow magnitudes, frequencies,
              duration, and timing is required to more accurately quantify
              potential impacts and benefits of Flood-MAR at Ball Ranch.
            </Typography>
            <br />
            <span className={styles.boldFont}>Subsurface Resistivity.</span>
            <Typography>
              Subsurface resistivity data collected at Ball Ranch using TowTEM
              must be analyzed and correlated with subsurface site conditions to
              provide precise, site-specific understanding of recharge
              potential.
            </Typography>
            <br />
            <span className={styles.boldFont}>Flood Management.</span>
            <Typography>
              While the impact of additional surface water storage on Ball Ranch
              is not expected to significantly affect flood management in the
              region, further analysis is required to quantify any changes to
              flood flow routing associated with Flood-MAR at Ball Ranch.
            </Typography>
            <br />
            <span className={styles.boldFont}>Benefit Quantification.</span>
            <Typography>
              A framework for quantifying groundwater recharge benefits to
              ecosystem and water management conditions is required to assess
              the relative value of different scales of Flood-MAR at Ball Ranch.
            </Typography>
          </div>
          <div className={`${styles.nextStepsColumn} ${styles.greenBackdrop}`}>
            <Typography
              variant='subtitle1'
              className={`${styles.orderedListHeader} ${styles.semiBoldFont}`}
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
      <Footer />
    </main>
  )
}

export default ImplementationStrategy
