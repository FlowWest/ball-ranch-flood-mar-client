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
        imageHeight='295px'
        header='Implementation Strategy'
        subheader=''
        fitInLowOpacityContainer={true}
      />
      <div className={styles.nextStepsSection}>
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
