import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import Img from 'gatsby-image'
import { Typography } from '@mui/material'

const useStyles = makeStyles(() => ({}))

interface GroundWaterContentProps {
  image: any
  alt?: string
}

const GroundWaterContent = (props: GroundWaterContentProps) => {
  const styles = useStyles()

  return (
    <div>
      <div>
        <Typography>Ground Water</Typography>
        <Typography>
          Analysis of soils, topography, and groundwater levels at and in the
          vicinity of Ball Ranch indicates that suitable conditions exist to
          percolate surface water delivered to depressions on Ball Ranch to
          shallow (and potentially deep) aquifers, as well as to the adjacent
          San Joaquin River. This page allows spatial and temporal exploration
          of the regional and site conditions affecting groundwater levels at
          Ball Ranch.
        </Typography>
      </div>
      <Img
        fluid={props.image}
        imgStyle={{ objectFit: 'cover' }}
        alt={props.alt}
      />
    </div>
  )
}

export default GroundWaterContent
