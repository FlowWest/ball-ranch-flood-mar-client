import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts'
import { dateFormatter } from '../../util/helpers'
import { nameToChartDataKeysDictionary } from './map'
import { nameToChartLabelsDictionary } from './map'

interface ChartData {
  name: string
  site: string
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
            data={this.props.data?.tabular}
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
                nameToChartDataKeysDictionary[
                  this.props.data
                    .name as keyof typeof nameToChartDataKeysDictionary
                ].xAxis
              }
              tickFormatter={dateFormatter}
              style={{ fontSize: '1rem' }}
            >
              <Label
                position='bottom'
                style={{ opacity: 0.5, textTransform: 'capitalize' }}
              >
                {
                  nameToChartLabelsDictionary[
                    this.props.data
                      .name as keyof typeof nameToChartLabelsDictionary
                  ].xAxis
                }
              </Label>
            </XAxis>
            <YAxis>
              <Label
                angle={270}
                position='left'
                style={{
                  textAnchor: 'middle',
                  opacity: 0.5,
                  textTransform: 'capitalize',
                }}
              >
                {
                  nameToChartLabelsDictionary[
                    this.props.data
                      .name as keyof typeof nameToChartLabelsDictionary
                  ].yAxis
                }
              </Label>
            </YAxis>
            <Tooltip />
            <Line
              type='monotone'
              dataKey={
                nameToChartDataKeysDictionary[
                  this.props.data
                    .name as keyof typeof nameToChartDataKeysDictionary
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
