import React from 'react'
import axios from 'axios'

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import {Line} from 'react-chartjs-2'

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
function LineChart(props) {
    const {data, options} = props
  return (
    <Line data={data} options={options}></Line>
  )
}

export default LineChart