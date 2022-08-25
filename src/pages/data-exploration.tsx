import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import heroBanner from '../images/data-exploration-hero.jpg'
import Hero from '../components/pageComponents/feasability/hero'
import LinksRow from '../components/uiComponents/linksRow'
import MapContent from '../components/pageComponents/dataExploration/mapContent'
import GroundWaterContent from '../components/pageComponents/dataExploration/groundWaterContent'

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
        image={props.data.groundWaterImage.childImageSharp.fluid}
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
      <div className={styles.marginedContainer}>
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
  }
`
