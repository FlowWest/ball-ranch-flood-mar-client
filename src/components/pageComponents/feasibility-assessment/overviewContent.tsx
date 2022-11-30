import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import ImageRow from '../index/imageRow'

const useStyles = makeStyles(() => ({
  contentContainer: {
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'column',
    // paddingBottom: '3rem',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '1rem',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 400,
    maxWidth: '90%',
    marginBottom: '1.5rem',
    alignSelf: 'center',
  },
  chartRowContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  chartImage: {
    width: '60%',
  },
}))

interface FeasibilityOverviewContentProps {
  images: any
}

const OverviewContent = (props: FeasibilityOverviewContentProps) => {
  const styles = useStyles()

  return (
    <div className={styles.contentContainer}>
      <ImageRow
        image={props.images.feasibilityAssesmentChart}
        imageWidth='450px'
        reverse={true}
        header='Feasibility Factors'
        content='The feasibility of flood-driven managed aquifer recharge (Flood-MAR) at Ball Ranch depends on strong stakeholder support and several critical biophysical factors: surface water availability, soil and geologic conditions, groundwater dynamics, and ecological improvements to groundwater dependent ecosystems (GDE). Phase 1 of this project has received very strong stakeholder support. In addition, Phase 1 has completed data acquisition and initial analysis of all of these factors and determined that conditions are generally feasible for Flood-MAR at Ball Ranch (hover over graphic below for a high level summary). Available data, data gaps, and actions needed to implement Flood-MAR at Ball Ranch are described on the data pages for each critical factor. '
        alt='Image of flow-chart'
      />
    </div>
  )
}

export default OverviewContent
