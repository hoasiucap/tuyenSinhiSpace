import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

import {Pie} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)

function PieChart(props) {
    const {dataPie, options} = props
  return (
    <Pie data={dataPie}/>
  )
}

export default PieChart