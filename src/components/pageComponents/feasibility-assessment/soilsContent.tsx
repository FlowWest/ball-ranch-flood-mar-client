import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Typography } from '@mui/material'
import Img from 'gatsby-image'
import { mediaQueries } from '../../layout/theme'
import {
  Map,
  sourceNameToCoordinatesDictionary,
  sourceNameToZoomValueDictionary,
} from '../../uiComponents/map'

//spatial data
import sjrcProjectBoundary from '../../../data/geospatial/sjrc_project_boundary.json'
import northKingsGSABoundary from '../../../data/geospatial/north_kings_gsa_boundary.json'
import soilCharacteristics from '../../../data/geospatial/soil_characteristics.json'

const useStyles = makeStyles(() => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '3rem',
  },
  rowContainer: {
    display: 'flex',
    [mediaQueries.below992]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [mediaQueries.below992]: {
      alignItems: 'center',
    },
  },
  soilsImage: {
    width: '450px',
    marginRight: '5rem',
    [mediaQueries.below992]: {
      marginBottom: '3rem',
      marginRight: '0',
      width: '300px',
    },
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '3rem',
  },
  text: {
    maxWidth: '500px',
    fontWeight: 400,
    [mediaQueries.below992]: {
      width: '100%',
    },
  },
}))

interface SoilsContentProps {
  images: any
}

const SoilsContent = (props: SoilsContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContainer}>
        <div className={styles.soilsImage}>
          <Img
            fluid={props.images.soilsImage}
            imgStyle={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.columnContainer}>
          <Typography variant='h1' className={styles.header}>
            Soils &#38; Geology
          </Typography>
          <Typography variant='body1' className={styles.text}>
            Surface soil characteristics and subsurface geologic conditions at
            Ball Ranch will govern the rate at which surface water can be used
            to recharge groundwater. Phase 1 of this project investigated both
            soils and geology at the site. Explore the map for a better
            understanding of surface and subsurface conditions at Ball Ranch.
            <br />
            <br />
            The subsurface geologic conditions at Ball Ranch are dominated by
            alluvium (that is, deposits created by flowing rivers) with
            relatively high porosity and capacity to store water. Surface soils
            at Ball Ranch are also conducive to recharge, with high average
            saturated hydraulic conductivity (Ksat - a measure of how easily
            water moves through the soil) of approximately 43 micrometers per
            second. This combination of soils and geology indicates that
            percolating surface water delivered to Ball Ranch into the
            subsurface aquifer is feasible. The next phase of this project will
            include monitoring to improve the accuracy and site specificity of
            soil and geologic conditions in potential recharge areas on Ball
            Ranch.
          </Typography>
        </div>
      </div>

      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />

      <div className={styles.mapContainer}>
        <Map
          data={{
            spatial: [
              sjrcProjectBoundary,
              northKingsGSABoundary,
              soilCharacteristics,
            ],
          }}
          startingCoordinates={
            sourceNameToCoordinatesDictionary.north_kings_gsa_boundary
          }
          startingZoomValue={
            sourceNameToZoomValueDictionary.north_kings_gsa_boundary
          }
        />
      </div>
    </div>
  )
}

export default SoilsContent
