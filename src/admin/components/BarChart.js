import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
function BarChart(props) {
    const {datachart, options} = props
  return (
    <Bar data={datachart} options={options}/>
  )
}

export default BarChart