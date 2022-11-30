import React, { useState, useCallback } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Divider, Theme, Typography } from '@mui/material'
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from 'react-compare-slider'
import { mediaQueries } from '../../layout/theme'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { startCase } from 'lodash'

import aerialPast from '../../../images/ball-ranch-past.jpg'
import aerialCurrent from '../../../images/ball-ranch-current.jpg'

const useStyles = makeStyles<Theme>(() => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  landingContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [mediaQueries.below992]: {
      height: '700px',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTextContent: {
    maxWidth: '500px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    [mediaQueries.below992]: {
      maxWidth: '100%',
      marginBottom: '3rem',
    },
    [mediaQueries.above1200]: {
      maxWidth: '40%',
    },
  },
  overlayImageContent: {
    height: '100%',
    marginLeft: '3rem',
    [mediaQueries.below992]: {
      height: '90%',
      marginLeft: '0rem',
      marginBottom: '3rem',
    },
  },
  greenContainer: {
    backgroundColor: '#8A9155A6',
    width: '100%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageSliderContainer: {
    height: '100%',
    width: '100%',
    position: 'relative',
    marginBottom: '2rem',
  },
  imageSliderCaption: {
    textAlign: 'center',
    maxWidth: '90%',
  },
  header: {
    fontFamily: 'Oswald',
    fontWeight: 600,
    marginBottom: '2rem',
    [mediaQueries.below992]: {
      textAlign: 'center',
    },
  },
  text: {
    fontWeight: 400,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
}))

const rows = [
  {
    scientificName: 'Castilleja campestris var. succulenta',
    commonName: "Succulent owl's-clover",
  },
  {
    scientificName: 'Orcuttia inaequalis',
    commonName: 'San Joaquin Valley Orcutt grass',
  },
  {
    scientificName: 'Branchinecta lynchi',
    commonName: 'Vernal pool fairy shrimp',
  },
  { scientificName: 'Spea hammondii', commonName: 'Western spadefoot' },
  {
    scientificName: 'Ambystoma californiense',
    commonName: 'California tiger salamander - central California DPS',
  },
  {
    scientificName: 'Great Valley Mixed Riparian Forest',
    commonName: 'Great Valley Mixed Riparian Forest',
  },
  {
    scientificName: 'Sycamore Alluvial Woodland',
    commonName: 'Sycamore Alluvial Woodland',
  },
  {
    scientificName: 'Ambystoma californiense',
    commonName: 'California tiger salamander - central California DPS',
  },
  { scientificName: 'Mylopharodon conocephalus', commonName: 'Hardhead' },
  {
    scientificName: 'Northern Hardpan Vernal Pool',
    commonName: 'Northern Hardpan Vernal Pool',
  },
  {
    scientificName: 'Linderiella occidentalis',
    commonName: 'California linderiella',
  },
  {
    scientificName: 'Desmocerus californicus dimorphus',
    commonName: 'valley elderberry longhorn beetle',
  },
  { scientificName: 'Athene cunicularia', commonName: 'burrowing owl' },
  {
    scientificName: 'Eryngium spinosepalum',
    commonName: 'spiny-sepaled button-celery',
  },
  { scientificName: 'Downingia pusilla', commonName: 'dwarf downingia' },
  { scientificName: 'Lytta moesta', commonName: 'moestan blister beetle' },
  { scientificName: 'Euderma maculatum', commonName: 'spotted bat' },
  {
    scientificName: 'Vulpes macrotis mutica',
    commonName: 'San Joaquin kit fox',
  },
  { scientificName: 'Emys marmorata', commonName: 'western pond turtle' },
  {
    scientificName: 'Pseudobahia bahiifolia',
    commonName: "Hartweg's golden sunburst",
  },
  { scientificName: 'Buteo swainsoni', commonName: "Swainson's hawk" },
  {
    scientificName: 'Coccyzus americanus occidentalis',
    commonName: 'western yellow-billed cuckoo',
  },
  { scientificName: 'Agelaius tricolor', commonName: 'tricolored blackbird' },
  { scientificName: 'Sagittaria sanfordii', commonName: "Sanford's arrowhead" },
  { scientificName: 'Calycadenia hooveri', commonName: "Hoover's calycadenia" },
]

interface EcologyContentProps {
  images: any
}

const EcologyContent = (props: EcologyContentProps) => {
  const [sliderValue, setSliderValue] = useState(50)

  const styles = useStyles()

  const handlePositionChange = useCallback(
    (position) => console.log('[Portrait]', position),
    []
  )

  return (
    <div className={styles.contentContainer}>
      <div className={styles.landingContainer}>
        <div className={styles.overlayTextContent}>
          <Typography variant='h1' className={styles.header}>
            Ecological Conditions at Ball Ranch
          </Typography>
          <Typography variant='body1' className={styles.text}>
            Groundwater Dependent Ecosystems (GDEs) include interconnected
            surface waters (ISWs) such as springs, wetlands, rivers, and natural
            lakes. Prior to the major hydrologic and landscape changes that
            occurred at and adjacent to Ball Ranch, the Ball Ranch site
            exhibited many GDE characteristics (see the historical and current
            site photo comparison). Groundwater dependent species in the Ball
            Ranch region typically include aquifer microorganisms; stygofauna;
            wetland, riparian and terrestrial phreatophytic vegetation; and
            fauna and flora of connected wetlands, streams. Phase 1 of this
            project analyzed data from the California Natural Diversity Database
            (CNDDB) and determined recovery of the following GDE species is
            feasible with successful MAR at Ball Ranch.
          </Typography>
        </div>

        <div className={styles.overlayImageContent}>
          <div className={styles.greenContainer}>
            <div
              className={`${styles.imageSliderContainer} ${styles.rowContainer}`}
            >
              <ReactCompareSlider
                {...props}
                handle={
                  <ReactCompareSliderHandle
                    buttonStyle={{
                      backdropFilter: undefined,
                      background: 'white',
                      border: 0,
                      color: '#333',
                    }}
                  />
                }
                itemOne={
                  <ReactCompareSliderImage
                    src={aerialPast}
                    style={{
                      filter: 'grayscale(1)',
                      objectFit: 'contain',
                      backgroundColor: 'black',
                    }}
                    alt='one'
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={aerialCurrent}
                    alt='two'
                    style={{ objectFit: 'contain', backgroundColor: 'black' }}
                  />
                }
                style={{
                  display: 'flex',
                  width: '100%',
                  height: '60vh',
                }}
              />
            </div>
            <Typography
              variant='body1'
              className={`${styles.text} ${styles.imageSliderCaption}`}
            >
              Ball Ranch ecological conditions in 1937 (prior to site
              development) and present day. Use the slider to compare historical
              and current ecological conditions at the site.
            </Typography>
          </div>
        </div>
      </div>

      <Divider
        sx={{ border: '1px solid rgba(0, 0, 0, 0.25)', margin: '5rem 6rem' }}
      />

      <Typography style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Ball Ranch GDE historic species/communities’ occurrence (CNDDB 2022,
        extracted)
      </Typography>
      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px -8px 45px 6px rgba(0,0,0,0.1)' }}
      >
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='body1' className={styles.text}>
                  Scientific Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='body1' className={styles.text}>
                  Common Name
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.scientificName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <Typography variant='body1' className={styles.text}>
                    {startCase(row.scientificName)}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='body1' className={styles.text}>
                    {startCase(row.commonName)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default EcologyContent
