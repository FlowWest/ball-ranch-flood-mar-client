import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import heroBanner from '../images/data-exploration-hero.jpg'
import Hero from '../components/pageComponents/feasability/hero'
import LinksRow from '../components/uiComponents/linksRow'
import MapContent from '../components/pageComponents/dataExploration/mapContent'
import GroundWaterContent from '../components/pageComponents/dataExploration/groundwaterContent'

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
  linksRowContainer: {
    height: '6rem',
    margin: '0 5rem',
  },
  scrollableContainer: {
    overflow: 'scroll',
    maxHeight: '80vh',
    paddingTop: '5rem',

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

interface DataExplorationPageProps {
  data: any
}

const DataExplorationPage = (props: DataExplorationPageProps) => {
  const [activePage, setActivePage] = useState('Map')
  const activePageCmptDict: any = {
    Map: <MapContent />,
    'Ground Water': (
      <GroundWaterContent
        images={{
          groundWaterImage: props.data.groundWaterImage.childImageSharp.fluid,
          casgemLogo: props.data.casgemLogo.childImageSharp.fluid,
          csuFresnoLogo: props.data.csuFresnoLogo.childImageSharp.fluid,
        }}
      />
    ),
    'Surface Water': <div />,
    Ecology: <div />,
    Evapotranspiration: <div />,
    Soils: <div />,
  }
  const styles = useStyles()

  return (
    <main>
      <title>Home Page</title>
      <Hero
        imageObj={heroBanner}
        imageHeight='295px'
        header='Analysis'
        subheader='Use the tabs below to explore analyses of Ball Ranch.'
        marginBottom='0rem'
        fitInLowOpacityContainer={true}
      />
      <div className={styles.linksRowContainer}>
        <LinksRow
          links={[
            { text: 'Map', onClick: () => setActivePage('Map'), route: '' },
            {
              text: 'Ground Water',
              onClick: () => setActivePage('Ground Water'),
              route: '',
            },
            {
              text: 'Surface Water',
              onClick: () => setActivePage('Surface Water'),
              route: '',
            },
            {
              text: 'Ecology',
              onClick: () => setActivePage('Ecology'),
              route: '',
            },
            {
              text: 'Evapotranspiration',
              onClick: () => setActivePage('Evapotranspiration'),
              route: '',
            },
            {
              text: 'Soils',
              onClick: () => setActivePage('Soils'),
              route: '',
            },
          ]}
        />
      </div>
      <div
        className={`${styles.marginedContainer} ${styles.scrollableContainer}`}
      >
        {activePageCmptDict[activePage]}
      </div>
    </main>
  )
}

export default DataExplorationPage

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
    groundWaterImage: file(relativePath: { eq: "ground-water-image.jpg" }) {
      ...fluidImage
    }
    casgemLogo: file(relativePath: { eq: "casgem-logo.jpg" }) {
      ...fluidImage
    }
    csuFresnoLogo: file(relativePath: { eq: "csu-fresno-logo.jpg" }) {
      ...fluidImage
    }
  }
`
