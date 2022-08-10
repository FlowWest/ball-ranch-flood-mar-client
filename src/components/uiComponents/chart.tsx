import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { flatten } from 'lodash'

interface ChartData {
  name: string
  tabular: any[]
}

interface ChartProps {
  data: ChartData
}
interface ChartState {}

const dataToChartDictionary = {
  sjrc_project_boundary: { xAxis: 'date_time', yAxis: 'ensemble_et' },
  casgem_well_pts: { xAxis: 'date', yAxis: 'gse_gwe' },
  fresno_state_wells_pts: { xAxis: 'date', yAxis: 'water_table_elevation_ft' },
  cdec_gages_pts: { xAxis: 'obs_date', yAxis: 'value' },
}

export default class Chart extends React.Component<ChartProps, ChartState> {
  constructor(props: any) {
    super(props)
  }

  render() {
    if (Object.keys(this.props.data).length) {
      return (
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={this.props.data?.tabular[0]}
            // data={flatten(this.props.data?.tabular)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey={
                dataToChartDictionary[
                  this.props.data.name as keyof typeof dataToChartDictionary
                ].xAxis
              }
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey={
                dataToChartDictionary[
                  this.props.data.name as keyof typeof dataToChartDictionary
                ].yAxis
              }
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )
    } else {
      return <></>
    }
  }
}
