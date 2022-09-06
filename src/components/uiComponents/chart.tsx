import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts'
import { dateFormatter } from '../../util/helpers'
import { nameToChartUnitsDictionary } from './map'

interface ChartData {
  name: string
  tabular: any[]
}

interface ChartProps {
  data: ChartData
}
interface ChartState {}

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
            data={this.props.data?.tabular[0]} //TODO: Currently only picks cdecH41 in CDEC Gafe Pts scenario
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 25,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey={
                nameToChartUnitsDictionary[
                  this.props.data
                    .name as keyof typeof nameToChartUnitsDictionary
                ].xAxis
              }
              tickFormatter={dateFormatter}
              style={{ fontSize: '1rem' }}
            >
              <Label position='bottom' style={{ opacity: 0.5, textTransform: 'capitalize' }}>
                {
                  nameToChartUnitsDictionary[
                    this.props.data
                      .name as keyof typeof nameToChartUnitsDictionary
                  ].xAxis.split('_')[0]
                }
              </Label>
            </XAxis>
            <YAxis>
              <Label
                angle={270}
                position='left'
                style={{ textAnchor: 'middle', opacity: 0.5, textTransform: 'capitalize' }}
              >
                {
                  nameToChartUnitsDictionary[
                    this.props.data
                      .name as keyof typeof nameToChartUnitsDictionary
                  ].yAxis.split('_')[0]
                }
              </Label>
            </YAxis>
            <Tooltip />
            <Line
              type='monotone'
              dataKey={
                nameToChartUnitsDictionary[
                  this.props.data
                    .name as keyof typeof nameToChartUnitsDictionary
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
