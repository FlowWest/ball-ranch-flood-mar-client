import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import heroBanner from '../images/index-page-banner.jpg'
import Hero from '../components/uiComponents/hero'
import LinksRow from '../components/uiComponents/linksRow'
import OverviewContent from '../components/pageComponents/feasibility-assessment/overviewContent'
import GroundWaterContent from '../components/pageComponents/feasibility-assessment/groundWaterContent'
import SurfaceWaterContent from '../components/pageComponents/feasibility-assessment/surfaceWaterContent'
import EcologyContent from '../components/pageComponents/feasibility-assessment/ecologyContent'
import SoilsContent from '../components/pageComponents/feasibility-assessment/soilsContent'
import { mediaQueries } from '../components/layout/theme'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

const useStyles = makeStyles((theme: Theme) => ({
  marginedContainer: {
    [mediaQueries.below992]: {
      margin: '0 1rem',
    },
    [mediaQueries.below1200]: {
      margin: '0 2rem',
    },
    [mediaQueries.above1200]: {
      margin: '0 5rem',
    },
    paddingBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linksRowContainer: {
    height: '6rem',
    margin: '0 5rem',
  },
  scrollableContainer: {
    overflow: 'scroll',
    maxHeight: '85vh',
    paddingTop: '5rem',
    [mediaQueries.below992]: {
      margin: '0 1.5rem',
    },
    [mediaQueries.below1200]: {
      margin: '0 2.5rem',
    },
    [mediaQueries.above1200]: {
      margin: '0 7.5rem',
    },

    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      width: '7px',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: 'rgba(0, 0, 0, .20)',
      boxShadow: '0 0 1px rgba(255, 255, 255, .5)',
    },
  },
}))

interface AnalysisPageProps {
  data: any
  location?: any
}

const AnalysisPage = (props: AnalysisPageProps) => {
  const [activePage, setActivePage] = useState('Overview')
  const activePageCmptDict: any = {
    Overview: (
      <OverviewContent
        images={{
          feasibilityAssesmentChart:
            props.data.feasibilityAssesmentChart.childImageSharp.fluid,
        }}
      />
    ),
    'Ground Water': (
      <GroundWaterContent
        images={{
          groundWaterImage: props.data.groundWaterImage.childImageSharp.fluid,
          casgemLogo: props.data.casgemLogo.childImageSharp.fluid,
          csuFresnoLogo: props.data.csuFresnoLogo.childImageSharp.fluid,
        }}
      />
    ),
    'Surface Water': (
      <SurfaceWaterContent
        images={{
          surfaceWaterImage: props.data.surfaceWaterImage.childImageSharp.fluid,
        }}
      />
    ),
    Ecology: (
      <EcologyContent
        images={{
          ecologyImage: props.data.ecologyImage.childImageSharp.fluid,
          ecologyChartsImage:
            props.data.ecologyChartsImage.childImageSharp.fluid,
        }}
      />
    ),
    Soils: (
      <SoilsContent
        images={{
          soilsImage: props.data.soilsImage.childImageSharp.fluid,
        }}
      />
    ),
  }
  const styles = useStyles()

  useEffect(() => {
    if (props.location.state?.activePage) {
      const pageFromLink = props.location.state.activePage
      setActivePage(pageFromLink)
    }
  }, [])

  return (
    <main>
      <Header />
      <title>Analysis</title>
      <Hero
        imageObj={heroBanner}
        imageHeight='250px'
        header='Feasibility Assessment'
        subheader='Select the tabs below to explore analyses of Ball Ranch.'
        marginBottom='0rem'
        fitInLowOpacityContainer={true}
      />
      <div className={styles.linksRowContainer}>
        <LinksRow
          links={[
            {
              text: 'Feasibility Factors',
              onClick: () => setActivePage('Overview'),
              route: '',
            },
            {
              text: 'Surface Water',
              onClick: () => setActivePage('Surface Water'),
              route: '',
            },
            {
              text: 'Soils & Geology',
              onClick: () => setActivePage('Soils'),
              route: '',
            },
            {
              text: 'Groundwater',
              onClick: () => setActivePage('Ground Water'),
              route: '',
            },
            {
              text: 'Ecology',
              onClick: () => setActivePage('Ecology'),
              route: '',
            },
          ]}
        />
      </div>
      <div className={styles.scrollableContainer}>
        <div className={styles.marginedContainer}>
          {activePageCmptDict[activePage]}
        </div>
      </div>
    </main>
  )
}

export default AnalysisPage

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
    feasibilityAssesmentChart: file(
      relativePath: { eq: "feasibility-assesment-chart.jpg" }
    ) {
      ...fluidImage
    }
    groundWaterImage: file(relativePath: { eq: "ground-water-image.jpg" }) {
      ...fluidImage
    }
    casgemLogo: file(relativePath: { eq: "casgem-logo.jpg" }) {
      ...fluidImage
    }
    csuFresnoLogo: file(relativePath: { eq: "csu-fresno-logo.jpg" }) {
      ...fluidImage
    }
    surfaceWaterImage: file(relativePath: { eq: "surface-water-image.jpg" }) {
      ...fluidImage
    }
    ecologyImage: file(relativePath: { eq: "ecology-image.jpg" }) {
      ...fluidImage
    }
    ecologyChartsImage: file(relativePath: { eq: "ecology-charts-image.jpg" }) {
      ...fluidImage
    }
    evapoImage: file(relativePath: { eq: "evapo-image.jpg" }) {
      ...fluidImage
    }
    soilsImage: file(relativePath: { eq: "soils-image.jpg" }) {
      ...fluidImage
    }
  }
`
