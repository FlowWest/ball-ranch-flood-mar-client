import React, { useState } from 'react'
import _ from 'lodash'
import { makeStyles } from '@mui/styles'
import {
  sourceNameToCoordinatesDictionary,
  sourceNameToFillColorDictionary,
  sourceNameToNameDictionary,
  sourceNameToZoomValueDictionary,
} from './map'
import { Slide, IconButton, Typography, Divider, Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong'
import SelectAllIcon from '@mui/icons-material/SelectAll'
import DeselectIcon from '@mui/icons-material/Deselect'
import MenuIcon from '@mui/icons-material/Menu'

const useStyles = makeStyles((theme) => ({
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rowContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  legendContainer: {
    position: 'absolute',
    margin: '1rem',
    bottom: 20,
    left: 0,
    backgroundColor: '#FFF',
    opacity: 0.9,
    width: '25%',
    height: '50%',
    borderRadius: '15px',
    '&:hover': {
      opacity: 1,
    },
  },
  legendScrollableList: {
    overflow: 'scroll',
    maxHeight: '15rem',
    backgroundColor: 'transparent',

    '&::-webkit-scrollbar': {
      '-webkit-appearance': 'none',
      width: '7px',
    },

    '&::-webkit-scrollbar-corner': {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: 'rgba(0, 0, 0, .15)',
      boxShadow: '0 0 1px rgba(255, 255, 255, .5)',
    },
  },
  legendText: {
    fontSize: '1rem',
    '&:hover': {
      cursor: 'pointer',
      color: 'blue',
    },
  },
  legendCheckBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '0.5rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  legendReCenterButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '25px',
    height: '25px',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendToggleAllButton: {
    position: 'absolute',
    bottom: 10,
    right: 45,
    width: '25px',
    height: '25px',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendButtonIcon: {
    width: '100%',
    height: '100%',
  },
  fontWeight400: {
    fontWeight: 200,
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'start',
  },
}))

interface MapLegendProps {
  map: any
  legendOpen: boolean
  setLegendOpen: any
}

const MapLegend = (props: MapLegendProps) => {
  // STYLES
  const styles = useStyles()

  // STATE
  let [toggleAllLayersBool, setToggleAllLayersBool] = useState(false)
  let [activeLayers, setActiveLayers] = useState({
    sjrc_project_boundary: true,
    casgem_well_pts: true,
    fresno_state_wells_pts: true,
    cdec_gages_pts: true,
    big_dry_creek_reservoir: true,
    big_dry_creek: true,
    mcmullin_gsa_boundary: true,
    nhd_lines: true,
    north_kings_gsa_boundary: true,
    soil_characteristics: true,
  })

  // FUNCTIONS
  const toggleLayer = (layerID: string) => {
    const visibility = props.map.getLayoutProperty(layerID, 'visibility')
    let activeLayersCopy: any = { ...activeLayers }
    if (visibility === 'visible') {
      props.map.setLayoutProperty(layerID, 'visibility', 'none')
      activeLayersCopy[layerID] = false
      setActiveLayers(activeLayersCopy)
    } else {
      props.map.setLayoutProperty(layerID, 'visibility', 'visible')
      activeLayersCopy[layerID] = true
      setActiveLayers(activeLayersCopy)
    }
  }

  const toggleAllLayers = () => {
    const visibiltiy = toggleAllLayersBool ? 'visible' : 'none'
    setToggleAllLayersBool(!toggleAllLayersBool)
    let activeLayersCopy: any = { ...activeLayers }
    Object.keys(sourceNameToNameDictionary).forEach((sourceName: string) => {
      props.map.setLayoutProperty(sourceName, 'visibility', visibiltiy)
      activeLayersCopy[sourceName] = toggleAllLayersBool
    })
    setActiveLayers(activeLayersCopy)
  }

  // COMPONENTS
  const LegendItemCmpt = ({ layerID }: { layerID: string }) => {
    return (
      <div className={`${styles.rowContainer} ${styles.alignCenter}`}>
        <Tooltip arrow title='Toggle Layer' placement='top'>
          <div
            className={styles.legendCheckBox}
            onClick={() => toggleLayer(layerID)}
          >
            {activeLayers[layerID as keyof typeof activeLayers] ? (
              <CheckBoxIcon
                style={{
                  color:
                    sourceNameToFillColorDictionary[
                      layerID as keyof typeof sourceNameToFillColorDictionary
                    ],
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  borderRadius: '3px',
                }}
              />
            ) : (
              <CheckBoxOutlineBlankIcon
                style={{
                  color:
                    sourceNameToFillColorDictionary[
                      layerID as keyof typeof sourceNameToFillColorDictionary
                    ],
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  borderRadius: '3px',
                }}
              />
            )}
          </div>
        </Tooltip>
        <Typography
          className={`${styles.legendText} ${styles.fontWeight400}`}
          onClick={() => {
            props.map.flyTo({
              center:
                sourceNameToCoordinatesDictionary[
                  layerID as keyof typeof sourceNameToCoordinatesDictionary
                ],
              essential: true, // this animation is considered essential with respect to prefers-reduced-motion
              zoom: sourceNameToZoomValueDictionary[
                layerID as keyof typeof sourceNameToZoomValueDictionary
              ],
            })
          }}
        >
          {
            sourceNameToNameDictionary[
              layerID as keyof typeof sourceNameToNameDictionary
            ]
          }
        </Typography>
      </div>
    )
  }

  const LegendCmpt = () => {
    return (
      <div className={styles.legendContainer}>
        <div className={styles.columnContainer}>
          <Typography className={styles.fontWeight400}>Legend</Typography>
          <Divider
            flexItem={true}
            sx={{
              border: '1px solid rgb(0, 0, 0,)',
              margin: '0.25rem 2rem 0rem 2rem',
            }}
          />
          <div
            className={`${styles.columnContainer} ${styles.alignStart} ${styles.legendScrollableList}`}
          >
            <LegendItemCmpt layerID='sjrc_project_boundary' />
            <LegendItemCmpt layerID='fresno_state_wells_pts' />
            <LegendItemCmpt layerID='casgem_well_pts' />
            <LegendItemCmpt layerID='cdec_gages_pts' />
            <LegendItemCmpt layerID='soil_characteristics' />
            <LegendItemCmpt layerID='north_kings_gsa_boundary' />
            <LegendItemCmpt layerID='mcmullin_gsa_boundary' />
            <LegendItemCmpt layerID='nhd_lines' />
            <LegendItemCmpt layerID='big_dry_creek_reservoir' />
            <LegendItemCmpt layerID='big_dry_creek' />
          </div>
          <div className={styles.legendToggleAllButton}>
            <Tooltip
              arrow
              title={toggleAllLayersBool ? 'Select All' : 'Clear All'}
              placement='top'
            >
              <IconButton
                onClick={() => toggleAllLayers()}
                className={styles.legendButtonIcon}
              >
                {toggleAllLayersBool ? <SelectAllIcon /> : <DeselectIcon />}
              </IconButton>
            </Tooltip>
          </div>
          <div className={styles.legendReCenterButton}>
            <Tooltip arrow title='Re-Center Map' placement='top'>
              <IconButton
                onClick={() => {
                  props.map.flyTo({
                    center: {
                      lat: 36.80217613741628,
                      lng: -119.82633286515124,
                    },
                    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                    zoom: 9,
                    pitch: 0,
                    bearing: 0,
                  })
                }}
                className={styles.legendButtonIcon}
              >
                <CenterFocusStrongIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <LegendCmpt />
    </>
  )
}

export default MapLegend
